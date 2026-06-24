import { useState } from 'react';
import { Country, countries } from '../data/countries';

interface CompareCountriesProps {
  onClose: () => void;
}

export default function CompareCountries({ onClose }: CompareCountriesProps) {
  const [selected, setSelected] = useState<Country[]>([]);
  const [search, setSearch] = useState('');

  const filtered = countries.filter(c =>
    c.nameAr.toLowerCase().includes(search.toLowerCase()) || 
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleCountry = (country: Country) => {
    if (selected.some(s => s.id === country.id)) {
      setSelected(selected.filter(s => s.id !== country.id));
    } else if (selected.length < 4) {
      setSelected([...selected, country]);
    }
  };

  const removeCountry = (id: string) => {
    setSelected(selected.filter(s => s.id !== id));
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" dir="rtl">
      <div className="bg-gray-950 border border-gray-700/50 rounded-2xl max-w-6xl w-full max-h-screen overflow-y-auto">
        <div className="sticky top-0 bg-gray-950/95 border-b border-gray-700/50 p-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-amber-400">⚖️ مقارنة الدول</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">✕</button>
        </div>

        <div className="p-6 space-y-6">
          {/* محرك البحث */}
          <div>
            <input
              type="text"
              placeholder="ابحث عن دولة..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-gray-900/80 border border-gray-700/50 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-amber-500/60"
              dir="rtl"
            />
          </div>

          {/* الدول المختارة */}
          {selected.length > 0 && (
            <div className="bg-gray-900/50 border border-gray-700/30 rounded-xl p-4">
              <div className="flex flex-wrap gap-2">
                {selected.map(c => (
                  <div key={c.id} className="bg-amber-500/20 border border-amber-500/50 rounded-lg px-3 py-2 flex items-center gap-2">
                    <span>{c.flag} {c.nameAr}</span>
                    <button onClick={() => removeCountry(c.id)} className="text-amber-400 hover:text-amber-300">✕</button>
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-sm mt-2">{selected.length} من 4 دول</p>
            </div>
          )}

          {/* قائمة الدول */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-h-96 overflow-y-auto">
            {filtered.map(country => (
              <button
                key={country.id}
                onClick={() => toggleCountry(country)}
                className={`p-3 rounded-lg transition-all text-center ${
                  selected.some(s => s.id === country.id)
                    ? 'bg-amber-500/40 border-2 border-amber-500'
                    : 'bg-gray-900/50 border border-gray-700/50 hover:border-gray-600'
                }`}
              >
                <div className="text-2xl mb-1">{country.flag}</div>
                <div className="text-sm font-semibold">{country.nameAr}</div>
              </button>
            ))}
          </div>

          {/* جدول المقارنة */}
          {selected.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <tbody className="divide-y divide-gray-700/30">
                  {/* الاسم */}
                  <tr className="bg-gray-900/30">
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">الدولة</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 font-semibold text-amber-400">{c.flag} {c.nameAr}</td>
                    ))}
                  </tr>

                  {/* السكان */}
                  <tr>
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">السكان</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 text-white">{c.population}</td>
                    ))}
                  </tr>

                  {/* المساحة */}
                  <tr className="bg-gray-900/20">
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">المساحة</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 text-white">{c.area}</td>
                    ))}
                  </tr>

                  {/* العاصمة */}
                  <tr>
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">العاصمة</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 text-white">{c.capitalAr}</td>
                    ))}
                  </tr>

                  {/* الزعيم */}
                  <tr className="bg-gray-900/20">
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">الزعيم</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 text-white text-sm">{c.leader.nameAr}</td>
                    ))}
                  </tr>

                  {/* الترتيب العسكري */}
                  <tr>
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">الترتيب العسكري</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 text-white font-bold">#{c.military.rank || 'N/A'}</td>
                    ))}
                  </tr>

                  {/* الميزانية العسكرية */}
                  <tr className="bg-gray-900/20">
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">الميزانية العسكرية</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 text-white">{c.military.budget}</td>
                    ))}
                  </tr>

                  {/* الناتج المحلي */}
                  <tr>
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">الناتج المحلي الإجمالي</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 text-white">{c.economy.gdp}</td>
                    ))}
                  </tr>

                  {/* الناتج المحلي للفرد */}
                  <tr className="bg-gray-900/20">
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">الدخل للفرد</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 text-white">{c.economy.gdpPerCapita}</td>
                    ))}
                  </tr>

                  {/* القوة العسكرية */}
                  <tr>
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">الأفراد العسكريين</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 text-white">{c.military.personnel}</td>
                    ))}
                  </tr>

                  {/* الدبابات */}
                  <tr className="bg-gray-900/20">
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">الدبابات</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 text-white">{c.military.tanks}</td>
                    ))}
                  </tr>

                  {/* الطائرات */}
                  <tr>
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">الطائرات</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 text-white">{c.military.aircraft}</td>
                    ))}
                  </tr>

                  {/* البحرية */}
                  <tr className="bg-gray-900/20">
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">السفن البحرية</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 text-white">{c.military.navy}</td>
                    ))}
                  </tr>

                  {/* السلاح النووي */}
                  <tr>
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">سلاح نووي</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3">
                        <span className={c.military.nuclear ? 'text-red-400 font-bold' : 'text-gray-400'}>
                          {c.military.nuclear ? '✓ نعم' : '✕ لا'}
                        </span>
                      </td>
                    ))}
                  </tr>

                  {/* العملة */}
                  <tr className="bg-gray-900/20">
                    <td className="bg-gray-900/50 px-4 py-3 font-semibold text-gray-300">العملة</td>
                    {selected.map(c => (
                      <td key={c.id} className="px-4 py-3 text-white">{c.economy.currency}</td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
