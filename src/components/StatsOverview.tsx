import { countries } from '../data/countries';

export default function StatsOverview() {
  const totalCountries = countries.length;
  const arabCountries = countries.filter(c => c.isArab).length;
  const nuclearPowers = countries.filter(c => c.military.nuclear).length;
  const continentCounts = {
    Asia: countries.filter(c => c.continent === 'Asia').length,
    Africa: countries.filter(c => c.continent === 'Africa').length,
    Europe: countries.filter(c => c.continent === 'Europe').length,
    Americas: countries.filter(c => c.continent === 'North America' || c.continent === 'South America').length,
    Oceania: countries.filter(c => c.continent === 'Oceania').length,
  };

  const stats = [
    { label: 'إجمالي الدول', value: totalCountries.toString(), icon: '🌍', color: 'from-amber-500/20 to-amber-600/10 border-amber-500/30' },
    { label: 'دول عربية', value: arabCountries.toString(), icon: '🌙', color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30' },
    { label: 'قوى نووية', value: nuclearPowers.toString(), icon: '☢️', color: 'from-red-500/20 to-red-600/10 border-red-500/30' },
    { label: 'آسيا', value: continentCounts.Asia.toString(), icon: '🏔', color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30' },
    { label: 'أفريقيا', value: continentCounts.Africa.toString(), icon: '🌴', color: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30' },
    { label: 'أوروبا', value: continentCounts.Europe.toString(), icon: '🏰', color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30' },
    { label: 'الأمريكتان', value: continentCounts.Americas.toString(), icon: '🗽', color: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30' },
    { label: 'أوقيانوسيا', value: continentCounts.Oceania.toString(), icon: '🏝', color: 'from-teal-500/20 to-teal-600/10 border-teal-500/30' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
      {stats.map((stat, i) => (
        <div
          key={i}
          className={`bg-gradient-to-br ${stat.color} backdrop-blur-xl border rounded-2xl p-4 text-center hover:scale-105 transition-transform duration-300`}
        >
          <div className="text-2xl mb-1">{stat.icon}</div>
          <div className="text-2xl font-black text-white">{stat.value}</div>
          <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
        </div>
      ))}
    </div>
  );
}
