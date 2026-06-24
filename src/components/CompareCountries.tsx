import { useState } from 'react';
import { enrichedCountries as countries } from '../data/countriesWithDetails';
import type { Country } from '../data/countriesWithDetails';

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

  const Row = ({ label, extractor }: { label: string; extractor: (c: Country) => string | number | boolean }) => {
    const values = selected.map(c => extractor(c));
    // Find max index for highlighting
    const numericValues = values.map(v => {
      if (typeof v === 'boolean') return v ? 1 : 0;
      const num = parseFloat(String(v).replace(/[^0-9.]/g, ''));
      return isNaN(num) ? 0 : num;
    });
    const maxVal = Math.max(...numericValues);
    const minVal = Math.min(...numericValues);
    const isInverse = label.includes('الترتيب');

    return (
      <tr className="border-b border-gray-700/30 hover:bg-white/[0.02]">
        <td className="bg-gray-800/80 px-4 py-3 font-semibold text-gray-300 whitespace-nowrap sticky right-0">{label}</td>
        {selected.map((c, i) => {
          const val = String(extractor(c));
          const isBest = isInverse ? numericValues[i] === minVal && numericValues[i] > 0 : numericValues[i] === maxVal;
          const isWorst = isInverse ? numericValues[i] === maxVal : numericValues[i] === minVal;
          return (
            <td key={c.id} className={`px-4 py-3 text-center ${isBest ? 'bg-emerald-500/10' : isWorst ? 'bg-red-500/5' : ''}`}>
              <span className={`${typeof extractor(c) === 'boolean' ? (extractor(c) ? 'text-green-400 font-bold' : 'text-gray-500') : 'text-white'}`}>
                {typeof extractor(c) === 'boolean' ? (extractor(c) ? '✓ نعم' : '✕ لا') : val}
              </span>
              {isBest && <span className="block text-[10px] text-emerald-400 mt-0.5">الأعلى</span>}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <div className="space-y-6" dir="rtl">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          ⚖️ مقارنة الدول
        </h2>
        <button onClick={onClose} className="text-gray-400 hover:text-white text-xl">← العودة</button>
      </div>

      {/* Search */}
      <div className="relative max-w-xl mx-auto">
        <input
          type="text"
          placeholder="ابحث عن دولة..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-gray-900/80 border border-gray-700/50 rounded-xl py-3 px-5 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/60"
          dir="rtl"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
      </div>

      {/* Selected countries */}
      {selected.length > 0 && (
        <div className="bg-gray-900/50 border border-purple-500/30 rounded-xl p-4">
          <div className="flex flex-wrap gap-2">
            {selected.map(c => (
              <div key={c.id} className="bg-purple-500/20 border border-purple-500/50 rounded-lg px-3 py-2 flex items-center gap-2">
                <span>{c.flag} {c.nameAr}</span>
                <button onClick={() => removeCountry(c.id)} className="text-purple-400 hover:text-purple-300">✕</button>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-sm mt-2">{selected.length} من 4 دول - اختر دولاً للمقارنة</p>
        </div>
      )}

      {/* Country grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 max-h-60 overflow-y-auto p-2">
        {filtered.map(country => (
          <button
            key={country.id}
            onClick={() => toggleCountry(country)}
            className={`p-3 rounded-xl transition-all text-center ${
              selected.some(s => s.id === country.id)
                ? 'bg-purple-500/40 border-2 border-purple-500 shadow-lg'
                : 'bg-gray-900/50 border border-gray-700/50 hover:border-purple-500/30'
            }`}
          >
            <div className="text-2xl mb-1">{country.flag}</div>
            <div className="text-xs font-semibold text-white truncate">{country.nameAr}</div>
          </button>
        ))}
      </div>

      {/* Comparison table */}
      {selected.length > 0 && (
        <div className="overflow-x-auto rounded-2xl border border-gray-700/30">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-800/80">
                <th className="px-4 py-4 text-right font-bold text-gray-300 sticky right-0 bg-gray-800/80">المعيار</th>
                {selected.map(c => (
                  <th key={c.id} className="px-4 py-4 text-center font-bold text-purple-400 min-w-[140px]">
                    <div className="text-2xl mb-1">{c.flag}</div>
                    <div>{c.nameAr}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/20">
              <Row label="السكان" extractor={c => c.population} />
              <Row label="المساحة" extractor={c => c.area} />
              <Row label="العاصمة" extractor={c => c.capitalAr} />
              <Row label="اللغة" extractor={c => c.language} />
              <Row label="العملة" extractor={c => c.economy.currency} />
              <Row label="الناتج المحلي" extractor={c => c.economy.gdp} />
              <Row label="الدخل للفرد" extractor={c => c.economy.gdpPerCapita} />
              <Row label="الترتيب العسكري" extractor={c => c.military.rank > 0 ? `#${c.military.rank}` : 'N/A'} />
              <Row label="القوة البشرية" extractor={c => c.military.personnel} />
              <Row label="الميزانية العسكرية" extractor={c => c.military.budget} />
              <Row label="الدبابات" extractor={c => c.military.tanks} />
              <Row label="الطائرات" extractor={c => c.military.aircraft} />
              <Row label="السفن الحربية" extractor={c => c.military.navy} />
              <Row label="سلاح نووي" extractor={c => c.military.nuclear} />
              {selected.some(c => c.climate) && <Row label="المناخ" extractor={c => c.climate || '-'} />}
              {selected.some(c => c.lifeExpectancy) && <Row label="متوسط العمر" extractor={c => c.lifeExpectancy || '-'} />}
              {selected.some(c => c.literacyRate) && <Row label="نسبة التعليم" extractor={c => c.literacyRate || '-'} />}
              {selected.some(c => c.hungerIndex) && <Row label="مؤشر الجوع" extractor={c => c.hungerIndex || '-'} />}
              {selected.some(c => c.devIndex) && <Row label="مؤشر التنمية" extractor={c => c.devIndex || '-'} />}
              {selected.some(c => c.timezone) && <Row label="المنطقة الزمنية" extractor={c => c.timezone || '-'} />}
              {selected.some(c => c.independence) && <Row label="الاستقلال" extractor={c => c.independence || '-'} />}
            </tbody>
          </table>
        </div>
      )}

      {selected.length === 0 && (
        <div className="text-center py-12 bg-gray-900/30 border border-gray-700/30 rounded-xl">
          <div className="text-5xl mb-3">⚖️</div>
          <p className="text-gray-400 text-lg">اختر دولتين على الأقل للمقارنة</p>
          <p className="text-gray-500 text-sm mt-2">يمكنك مقارنة حتى 4 دول في وقت واحد</p>
        </div>
      )}
    </div>
  );
}
