import { useState, useMemo } from 'react';
import { countries, Country, continents, regions, subRegions } from './data/countries';

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedSubRegion, setSelectedSubRegion] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'military' | 'population'>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // دالة بحث محسّنة تدعم البحث بالإنجليزية والعربية
  const normalizeSearch = (text: string) => {
    return text
      .toLowerCase()
      .trim()
      .replace(/[^\w\s]/g, ''); // إزالة العلامات الترقيمية
  };

  const filteredCountries = useMemo(() => {
    let result = [...countries];

    if (search.trim()) {
      const searchNorm = normalizeSearch(search);
      
      result = result.filter(c => {
        // البحث في الاسم العربي
        if (c.nameAr.includes(search)) return true;
        
        // البحث في الاسم الإنجليزي
        if (normalizeSearch(c.name).includes(searchNorm)) return true;
        
        // البحث في العاصمة العربية
        if (c.capitalAr.includes(search)) return true;
        
        // البحث في العاصمة الإنجليزية
        if (normalizeSearch(c.capital).includes(searchNorm)) return true;
        
        // البحث في اسم الزعيم العربي
        if (c.leader.nameAr.includes(search)) return true;
        
        // البحث في اسم الزعيم الإنجليزي
        if (normalizeSearch(c.leader.name).includes(searchNorm)) return true;
        
        // البحث في المنطقة الجغرافية
        if (normalizeSearch(c.region).includes(searchNorm)) return true;
        
        return false;
      });
    }

    if (selectedContinent !== 'all') {
      result = result.filter(c => c.continent === selectedContinent);
    }

    if (selectedRegion !== 'all') {
      result = result.filter(c => c.region === selectedRegion);
    }

    if (selectedSubRegion !== 'all') {
      result = result.filter(c => c.subRegion === selectedSubRegion);
    }

    // ترتيب محسّن
    if (sortBy === 'military') {
      result.sort((a, b) => {
        if (a.military.rank === 0) return 1;
        if (b.military.rank === 0) return -1;
        return a.military.rank - b.military.rank;
      });
    } else if (sortBy === 'population') {
      result.sort((a, b) => {
        const popA = parseInt(a.population.replace(/,/g, ''));
        const popB = parseInt(b.population.replace(/,/g, ''));
        return popB - popA;
      });
    } else {
      result.sort((a, b) => a.nameAr.localeCompare(b.nameAr, 'ar'));
    }

    return result;
  }, [search, selectedContinent, selectedRegion, selectedSubRegion, sortBy]);

  if (selectedCountry) {
    return <CountryDetail country={selectedCountry} onBack={() => setSelectedCountry(null)} />;
  }

  const arabCount = countries.filter(c => c.isArab).length;
  const nuclearCount = countries.filter(c => c.military.nuclear).length;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white" dir="rtl">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <header className="relative z-10 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/95 to-transparent sticky top-0 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="text-6xl lg:text-7xl">🌍</div>
                <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full blur-2xl opacity-30 animate-pulse" />
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                  أطلس العالم
                </h1>
                <p className="text-gray-400 text-sm lg:text-base mt-1">موسوعة شاملة لجميع دول العالم</p>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="flex gap-3 flex-wrap justify-center">
              <div className="bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/30 rounded-2xl px-5 py-3 text-center min-w-[100px]">
                <div className="text-3xl font-black text-amber-400">{countries.length}</div>
                <div className="text-xs text-amber-300/70">دولة</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-500/20 to-emerald-600/5 border border-emerald-500/30 rounded-2xl px-5 py-3 text-center min-w-[100px]">
                <div className="text-3xl font-black text-emerald-400">{arabCount}</div>
                <div className="text-xs text-emerald-300/70">دولة عربية</div>
              </div>
              <div className="bg-gradient-to-br from-red-500/20 to-red-600/5 border border-red-500/30 rounded-2xl px-5 py-3 text-center min-w-[100px]">
                <div className="text-3xl font-black text-red-400">{nuclearCount}</div>
                <div className="text-xs text-red-300/70">قوة نووية</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-50" />
            <div className="relative flex items-center bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
              <span className="pr-5 text-2xl">🔍</span>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="ابحث عن أي دولة، عاصمة، أو رئيس..."
                className="w-full bg-transparent py-4 pl-5 text-lg text-white placeholder-gray-500 focus:outline-none"
              />
              {search && (
                <button onClick={() => setSearch('')} className="pl-5 text-gray-400 hover:text-white">✕</button>
              )}
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          {/* Continents */}
          <div className="flex flex-wrap gap-2 justify-center">
            {continents.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedContinent(c.id)}
                className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                  selectedContinent === c.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-lg shadow-amber-500/25'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>

          {/* Regions & SubRegions */}
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="flex gap-2">
              {regions.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setSelectedRegion(r.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedRegion === r.id
                      ? 'bg-purple-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
            <div className="flex gap-2">
              {subRegions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSelectedSubRegion(s.id)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    selectedSubRegion === s.id
                      ? 'bg-emerald-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10 border border-white/10'
                  }`}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>

          {/* Sort & View */}
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">ترتيب:</span>
              {[
                { id: 'name' as const, label: 'الاسم', icon: '🔤' },
                { id: 'military' as const, label: 'القوة', icon: '⚔️' },
                { id: 'population' as const, label: 'السكان', icon: '👥' },
              ].map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSortBy(s.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    sortBy === s.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/5 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {s.icon} {s.label}
                </button>
              ))}
            </div>
            <div className="flex gap-1 bg-white/5 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white/10' : ''}`}
              >
                ▦
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded ${viewMode === 'list' ? 'bg-white/10' : ''}`}
              >
                ☰
              </button>
            </div>
            <div className="text-gray-500 text-sm">
              عرض <span className="text-amber-400 font-bold">{filteredCountries.length}</span> دولة
            </div>
          </div>
        </div>

        {/* Countries Grid/List */}
        {filteredCountries.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-gray-400">لا توجد نتائج</h3>
            <p className="text-gray-500 mt-2">جرب البحث بكلمات مختلفة</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredCountries.map((country) => (
              <CountryCard key={country.id} country={country} onClick={setSelectedCountry} />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredCountries.map((country) => (
              <CountryListItem key={country.id} country={country} onClick={setSelectedCountry} />
            ))}
          </div>
        )}

        {/* Footer */}
        <footer className="mt-20 text-center border-t border-white/5 pt-10 pb-6">
          <div className="text-4xl mb-4">🌍</div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
            أطلس العالم
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            موسوعة شاملة ومفصلة لـ {countries.length} دولة حول العالم
          </p>
        </footer>
      </main>
    </div>
  );
}

function CountryCard({ country, onClick }: { country: Country; onClick: (c: Country) => void }) {
  return (
    <div
      onClick={() => onClick(country)}
      className="group relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 rounded-2xl p-5 cursor-pointer hover:border-amber-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.1)] overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative flex items-start gap-4">
        <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{country.flag}</div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors truncate">
            {country.nameAr}
          </h3>
          <p className="text-sm text-gray-500 truncate">{country.name}</p>
          <div className="flex flex-wrap gap-1.5 mt-2">
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20">
              {country.capitalAr}
            </span>
            {country.isArab && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                عربي
              </span>
            )}
            {country.military.nuclear && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                ☢️
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="relative mt-4 pt-4 border-t border-white/5 grid grid-cols-2 gap-3 text-center">
        <div>
          <div className="text-xs text-gray-500">السكان</div>
          <div className="text-sm font-semibold text-white">{country.population}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">الترتيب العسكري</div>
          <div className="text-sm font-semibold text-white">
            {country.military.rank > 0 ? `#${country.military.rank}` : '-'}
          </div>
        </div>
      </div>
    </div>
  );
}

