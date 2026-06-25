import type { Country } from '../data/countriesWithDetails';
import AnthemPlayButton from './AnthemPlayButton';

interface CountryCardProps {
  country: Country;
  onClick: (country: Country) => void;
}

export default function CountryCard({ country, onClick }: CountryCardProps) {
  return (
    <div
      onClick={() => onClick(country)}
      className="group cursor-pointer bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-5 hover:border-amber-500/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] hover:-translate-y-1"
    >
      <div className="flex items-start gap-4">
        <div className="text-5xl group-hover:scale-110 transition-transform duration-300">{country.flag}</div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors truncate">
            {country.nameAr}
          </h3>
          <p className="text-sm text-gray-400 truncate">{country.name}</p>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
              {country.capitalAr}
            </span>
            {country.isArab && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                عربي
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <AnthemPlayButton url={country.nationalAnthemUrl} title={country.nationalAnthem || country.nameAr} />
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2 text-xs">
        <div className="bg-gray-800/60 rounded-lg p-2 text-center">
          <div className="text-gray-500">السكان</div>
          <div className="text-white font-semibold mt-0.5">{country.population}</div>
        </div>
        <div className="bg-gray-800/60 rounded-lg p-2 text-center">
          <div className="text-gray-500">المساحة</div>
          <div className="text-white font-semibold mt-0.5">{country.area}</div>
        </div>
      </div>
      {country.military.rank > 0 && (
        <div className="mt-2 flex items-center gap-2 text-xs text-gray-400">
          <span>⚔️ الترتيب العسكري: #{country.military.rank}</span>
          <span className="text-gray-600">|</span>
          <span>💰 {country.economy.gdp}</span>
        </div>
      )}
    </div>
  );
}
