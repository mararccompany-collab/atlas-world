import { continents, regions, subRegions } from '../data/countries';

interface FilterBarProps {
  selectedContinent: string;
  selectedRegion: string;
  selectedSubRegion: string;
  onContinentChange: (val: string) => void;
  onRegionChange: (val: string) => void;
  onSubRegionChange: (val: string) => void;
}

export default function FilterBar({
  selectedContinent,
  selectedRegion,
  selectedSubRegion,
  onContinentChange,
  onRegionChange,
  onSubRegionChange,
}: FilterBarProps) {
  return (
    <div className="space-y-4">
      {/* Continents */}
      <div>
        <h3 className="text-sm font-bold text-gray-400 mb-2 flex items-center gap-2">
          <span>🌍</span> القارات
        </h3>
        <div className="flex flex-wrap gap-2">
          {continents.map((c) => (
            <button
              key={c.id}
              onClick={() => onContinentChange(c.id)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                selectedContinent === c.id
                  ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/30'
                  : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 border border-gray-700/50'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Regions */}
      <div className="flex flex-wrap gap-6">
        <div>
          <h3 className="text-sm font-bold text-gray-400 mb-2 flex items-center gap-2">
            <span>🧭</span> المنطقة
          </h3>
          <div className="flex flex-wrap gap-2">
            {regions.map((r) => (
              <button
                key={r.id}
                onClick={() => onRegionChange(r.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedRegion === r.id
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 border border-gray-700/50'
                }`}
              >
                {r.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-gray-400 mb-2 flex items-center gap-2">
            <span>🏷</span> التصنيف
          </h3>
          <div className="flex flex-wrap gap-2">
            {subRegions.map((s) => (
              <button
                key={s.id}
                onClick={() => onSubRegionChange(s.id)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  selectedSubRegion === s.id
                    ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 border border-gray-700/50'
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