function CountryListItem({ country, onClick }: { country: Country; onClick: (c: Country) => void }) {
  return (
    <div
      onClick={() => onClick(country)}
      className="group flex items-center gap-4 bg-white/[0.03] border border-white/5 rounded-xl p-4 cursor-pointer hover:bg-white/[0.06] hover:border-amber-500/30 transition-all"
    >
      <div className="text-4xl">{country.flag}</div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3 className="font-bold text-white group-hover:text-amber-400 transition-colors">{country.nameAr}</h3>
          {country.isArab && <span className="text-xs text-emerald-400">🌙</span>}
          {country.military.nuclear && <span className="text-xs">☢️</span>}
        </div>
        <p className="text-sm text-gray-500">{country.capitalAr} • {country.population}</p>
      </div>
      <div className="text-gray-400 text-sm">
        {country.military.rank > 0 ? `#${country.military.rank}` : '-'}
      </div>
    </div>
  );
}

function CountryDetail({ country, onBack }: { country: Country; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white" dir="rtl">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-[#0a0a0f] to-[#0a0a0f]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto px-4 py-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-amber-400 hover:text-amber-300 transition-colors mb-8 group"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">→</span>
            <span>العودة للقائمة</span>
          </button>

          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="text-[120px] leading-none">{country.flag}</div>
            <div>
              <h1 className="text-5xl md:text-6xl font-black text-white">{country.nameAr}</h1>
              <p className="text-2xl text-gray-400 mt-2">{country.name}</p>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <Badge icon="🏛" label="العاصمة" value={country.capitalAr} color="amber" />
                <Badge icon="👥" label="السكان" value={country.population} color="blue" />
                <Badge icon="📐" label="المساحة" value={country.area} color="emerald" />
                <Badge icon="🗣" label="اللغة" value={country.language} color="purple" />
                {country.isArab && <Badge icon="🌙" label="" value="دولة عربية" color="green" />}
                {country.military.nuclear && <Badge icon="☢️" label="" value="قوة نووية" color="red" />}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        {/* Location */}
        <Section title="📍 الموقع الجغرافي" gradient="from-amber-500/10">
          <p className="text-gray-300 text-lg leading-relaxed">{country.location}</p>
        </Section>

        {/* Leader */}
        <Section title="👑 رئيس الدولة" gradient="from-purple-500/10">
          <div className="bg-gradient-to-r from-purple-500/10 to-transparent rounded-2xl p-6 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white">{country.leader.nameAr}</h3>
            <p className="text-purple-400 text-sm mt-1">{country.leader.name}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-sm bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">{country.leader.title}</span>
              <span className="text-sm bg-purple-500/20 px-3 py-1 rounded-full text-purple-300">منذ {country.leader.since}</span>
            </div>
            <p className="text-gray-300 mt-4 leading-relaxed">{country.leader.bio}</p>
          </div>
        </Section>

        {/* Military & Economy Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Military */}
          <Section title="⚔️ القوة العسكرية" gradient="from-red-500/10">
            <div className="grid grid-cols-3 gap-3 mb-4">
              {country.military.rank > 0 && (
                <StatCard label="الترتيب" value={`#${country.military.rank}`} color="red" />
              )}
              <StatCard label="القوام" value={country.military.personnel} color="red" />
              <StatCard label="الميزانية" value={country.military.budget} color="red" />
              <StatCard label="الدبابات" value={country.military.tanks} color="red" />
              <StatCard label="الطائرات" value={country.military.aircraft} color="red" />
              <StatCard label="البحرية" value={country.military.navy} color="red" />
            </div>
            {country.military.nuclear && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 flex items-center gap-3 mb-4">
                <span className="text-3xl">☢️</span>
                <span className="text-red-400 font-bold">تمتلك أسلحة نووية</span>
              </div>
            )}
            <p className="text-gray-400 text-sm">{country.military.details}</p>
          </Section>

          {/* Economy */}
          <Section title="💰 الاقتصاد" gradient="from-emerald-500/10">
            <div className="grid grid-cols-3 gap-3 mb-4">
              <StatCard label="الناتج المحلي" value={country.economy.gdp} color="emerald" />
              <StatCard label="نصيب الفرد" value={country.economy.gdpPerCapita} color="emerald" />
              <StatCard label="العملة" value={country.economy.currency} color="emerald" />
            </div>
            <div className="mb-4">
              <h4 className="text-emerald-400 font-semibold mb-2 text-sm">القطاعات الرئيسية:</h4>
              <div className="flex flex-wrap gap-2">
                {country.economy.mainSectors.map((s, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-emerald-500/10 text-emerald-300 rounded-full border border-emerald-500/20">{s}</span>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-emerald-400 font-semibold mb-2 text-sm">🏦 أهم البنوك:</h4>
              <div className="flex flex-wrap gap-2">
                {country.economy.banks.map((b, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-white/5 text-gray-300 rounded-lg">{b}</span>
                ))}
              </div>
            </div>
            <p className="text-gray-400 text-sm">{country.economy.details}</p>
          </Section>
        </div>

        {/* Politicians */}
        {country.politicians.length > 0 && (
          <Section title="🏛 أهم السياسيين" gradient="from-blue-500/10">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {country.politicians.map((p, i) => (
                <div key={i} className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500/30 flex items-center justify-center text-blue-300 font-bold">{i + 1}</div>
                  <span className="text-white">{p}</span>
                </div>
              ))}
            </div>
          </Section>
        )}

        {/* Provinces */}
        <Section title="🗺 المحافظات والمناطق" gradient="from-cyan-500/10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {country.provinces.map((p, i) => (
              <div key={i} className="bg-cyan-500/10 border border-cyan-500/20 rounded-xl p-4">
                <h4 className="text-cyan-300 font-bold">{p.name}</h4>
                <p className="text-gray-400 text-sm mt-1">العاصمة: {p.capital}</p>
                <p className="text-gray-400 text-sm">السكان: {p.population}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Rivers, Lakes, Landmarks */}
        <div className="grid lg:grid-cols-3 gap-6">
          <Section title="🏞 الأنهار" gradient="from-blue-500/10" small>
            {country.rivers.length > 0 ? country.rivers.map((r, i) => (
              <div key={i} className="flex items-center gap-2 py-2 border-b border-white/5 last:border-0">
                <span className="text-blue-400">🌊</span>
                <span className="text-gray-300">{r}</span>
              </div>
            )) : <p className="text-gray-500">لا توجد أنهار رئيسية</p>}
          </Section>

          <Section title="💧 البحيرات" gradient="from-sky-500/10" small>
            {country.lakes.length > 0 ? country.lakes.map((l, i) => (
              <div key={i} className="flex items-center gap-2 py-2 border-b border-white/5 last:border-0">
                <span className="text-sky-400">💎</span>
                <span className="text-gray-300">{l}</span>
              </div>
            )) : <p className="text-gray-500">لا توجد بحيرات رئيسية</p>}
          </Section>

          <Section title="🏛 المعالم" gradient="from-orange-500/10" small>
            {country.landmarks.map((l, i) => (
              <div key={i} className="flex items-center gap-2 py-2 border-b border-white/5 last:border-0">
                <span className="text-orange-400">🏛</span>
                <span className="text-gray-300">{l}</span>
              </div>
            ))}
          </Section>
        </div>

        {/* News */}
        <Section title="📰 آخر الأخبار" gradient="from-rose-500/10">
          <div className="text-center py-6">
            <p className="text-gray-400 mb-4">للاطلاع على آخر الأخبار المباشرة عن {country.nameAr}</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={`https://news.google.com/search?q=${encodeURIComponent(country.newsKeywords)}&hl=ar`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-xl font-bold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                <span>📰</span> Google News
              </a>
              <a
                href={`https://www.aljazeera.net/search/${encodeURIComponent(country.nameAr)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
              >
                الجزيرة
              </a>
              <a
                href={`https://www.bbc.com/arabic/search?q=${encodeURIComponent(country.nameAr)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-colors"
              >
                BBC عربي
              </a>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}

function Section({ title, gradient, children, small }: { title: string; gradient: string; children: React.ReactNode; small?: boolean }) {
  return (
    <div className={`relative bg-gradient-to-br ${gradient} to-transparent border border-white/5 rounded-2xl ${small ? 'p-5' : 'p-6'} overflow-hidden`}>
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
      <h2 className={`relative font-bold text-white mb-4 ${small ? 'text-lg' : 'text-xl'}`}>{title}</h2>
      <div className="relative">{children}</div>
    </div>
  );
}

function Badge({ icon, label, value, color }: { icon: string; label: string; value: string; color: string }) {
  const colors: Record<string, string> = {
    amber: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
    blue: 'bg-blue-500/20 text-blue-400 border-blue-500/40',
    emerald: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40',
    purple: 'bg-purple-500/20 text-purple-400 border-purple-500/40',
    green: 'bg-green-500/20 text-green-400 border-green-500/40',
    red: 'bg-red-500/20 text-red-400 border-red-500/40',
  };
  return (
    <span className={`px-4 py-1.5 rounded-full text-sm font-medium border ${colors[color]}`}>
      {icon} {label && `${label}: `}{value}
    </span>
  );
}

function StatCard({ label, value, color }: { label: string; value: string; color: string }) {
  const colors: Record<string, string> = {
    red: 'bg-red-500/10 border-red-500/20',
    emerald: 'bg-emerald-500/10 border-emerald-500/20',
  };
  return (
    <div className={`${colors[color]} border rounded-xl p-3 text-center`}>
      <div className="text-xs text-gray-500 mb-1">{label}</div>
      <div className="text-white font-semibold text-sm">{value}</div>
    </div>
  );
}
