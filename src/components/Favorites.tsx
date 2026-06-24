import { useState, useEffect } from 'react';
import { Country } from '../data/countries';

interface FavoritesProps {
  favorites: Country[];
  onSelectCountry: (country: Country) => void;
  onRemoveFavorite: (id: string) => void;
}

export default function Favorites({ favorites, onSelectCountry, onRemoveFavorite }: FavoritesProps) {
  const [sortBy, setSortBy] = useState<'name' | 'population' | 'military'>('name');

  const sortedFavorites = [...favorites].sort((a, b) => {
    switch (sortBy) {
      case 'population':
        return parseInt(b.population.replace(/,/g, '')) - parseInt(a.population.replace(/,/g, ''));
      case 'military':
        if (a.military.rank === 0) return 1;
        if (b.military.rank === 0) return -1;
        return a.military.rank - b.military.rank;
      default:
        return a.nameAr.localeCompare(b.nameAr, 'ar');
    }
  });

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
          ❤️ الدول المفضلة
        </h2>
        <span className="bg-pink-500/20 border border-pink-500/50 rounded-full px-4 py-2 text-pink-400 font-semibold">
          {favorites.length} دولة
        </span>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-12 bg-gray-900/30 border border-gray-700/30 rounded-xl">
          <div className="text-5xl mb-3">📭</div>
          <p className="text-gray-400 text-lg">لم تضف أي دول إلى المفضلة بعد</p>
          <p className="text-gray-500 text-sm mt-2">اضغط على قلب في بطاقة أي دولة لإضافتها</p>
        </div>
      ) : (
        <>
          {/* أزرار الترتيب */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setSortBy('name')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                sortBy === 'name'
                  ? 'bg-pink-500/40 border border-pink-500 text-pink-400'
                  : 'bg-gray-900/50 border border-gray-700/30 text-gray-400 hover:border-gray-600'
              }`}
            >
              📌 الاسم
            </button>
            <button
              onClick={() => setSortBy('population')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                sortBy === 'population'
                  ? 'bg-pink-500/40 border border-pink-500 text-pink-400'
                  : 'bg-gray-900/50 border border-gray-700/30 text-gray-400 hover:border-gray-600'
              }`}
            >
              👥 السكان
            </button>
            <button
              onClick={() => setSortBy('military')}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                sortBy === 'military'
                  ? 'bg-pink-500/40 border border-pink-500 text-pink-400'
                  : 'bg-gray-900/50 border border-gray-700/30 text-gray-400 hover:border-gray-600'
              }`}
            >
              ⚔️ العسكري
            </button>
          </div>

          {/* شبكة الدول المفضلة */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {sortedFavorites.map(country => (
              <div
                key={country.id}
                className="group bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-700/50 rounded-xl overflow-hidden hover:border-pink-500/50 transition-all cursor-pointer"
                onClick={() => onSelectCountry(country)}
              >
                {/* رأس البطاقة */}
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 border-b border-gray-700/30">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <span className="text-4xl">{country.flag}</span>
                      <div>
                        <h3 className="font-bold text-lg text-white group-hover:text-pink-400 transition-colors">
                          {country.nameAr}
                        </h3>
                        <p className="text-gray-400 text-sm">{country.name}</p>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onRemoveFavorite(country.id);
                      }}
                      className="text-pink-400 hover:text-pink-300 text-2xl transition-colors"
                    >
                      ❤️
                    </button>
                  </div>
                </div>

                {/* محتوى البطاقة */}
                <div className="p-4 space-y-3">
                  {/* المعلومات الأساسية */}
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="bg-gray-900/50 rounded-lg p-2">
                      <span className="text-gray-500">السكان</span>
                      <p className="font-semibold text-amber-400">{country.population}</p>
                    </div>
                    <div className="bg-gray-900/50 rounded-lg p-2">
                      <span className="text-gray-500">المساحة</span>
                      <p className="font-semibold text-cyan-400">{country.area}</p>
                    </div>
                  </div>

                  {/* المعلومات العسكرية */}
                  <div className="bg-gray-900/50 rounded-lg p-2">
                    <span className="text-gray-500 text-sm">الترتيب العسكري</span>
                    <p className="font-semibold text-red-400">
                      {country.military.rank ? `#${country.military.rank}` : 'N/A'}
                    </p>
                  </div>

                  {/* المعلومات الاقتصادية */}
                  <div className="bg-gray-900/50 rounded-lg p-2">
                    <span className="text-gray-500 text-sm">الناتج المحلي</span>
                    <p className="font-semibold text-green-400">{country.economy.gdp}</p>
                  </div>

                  {/* المؤشرات */}
                  <div className="flex gap-2 pt-2">
                    {country.isArab && (
                      <span className="bg-amber-500/20 text-amber-400 px-2 py-1 rounded text-xs font-semibold">
                        🇸🇦 عربي
                      </span>
                    )}
                    {country.military.nuclear && (
                      <span className="bg-red-500/20 text-red-400 px-2 py-1 rounded text-xs font-semibold">
                        ⚛️ نووي
                      </span>
                    )}
                  </div>
                </div>

                {/* زر الضغط */}
                <div className="bg-pink-500/10 border-t border-gray-700/30 p-3 text-center">
                  <span className="text-pink-400 font-semibold text-sm group-hover:text-pink-300">
                    اضغط لعرض التفاصيل →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
