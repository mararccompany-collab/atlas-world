interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-2xl blur-xl group-focus-within:blur-2xl transition-all opacity-0 group-focus-within:opacity-100" />
      <div className="relative flex items-center">
        <div className="absolute right-4 text-gray-400 group-focus-within:text-amber-400 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="ابحث عن دولة: اكتب الاسم بالعربي أو الإنجليزي (مثل: Egypt, Saudi, مصر)"
          className="w-full bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-2xl py-4 pr-14 pl-6 text-white text-lg placeholder-gray-500 focus:outline-none focus:border-amber-500/60 focus:ring-2 focus:ring-amber-500/20 transition-all"
          dir="rtl"
        />
        {value && (
          <button
            onClick={() => onChange('')}
            className="absolute left-4 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
