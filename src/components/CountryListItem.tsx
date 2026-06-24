import { Country } from '../data/countries';

interface CountryListItemProps {
  country: Country;
  onClick: (country: Country) => void;
}

export default function CountryListItem({ country, onClick }: CountryListItemProps) {
  return (
    <div
      onClick={() => onClick(country)}
      className="group flex items-center justify-between gap-4 bg-white/[0.03] border border-white/5 rounded-xl p-4 cursor-pointer hover:bg-white/[0.06] hover:border-amber-500/30 transition-all"
    >
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="text-4xl flex-shrink-0">{country.flag}</div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <div>
              <h3 className="font-bold text-lg text-white group-hover:text-amber-400 transition-colors">
                {country.nameAr}
              </h3>
              <p className="text-sm text-gray-500">{country.name}</p>
            </div>
            
            <div className="flex gap-1">
              {country.isArab && (
                <span className="text-xs px-2 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/20">
                  🇸🇦 عربي
                </span>
              )}
              {country.military.nuclear && (
                <span className="text-xs px-2 py-1 rounded-full bg-red-500/20 text-red-400 border border-red-500/20">
                  ⚛️
                </span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-6 flex-shrink-0 text-center">
        <div>
          <div className="text-xs text-gray-500">السكان</div>
          <div className="text-sm font-semibold text-white">{country.population}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">المساحة</div>
          <div className="text-sm font-semibold text-white">{country.area}</div>
        </div>
        <div>
          <div className="text-xs text-gray-500">العسكري</div>
          <div className="text-sm font-semibold text-white">
            {country.military.rank > 0 ? `#${country.military.rank}` : '-'}
          </div>
        </div>
        <div>
          <div className="text-xs text-gray-500">الناتج المحلي</div>
          <div className="text-sm font-semibold text-white">{country.economy.gdp}</div>
        </div>
      </div>

      <div className="text-gray-500 group-hover:text-amber-400 transition-colors">→</div>
    </div>
  );
}
