import { useState, useMemo } from 'react';
import { enrichedCountries as countries, continents, regions, subRegions } from './data/countriesWithDetails';
import type { Country } from './data/countriesWithDetails';
import CountryDetail from './components/CountryDetail';
import CountryCard from './components/CountryCard';
import CountryListItem from './components/CountryListItem';
import AdvancedStats from './components/AdvancedStats';
import CompareCountries from './components/CompareCountries';
import Favorites from './components/Favorites';
import WarGame from './components/WarGame';

export default function App() {
  const [search, setSearch] = useState('');
  const [selectedContinent, setSelectedContinent] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedSubRegion, setSelectedSubRegion] = useState('all');
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [sortBy, setSortBy] = useState<'name' | 'military' | 'population'>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showAdvancedStats, setShowAdvancedStats] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showWarGame, setShowWarGame] = useState(false);
  const [favorites, setFavorites] = useState<Country[]>(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  const addFavorite = (country: Country) => {
    if (!favorites.some(f => f.id === country.id)) {
      const newFavorites = [...favorites, country];
      setFavorites(newFavorites);
      localStorage.setItem('favorites', JSON.stringify(newFavorites));
    }
  };

  const removeFavorite = (id: string) => {
    const newFavorites = favorites.filter(f => f.id !== id);
    setFavorites(newFavorites);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (id: string) => favorites.some(f => f.id === id);

  const normalizeSearch = (text: string) => {
    return text.toLowerCase().trim().replace(/[^\w\sآ-ي]/g, '');
  };

  const matchesSearch = (c: Country, searchText: string, searchNorm: string): boolean => {
    if (c.nameAr.toLowerCase().includes(searchText.toLowerCase())) return true;
    if (c.name.toLowerCase().includes(searchText.toLowerCase())) return true;
    if (normalizeSearch(c.name).includes(searchNorm)) return true;
    if (c.capitalAr.toLowerCase().includes(searchText.toLowerCase())) return true;
    if (c.capital.toLowerCase().includes(searchText.toLowerCase())) return true;
    if (normalizeSearch(c.capital).includes(searchNorm)) return true;
    if (c.leader.nameAr.toLowerCase().includes(searchText.toLowerCase())) return true;
    if (c.leader.name.toLowerCase().includes(searchText.toLowerCase())) return true;
    if (normalizeSearch(c.leader.name).includes(searchNorm)) return true;
    if (c.region.toLowerCase().includes(searchText.toLowerCase())) return true;
    if (normalizeSearch(c.region).includes(searchNorm)) return true;
    if (c.continent.toLowerCase().includes(searchText.toLowerCase())) return true;
    if (c.location.toLowerCase().includes(searchText.toLowerCase())) return true;
    return false;
  };

  const filteredCountries = useMemo(() => {
    let result = [...countries];
    if (search.trim()) {
      const searchText = search.trim();
      const searchNorm = normalizeSearch(search);
      result = result.filter(c => matchesSearch(c, searchText, searchNorm));
    }
    if (selectedContinent !== 'all') result = result.filter(c => c.continent === selectedContinent);
    if (selectedRegion !== 'all') result = result.filter(c => c.region === selectedRegion);
    if (selectedSubRegion !== 'all') result = result.filter(c => c.subRegion === selectedSubRegion);
    if (sortBy === 'military') {
      result.sort((a, b) => {
        if (a.military.rank === 0) return 1;
        if (b.military.rank === 0) return -1;
        return a.military.rank - b.military.rank;
      });
    } else if (sortBy === 'population') {
      result.sort((a, b) => parseInt(b.population.replace(/,/g, '')) - parseInt(a.population.replace(/,/g, '')));
    } else {
      result.sort((a, b) => a.nameAr.localeCompare(b.nameAr, 'ar'));
    }
    return result;
  }, [search, selectedContinent, selectedRegion, selectedSubRegion, sortBy]);

  if (selectedCountry) {
    return (
      <CountryDetail
        country={selectedCountry}
        onBack={() => setSelectedCountry(null)}
        isFavorite={isFavorite(selectedCountry.id)}
        onToggleFavorite={() =>
          isFavorite(selectedCountry.id)
            ? removeFavorite(selectedCountry.id)
            : addFavorite(selectedCountry)
        }
      />
    );
  }

  if (showAdvancedStats) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white" dir="rtl">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <header className="relative z-10 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/95 to-transparent sticky top-0 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
            <button
              onClick={() => setShowAdvancedStats(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              ← العودة
            </button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              أطلس العالم
            </h1>
            <div></div>
          </div>
        </header>

        <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          <AdvancedStats countries={filteredCountries} />
        </main>
      </div>
    );
  }

  // عرض المقارنة
  if (showCompare) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white" dir="rtl">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
        </div>

        <header className="relative z-10 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/95 to-transparent sticky top-0 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
            <button
              onClick={() => setShowCompare(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              ← العودة
            </button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              أطلس العالم
            </h1>
            <div></div>
          </div>
        </header>

        <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          <CompareCountries onClose={() => setShowCompare(false)} />
        </main>
      </div>
    );
  }

  // عرض المفضلة
  if (showFavorites) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] text-white" dir="rtl">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <header className="relative z-10 bg-gradient-to-b from-[#0a0a0f] via-[#0a0a0f]/95 to-transparent sticky top-0 backdrop-blur-xl border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
            <button
              onClick={() => setShowFavorites(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
            >
              ← العودة
            </button>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              أطلس العالم
            </h1>
            <div></div>
          </div>
        </header>

        <main className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          <Favorites
            favorites={favorites}
            onSelectCountry={setSelectedCountry}
            onRemoveFavorite={removeFavorite}
          />
        </main>
      </div>
    );
  }

  if (showWarGame) {
    return <WarGame onClose={() => setShowWarGame(false)} />;
  }

  const arabCount = countries.filter(c => c.isArab).length;
  const nuclearCount = countries.filter(c => c.military.nuclear).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white" dir="rtl">
      {/* Premium Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5" />
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-gradient-radial from-purple-500/15 to-transparent rounded-full blur-3xl animate-slow-pulse" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-radial from-amber-500/10 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Premium Header with Seal */}
      <header className="relative z-10 bg-gradient-to-b from-slate-900/95 via-slate-900/90 to-transparent sticky top-0 backdrop-blur-2xl border-b border-blue-500/20 shadow-2xl">
        {/* Decorative Top Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 py-6">
          {/* Ribbon Badge */}
          <div className="flex items-center justify-center mb-4">
            <div className="px-4 py-1.5 rounded-full border border-gold/30 bg-gradient-to-r from-amber-600/10 to-amber-500/10 text-amber-300 text-xs font-semibold tracking-widest">
              🌍 قوة العالم - الموسوعة العالمية
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left: Logo & Title */}
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="text-7xl animate-[spin_12s_linear_infinite] drop-shadow-[0_0_20px_rgba(200,0,0,0.9)_0_0_40px_rgba(100,0,0,0.5)]">🌍</div>
                <div className="absolute -inset-10 bg-gradient-to-r from-red-800 via-orange-700 to-black rounded-full blur-3xl opacity-50 animate-pulse"></div>
                <div className="absolute -inset-5 bg-gradient-to-r from-red-600 to-amber-900 rounded-full blur-2xl opacity-30 animate-[pulse_1.5s_ease-in-out_infinite]"></div>
                <div className="absolute inset-0 rounded-full border-2 border-red-500/30 blur-sm animate-pulse"></div>
              </div>
              <div className="space-y-1">
                <h1 className="text-5xl lg:text-6xl font-black tracking-tight">
                  <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-300 bg-clip-text text-transparent">أطلس</span>
                  <span className="block bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent">العالم</span>
                </h1>
                <p className="text-blue-300/80 text-sm font-light tracking-wide">موسوعة شاملة ومعتمدة لـ جميع دول العالم</p>
              </div>
            </div>
            
            {/* Right: Statistics */}
            <div className="flex gap-3 flex-wrap justify-center">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-all"></div>
                <div className="relative bg-gradient-to-br from-amber-600/20 to-orange-700/10 border border-amber-500/40 rounded-xl px-5 py-3 text-center min-w-[120px] backdrop-blur-xl hover:border-amber-500/60 transition-all">
                  <div className="text-2xl font-black text-amber-300">{countries.length}+</div>
                  <div className="text-xs text-amber-200/70 font-semibold">دول العالم</div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-all"></div>
                <div className="relative bg-gradient-to-br from-emerald-600/20 to-green-700/10 border border-emerald-500/40 rounded-xl px-5 py-3 text-center min-w-[120px] backdrop-blur-xl hover:border-emerald-500/60 transition-all">
                  <div className="text-2xl font-black text-emerald-300">{arabCount}</div>
                  <div className="text-xs text-emerald-200/70 font-semibold">دولة عربية</div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-rose-600 rounded-xl blur-lg opacity-40 group-hover:opacity-60 transition-all"></div>
                <div className="relative bg-gradient-to-br from-red-600/20 to-rose-700/10 border border-red-500/40 rounded-xl px-5 py-3 text-center min-w-[120px] backdrop-blur-xl hover:border-red-500/60 transition-all">
                  <div className="text-2xl font-black text-red-300">{nuclearCount}</div>
                  <div className="text-xs text-red-200/70 font-semibold">قوة نووية</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
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

            {/* الأزرار الجديدة */}
            <div className="flex gap-2">
              <button
                onClick={() => setShowWarGame(true)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/50 text-red-400 hover:border-red-500 transition-all font-semibold text-sm"
              >
                ⚔️ المحاكي
              </button>
              <button
                onClick={() => setShowAdvancedStats(true)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 text-cyan-400 hover:border-cyan-500 transition-all font-semibold text-sm"
              >
                📊 إحصائيات
              </button>
              <button
                onClick={() => setShowCompare(true)}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 text-purple-400 hover:border-purple-500 transition-all font-semibold text-sm"
              >
                ⚖️ مقارنة
              </button>
              <button
                onClick={() => setShowFavorites(true)}
                className={`px-4 py-2 rounded-lg transition-all font-semibold text-sm flex items-center gap-2 ${
                  favorites.length > 0
                    ? 'bg-gradient-to-r from-pink-500/20 to-rose-500/20 border border-pink-500/50 text-pink-400'
                    : 'bg-white/5 border border-white/10 text-gray-400'
                }`}
              >
                ❤️ المفضلة ({favorites.length})
              </button>
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


