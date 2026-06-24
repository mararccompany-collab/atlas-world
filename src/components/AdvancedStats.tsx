import type { Country } from '../data/countriesWithDetails';

function parseNumber(str: string): number {
  const cleaned = str.replace(/[^0-9.]/g, '');
  const num = parseFloat(cleaned);
  if (isNaN(num)) return 0;
  if (str.includes('تريليون')) return num * 1_000_000_000_000;
  if (str.includes('مليار')) return num * 1_000_000_000;
  if (str.includes('مليون')) return num * 1_000_000;
  return num;
}

function parsePop(str: string): number {
  return parseInt(str.replace(/,/g, '')) || 0;
}

interface AdvancedStatsProps {
  countries: Country[];
}

export default function AdvancedStats({ countries: data }: AdvancedStatsProps) {
  if (data.length === 0) {
    return (
      <div className="text-center py-20" dir="rtl">
        <div className="text-6xl mb-4">📊</div>
        <h3 className="text-2xl font-bold text-gray-400">لا توجد بيانات</h3>
        <p className="text-gray-500 mt-2">اختر دولاً أخرى لعرض الإحصائيات</p>
      </div>
    );
  }

  const totalPopulation = data.reduce((sum, c) => sum + parsePop(c.population), 0);
  const totalArea = data.reduce((sum, c) => sum + parseNumber(c.area), 0);
  const arabCount = data.filter(c => c.isArab).length;
  const nuclearCount = data.filter(c => c.military.nuclear).length;
  const militaryBudgetTotal = data.reduce((sum, c) => sum + parseNumber(c.military.budget), 0);
  const gdpTotal = data.reduce((sum, c) => sum + parseNumber(c.economy.gdp), 0);

  const density = totalArea > 0 ? ((totalPopulation / totalArea) * 1_000_000).toFixed(0) : '0';

  const sortedByPop = [...data].sort((a, b) => parsePop(b.population) - parsePop(a.population));
  const sortedByArea = [...data].sort((a, b) => parseNumber(b.area) - parseNumber(a.area));
  const sortedByMilitary = [...data].filter(c => c.military.rank > 0).sort((a, b) => a.military.rank - b.military.rank);
  const sortedByGDP = [...data].sort((a, b) => parseNumber(b.economy.gdp) - parseNumber(a.economy.gdp));

  return (
    <div className="space-y-8" dir="rtl">
      <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
        📊 الإحصائيات المتقدمة
      </h2>

      {/* المؤشرات الرئيسية */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatBox label="عدد الدول" value={data.length.toString()} color="blue" icon="🌍" />
        <StatBox label="إجمالي السكان" value={`${(totalPopulation / 1_000_000_000).toFixed(2)} مليار`} color="emerald" icon="👥" />
        <StatBox label="المساحة الكلية" value={`${(totalArea / 1_000_000).toFixed(1)} مليون كم²`} color="purple" icon="📐" />
        <StatBox label="الكثافة السكانية" value={`${density} نسمة/كم²`} color="cyan" icon="📊" />
        <StatBox label="الدول العربية" value={arabCount.toString()} color="amber" icon="🌙" />
        <StatBox label="القوى النووية" value={nuclearCount.toString()} color="red" icon="☢️" />
        <StatBox label="الميزانية العسكرية" value={`$${(militaryBudgetTotal / 1_000_000_000).toFixed(1)} مليار`} color="orange" icon="⚔️" />
        <StatBox label="الناتج المحلي الإجمالي" value={`$${(gdpTotal / 1_000_000_000_000).toFixed(1)} تريليون`} color="lime" icon="💰" />
      </div>

      {/* التصنيفات التفصيلية */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* الأكثر سكاناً */}
        <RankingTable title="🏙️ أكثر الدول سكاناً" items={sortedByPop.slice(0, 10)} valueExtractor={c => c.population} rankColor="amber" />
        
        {/* الأكبر مساحة */}
        <RankingTable title="🗺️ أكبر الدول مساحة" items={sortedByArea.slice(0, 10)} valueExtractor={c => c.area} rankColor="cyan" />

        {/* أقوى الجيوش */}
        <RankingTable title="⚔️ أقوى الجيوش" items={sortedByMilitary.slice(0, 10)} valueExtractor={c => `#${c.military.rank}`} rankColor="red" />

        {/* أقوى الاقتصادات */}
        <RankingTable title="💰 أقوى الاقتصادات" items={sortedByGDP.slice(0, 10)} valueExtractor={c => c.economy.gdp} rankColor="green" />
      </div>
    </div>
  );
}

function StatBox({ label, value, color, icon }: { label: string; value: string; color: string; icon: string }) {
  const colors: Record<string, string> = {
    blue: 'from-blue-900/30 to-blue-800/20 border-blue-500/30 text-blue-400',
    emerald: 'from-emerald-900/30 to-emerald-800/20 border-emerald-500/30 text-emerald-400',
    purple: 'from-purple-900/30 to-purple-800/20 border-purple-500/30 text-purple-400',
    cyan: 'from-cyan-900/30 to-cyan-800/20 border-cyan-500/30 text-cyan-400',
    amber: 'from-amber-900/30 to-amber-800/20 border-amber-500/30 text-amber-400',
    red: 'from-red-900/30 to-red-800/20 border-red-500/30 text-red-400',
    orange: 'from-orange-900/30 to-orange-800/20 border-orange-500/30 text-orange-400',
    lime: 'from-lime-900/30 to-lime-800/20 border-lime-500/30 text-lime-400',
  };
  return (
    <div className={`bg-gradient-to-br ${colors[color] || colors.blue} border rounded-xl p-5 hover:scale-[1.02] transition-all`}>
      <div className="text-2xl mb-1">{icon}</div>
      <div className={`text-sm font-semibold ${colors[color]?.split(' ')[4] || 'text-blue-400'} mb-1`}>{label}</div>
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
}

function RankingTable({ title, items, valueExtractor, rankColor }: { title: string; items: Country[]; valueExtractor: (c: Country) => string; rankColor: string }) {
  const borderColor = rankColor === 'amber' ? 'border-amber-500/30' : rankColor === 'cyan' ? 'border-cyan-500/30' : rankColor === 'red' ? 'border-red-500/30' : 'border-green-500/30';
  const bgColor = rankColor === 'amber' ? 'from-amber-500/10' : rankColor === 'cyan' ? 'from-cyan-500/10' : rankColor === 'red' ? 'from-red-500/10' : 'from-green-500/10';
  const textColor = rankColor === 'amber' ? 'text-amber-400' : rankColor === 'cyan' ? 'text-cyan-400' : rankColor === 'red' ? 'text-red-400' : 'text-green-400';

  return (
    <div className={`bg-gradient-to-br ${bgColor} to-transparent border ${borderColor} rounded-2xl p-5 overflow-hidden`}>
      <h3 className={`text-xl font-bold ${textColor} mb-4`}>{title}</h3>
      <div className="space-y-1">
        {items.map((c, i) => (
          <div key={c.id} className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-white/5 transition-colors">
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${i < 3 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-white/10 text-gray-400'}`}>
              {i + 1}
            </span>
            <span className="text-2xl">{c.flag}</span>
            <span className="flex-1 font-semibold text-white truncate">{c.nameAr}</span>
            <span className={`font-bold ${textColor} text-sm whitespace-nowrap`}>{valueExtractor(c)}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
