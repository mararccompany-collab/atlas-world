import { useState, useEffect, useCallback } from 'react';
import type { Country } from '../data/countriesWithDetails';
import { enrichedCountries } from '../data/countriesWithDetails';

interface RoundResult {
  roundName: string;
  roundNameAr: string;
  winnerId: string;
  winnerAr: string;
  detail: string;
  attackerScore: number;
  defenderScore: number;
}

interface WarState {
  status: 'idle' | 'simulating' | 'done';
  currentRound: number;
  rounds: RoundResult[];
  finalWinnerId: string;
  finalWinnerAr: string;
  reason: string;
}

function parseNum(s: string | undefined): number {
  if (!s) return 0;
  const cleaned = s.replace(/[^0-9.]/g, '');
  return parseFloat(cleaned) || 0;
}

function parsePopulation(s: string): number {
  return parseInt(s.replace(/,/g, '')) || 0;
}

function fmt(n: number): string {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function getMilitaryScore(c: Country): number {
  const army = parseNum(c.armyPersonnel);
  const navy = parseNum(c.navyPersonnel);
  const air = parseNum(c.airForcePersonnel);
  const tanks = parseNum(c.military.tanks);
  const aircraft = parseNum(c.military.aircraft);
  const navyShips = parseNum(c.military.navy);
  const reserve = parseNum(c.reservePersonnel);
  const nuclear = c.military.nuclear ? 200 : 0;
  const pop = parsePopulation(c.population);
  return army * 0.3 + navy * 0.15 + air * 0.15 + tanks * 0.1 + aircraft * 0.1 + navyShips * 0.05 + reserve * 0.05 + nuclear + (pop / 1000000) * 0.02;
}

function getAirScore(c: Country): number {
  const air = parseNum(c.airForcePersonnel);
  const aircraft = parseNum(c.military.aircraft);
  return air * 0.6 + aircraft * 0.4;
}

function getNavyScore(c: Country): number {
  const navy = parseNum(c.navyPersonnel);
  const ships = parseNum(c.military.navy);
  return navy * 0.5 + ships * 0.5;
}

function getGroundScore(c: Country): number {
  const army = parseNum(c.armyPersonnel);
  const tanks = parseNum(c.military.tanks);
  const pop = parsePopulation(c.population);
  return army * 0.5 + tanks * 0.3 + (pop / 10000000) * 0.2;
}

function calcLosses(scoreA: number, scoreB: number, baseLoss: number): { aLoss: string; bLoss: string } {
  const total = scoreA + scoreB;
  if (total === 0) return { aLoss: (baseLoss * 0.5).toFixed(0), bLoss: (baseLoss * 0.5).toFixed(0) };
  const ratio = scoreA / total;
  const aLoss = Math.round(baseLoss * (1 - ratio) * (1 + Math.random() * 0.3));
  const bLoss = Math.round(baseLoss * ratio * (1 + Math.random() * 0.3));
  return { aLoss: fmt(aLoss), bLoss: fmt(bLoss) };
}

function simulateWar(attacker: Country, defender: Country): { rounds: RoundResult[]; winnerId: string; winnerAr: string; reason: string } {
  const rounds: RoundResult[] = [];

  const aAir = getAirScore(attacker);
  const dAir = getAirScore(defender);
  const airWinner = aAir > dAir ? attacker.id : defender.id;
  const airDetail = aAir > dAir ? ('تفوق ' + attacker.nameAr + ' جواً على ' + defender.nameAr)
    : dAir > aAir ? ('تفوقت ' + defender.nameAr + ' جواً على ' + attacker.nameAr)
    : 'تعادل جوي بين الطرفين';
  rounds.push({ roundName: 'Air War', roundNameAr: 'الحرب الجوية', winnerId: airWinner, winnerAr: airWinner === attacker.id ? attacker.nameAr : defender.nameAr, detail: airDetail, attackerScore: Math.round(aAir), defenderScore: Math.round(dAir) });

  const aNavy = getNavyScore(attacker);
  const dNavy = getNavyScore(defender);
  const navyWinner = aNavy > dNavy ? attacker.id : defender.id;
  const navyDetail = aNavy > dNavy ? ('أسطول ' + attacker.nameAr + ' يدمر سفن ' + defender.nameAr)
    : dNavy > aNavy ? ('أسطول ' + defender.nameAr + ' يهاجم السفن')
    : 'لا يوجد أسطول بحري للمشاركة';
  rounds.push({ roundName: 'Naval War', roundNameAr: 'الحرب البحرية', winnerId: navyWinner, winnerAr: navyWinner === attacker.id ? attacker.nameAr : defender.nameAr, detail: navyDetail, attackerScore: Math.round(aNavy), defenderScore: Math.round(dNavy) });

  const aGround = getGroundScore(attacker);
  const dGround = getGroundScore(defender);
  const groundWinner = aGround > dGround ? attacker.id : defender.id;
  const losses = calcLosses(aGround, dGround, 5000);
  const groundDetail = aGround > dGround
    ? (attacker.nameAr + ' تقتحم أراضي ' + defender.nameAr + ' وتسيطر عليها (' + losses.bLoss + ' قتيل)')
    : (defender.nameAr + ' تتصدى للهجوم البري ' + attacker.nameAr + ' تخسر (' + losses.aLoss + ' قتيل)');
  rounds.push({ roundName: 'Ground War', roundNameAr: 'الحرب البرية', winnerId: groundWinner, winnerAr: groundWinner === attacker.id ? attacker.nameAr : defender.nameAr, detail: groundDetail, attackerScore: Math.round(aGround), defenderScore: Math.round(dGround) });

  const aTotal = getMilitaryScore(attacker);
  const dTotal = getMilitaryScore(defender);
  const nuclearBonus = attacker.military.nuclear && !defender.military.nuclear ? 100 : defender.military.nuclear && !attacker.military.nuclear ? -100 : 0;
  const aFinal = aTotal + (attacker.id === airWinner ? 20 : 0) + (attacker.id === navyWinner ? 15 : 0) + (attacker.id === groundWinner ? 30 : 0) + nuclearBonus;
  const dFinal = dTotal + (defender.id === airWinner ? 20 : 0) + (defender.id === navyWinner ? 15 : 0) + (defender.id === groundWinner ? 30 : 0) - nuclearBonus;
  const finalWinner = aFinal > dFinal ? attacker.id : defender.id;
  let reason = '';
  if (aFinal > dFinal) {
    reason = attacker.military.nuclear && !defender.military.nuclear
      ? ('تفوق ' + attacker.nameAr + ' بالسلاح النووي يحسم المعركة لصالحه ضد ' + defender.nameAr)
      : ('بعد معارك شرسة يحقق ' + attacker.nameAr + ' النصر على ' + defender.nameAr);
  } else {
    reason = defender.military.nuclear && !attacker.military.nuclear
      ? ('تفوق ' + defender.nameAr + ' بالسلاح النووي يحسم المعركة لصالحه ضد ' + attacker.nameAr)
      : ('نجح ' + defender.nameAr + ' في صد الهجوم وتحقيق النصر على ' + attacker.nameAr);
  }
  rounds.push({ roundName: 'Final Assault', roundNameAr: 'الهجوم النهائي', winnerId: finalWinner, winnerAr: finalWinner === attacker.id ? attacker.nameAr : defender.nameAr, detail: reason, attackerScore: Math.round(aFinal), defenderScore: Math.round(dFinal) });

  return { rounds, winnerId: finalWinner, winnerAr: finalWinner === attacker.id ? attacker.nameAr : defender.nameAr, reason };
}

const totalRounds = 4;

export default function WarGame({ onClose }: { onClose: () => void }) {
  const [attacker, setAttacker] = useState<Country | null>(null);
  const [defender, setDefender] = useState<Country | null>(null);
  const [war, setWar] = useState<WarState>({ status: 'idle', currentRound: 0, rounds: [], finalWinnerId: '', finalWinnerAr: '', reason: '' });
  const [showWinner, setShowWinner] = useState(false);

  const startWar = useCallback(() => {
    if (!attacker || !defender) return;
    const result = simulateWar(attacker, defender);
    setWar({ status: 'simulating', currentRound: 0, rounds: result.rounds, finalWinnerId: result.winnerId, finalWinnerAr: result.winnerAr, reason: result.reason });
    setShowWinner(false);
  }, [attacker, defender]);

  useEffect(() => {
    if (war.status !== 'simulating') return;
    if (war.currentRound >= totalRounds) {
      const timer = setTimeout(() => { setWar(prev => ({ ...prev, status: 'done' })); setShowWinner(true); }, 800);
      return () => clearTimeout(timer);
    }
    const timer = setTimeout(() => { setWar(prev => ({ ...prev, currentRound: prev.currentRound + 1 })); }, 1500);
    return () => clearTimeout(timer);
  }, [war.status, war.currentRound]);

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white" dir="rtl">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
      </div>
      <header className="relative z-10 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/95 to-transparent sticky top-0 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
          <button onClick={onClose} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all">→ رجوع</button>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-red-300 to-orange-400 bg-clip-text text-transparent">⚔️ محاكي الحروب</h1>
          <div></div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {war.status === 'idle' && (
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center">
              <div className="text-8xl mb-6 animate-pulse">⚔️</div>
              <h2 className="text-4xl font-black bg-gradient-to-r from-red-300 to-orange-300 bg-clip-text text-transparent">ميدان المعركة</h2>
              <p className="text-gray-400 mt-4 text-lg">اختر دولتين لبدء محاكاة الحرب</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-red-400 font-bold text-lg mb-3">🇪🇬 المهاجم</label>
                <select value={attacker?.id || ''} onChange={e => setAttacker(enrichedCountries.find(c => c.id === e.target.value) || null)}
                  className="w-full bg-gray-900 border border-red-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors">
                  <option value="">اختر دولة المهاجم</option>
                  {enrichedCountries.map(c => (
                    <option key={c.id} value={c.id} disabled={c.id === defender?.id}>{c.flag} {c.nameAr}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-blue-400 font-bold text-lg mb-3">🔵 المدافع</label>
                <select value={defender?.id || ''} onChange={e => setDefender(enrichedCountries.find(c => c.id === e.target.value) || null)}
                  className="w-full bg-gray-900 border border-blue-500/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors">
                  <option value="">اختر دولة المدافع</option>
                  {enrichedCountries.map(c => (
                    <option key={c.id} value={c.id} disabled={c.id === attacker?.id}>{c.flag} {c.nameAr}</option>
                  ))}
                </select>
              </div>
            </div>

            {attacker && defender && (
              <div className="bg-gray-900/60 border border-gray-700/50 rounded-2xl p-6">
                <h3 className="text-xl font-bold text-center mb-6">⚔️ {attacker.nameAr} ضد {defender.nameAr}</h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-6xl mb-2">{attacker.flag}</div>
                    <div className="font-bold text-red-400">{attacker.nameAr}</div>
                    <div className="text-gray-400 text-sm mt-2">القوة العسكرية: {fmt(Math.round(getMilitaryScore(attacker)))}</div>
                    <div className="text-gray-500 text-xs">{attacker.military.personnel} جندي | الترتيب #{attacker.military.rank}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-6xl mb-2">{defender.flag}</div>
                    <div className="font-bold text-blue-400">{defender.nameAr}</div>
                    <div className="text-gray-400 text-sm mt-2">القوة العسكرية: {fmt(Math.round(getMilitaryScore(defender)))}</div>
                    <div className="text-gray-500 text-xs">{defender.military.personnel} جندي | الترتيب #{defender.military.rank}</div>
                  </div>
                </div>
              </div>
            )}

            <div className="text-center">
              <button onClick={startWar} disabled={!attacker || !defender}
                className="px-10 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-black text-xl disabled:opacity-30 disabled:cursor-not-allowed hover:from-red-500 hover:to-orange-500 transition-all shadow-lg shadow-red-500/25">
                🔥 بدء المحاكاة
              </button>
            </div>
          </div>
        )}

        {(war.status === 'simulating' || war.status === 'done') && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-black">
                <span className="text-red-400">{attacker?.nameAr}</span>
                <span className="mx-4 text-gray-500">ضد</span>
                <span className="text-blue-400">{defender?.nameAr}</span>
              </h2>
              <div className="text-6xl mt-4 flex justify-center gap-8">
                <span>{attacker?.flag}</span>
                <span className="text-3xl text-gray-600">VS</span>
                <span>{defender?.flag}</span>
              </div>
            </div>

            <div className="space-y-4">
              {war.rounds.slice(0, war.currentRound).map((round, i) => (
                <div key={i}
                  className={'bg-gray-900/80 border rounded-2xl p-6 transition-all duration-500 ' +
                    (round.winnerId === attacker?.id ? 'border-red-500/40 shadow-red-500/10' : 'border-blue-500/40 shadow-blue-500/10') +
                    ' shadow-lg'}>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{round.roundNameAr}</h3>
                    <span className={'px-3 py-1 rounded-full text-sm font-bold ' +
                      (round.winnerId === attacker?.id ? 'bg-red-500/20 text-red-300' : 'bg-blue-500/20 text-blue-300')}>
                      ✅ {round.winnerAr}</span>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-red-400">{attacker?.nameAr}: {fmt(round.attackerScore)}</span>
                        <span className="text-blue-400">{defender?.nameAr}: {fmt(round.defenderScore)}</span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden flex">
                        <div className="bg-gradient-to-l from-red-500 to-red-600 h-full transition-all duration-1000"
                          style={{ width: ((round.attackerScore / Math.max(round.attackerScore + round.defenderScore, 1)) * 100) + '%' }} />
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-1000"
                          style={{ width: ((round.defenderScore / Math.max(round.attackerScore + round.defenderScore, 1)) * 100) + '%' }} />
                      </div>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{round.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {war.currentRound < totalRounds && war.status === 'simulating' && (
              <div className="text-center py-8">
                <div className="text-5xl animate-bounce mb-4">⏳</div>
                <p className="text-gray-400 text-lg">انتظار الجولة التالية...</p>
              </div>
            )}

            {showWinner && (
              <div className="mt-8 text-center">
                <div className={'inline-block bg-gradient-to-br from-gray-900 to-gray-950 border-2 rounded-3xl p-8 shadow-2xl ' +
                  (war.finalWinnerId === attacker?.id ? 'border-red-500/50 shadow-red-500/20' : 'border-blue-500/50 shadow-blue-500/20')}>
                  <div className="text-7xl mb-4">🏆</div>
                  <div className={'text-5xl font-black mb-2 ' +
                    (war.finalWinnerId === attacker?.id ? 'text-red-400' : 'text-blue-400')}>{war.finalWinnerAr}</div>
                  <div className="text-4xl mb-6">{war.finalWinnerId === attacker?.id ? attacker?.flag : defender?.flag}</div>
                  <p className="text-gray-300 text-lg max-w-xl leading-relaxed">{war.reason}</p>
                  <div className="mt-8 flex gap-4 justify-center">
                    <button onClick={() => { setWar({ status: 'idle', currentRound: 0, rounds: [], finalWinnerId: '', finalWinnerAr: '', reason: '' }); setShowWinner(false); }}
                      className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 transition-all font-bold">🔄 إعادة المحاكاة</button>
                    <button onClick={() => {
                      const w = war.finalWinnerId;
                      setAttacker(w === attacker?.id ? attacker : defender);
                      setWar({ status: 'idle', currentRound: 0, rounds: [], finalWinnerId: '', finalWinnerAr: '', reason: '' });
                      setShowWinner(false);
                    }}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold transition-all hover:from-amber-400 hover:to-orange-400">
                      👑 استمرار كبطل</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
