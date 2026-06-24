import { Country, countries } from '../data/countries';

interface AdvancedStatsProps {
  countries: Country[];
}

export default function AdvancedStats({ countries: filteredCountries }: AdvancedStatsProps) {
  // حساب الإحصائيات
  const totalPopulation = filteredCountries.reduce((sum, c) => {
    const pop = parseInt(c.population.replace(/,/g, ''));
    return sum + (isNaN(pop) ? 0 : pop);
  }, 0);

  const totalArea = filteredCountries.reduce((sum, c) => {
    const area = parseInt(c.area.replace(/,/g, '').split(' ')[0]);
    return sum + (isNaN(area) ? 0 : area);
  }, 0);

  const arabCount = filteredCountries.filter(c => c.isArab).length;
  const nuclearCount = filteredCountries.filter(c => c.military.nuclear).length;
  
  const militaryBudgetTotal = filteredCountries.reduce((sum, c) => {
    const budget = parseInt(c.military.budget.replace(/[^\d]/g, ''));
    return sum + (isNaN(budget) ? 0 : budget);
  }, 0);

  const gdpTotal = filteredCountries.reduce((sum, c) => {
    const gdp = parseInt(c.economy.gdp.replace(/[^\d]/g, ''));
    return sum + (isNaN(gdp) ? 0 : gdp);
  }, 0);

  // إيجاد أعلى وأقل قيم
  const highestPopulation = filteredCountries.reduce((prev, current) => 
    parseInt(current.population.replace(/,/g, '')) > parseInt(prev.population.replace(/,/g, '')) ? current : prev
  );

  const highestArea = filteredCountries.reduce((prev, current) => 
    parseInt(current.area.replace(/,/g, '')) > parseInt(prev.area.replace(/,/g, '')) ? current : prev
  );

  const strongestMilitary = filteredCountries.find(c => c.military.rank === 1) || filteredCountries[0];

  return (
    <div className="space-y-6" dir="rtl">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
        📊 الإحصائيات المتقدمة
      </h2>

      {/* الإحصائيات الرئيسية */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl p-6 hover:border-blue-500/60 transition-all">
          <div className="text-blue-400 text-sm font-semibold mb-2">عدد الدول</div>
          <div className="text-3xl font-bold text-white">{filteredCountries.length}</div>
        </div>

        <div className="bg-gradient-to-br from-emerald-900/30 to-emerald-800/20 border border-emerald-500/30 rounded-xl p-6 hover:border-emerald-500/60 transition-all">
          <div className="text-emerald-400 text-sm font-semibold mb-2">السكان (مليارات)</div>
          <div className="text-3xl font-bold text-white">{(totalPopulation / 1_000_000_000).toFixed(2)}</div>
        </div>

        <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl p-6 hover:border-purple-500/60 transition-all">
          <div className="text-purple-400 text-sm font-semibold mb-2">المساحة (مليون كم²)</div>
          <div className="text-3xl font-bold text-white">{(totalArea / 1_000_000).toFixed(1)}</div>
        </div>

        <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 border border-red-500/30 rounded-xl p-6 hover:border-red-500/60 transition-all">
          <div className="text-red-400 text-sm font-semibold mb-2">دول نووية</div>
          <div className="text-3xl font-bold text-white">{nuclearCount}</div>
        </div>

        <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-xl p-6 hover:border-orange-500/60 transition-all">
          <div className="text-orange-400 text-sm font-semibold mb-2">الدول العربية</div>
          <div className="text-3xl font-bold text-white">{arabCount}</div>
        </div>

        <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 rounded-xl p-6 hover:border-cyan-500/60 transition-all">
          <div className="text-cyan-400 text-sm font-semibold mb-2">الميزانية العسكرية (مليار)</div>
          <div className="text-3xl font-bold text-white">${(militaryBudgetTotal / 1_000_000_000).toFixed(1)}</div>
        </div>

        <div className="bg-gradient-to-br from-lime-900/30 to-lime-800/20 border border-lime-500/30 rounded-xl p-6 hover:border-lime-500/60 transition-all">
          <div className="text-lime-400 text-sm font-semibold mb-2">الناتج المحلي (تريليون)</div>
          <div className="text-3xl font-bold text-white">${(gdpTotal / 1_000_000_000_000).toFixed(1)}</div>
        </div>

        <div className="bg-gradient-to-br from-pink-900/30 to-pink-800/20 border border-pink-500/30 rounded-xl p-6 hover:border-pink-500/60 transition-all">
          <div className="text-pink-400 text-sm font-semibold mb-2">متوسط الكثافة</div>
          <div className="text-3xl font-bold text-white">{((totalPopulation / totalArea) * 1_000_000).toFixed(0)}</div>
        </div>
      </div>

      {/* المقارنات */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-amber-400 mb-4">🏙️ الدول الأكثر سكاناً</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">{highestPopulation.nameAr}</span>
              <span className="text-white font-bold">{highestPopulation.population}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-cyan-400 mb-4">🗺️ الدول الأكبر مساحة</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">{highestArea.nameAr}</span>
              <span className="text-white font-bold">{highestArea.area}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-red-400 mb-4">⚔️ أقوى جيش عسكري</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">{strongestMilitary.nameAr}</span>
              <span className="text-white font-bold">الترتيب: #{strongestMilitary.military.rank}</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-6">
          <h3 className="text-xl font-bold text-green-400 mb-4">💰 الاقتصاد الأقوى</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-gray-300">{filteredCountries.reduce((prev, current) => parseInt(current.economy.gdp.replace(/[^\d]/g, '')) > parseInt(prev.economy.gdp.replace(/[^\d]/g, '')) ? current : prev).nameAr}</span>
              <span className="text-white font-bold">{filteredCountries.reduce((prev, current) => parseInt(current.economy.gdp.replace(/[^\d]/g, '')) > parseInt(prev.economy.gdp.replace(/[^\d]/g, '')) ? current : prev).economy.gdp}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
