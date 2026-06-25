interface WelcomeScreenProps {
  countryCount: number;
  arabCount: number;
  nuclearCount: number;
  onEnter: () => void;
}

export default function WelcomeScreen({ countryCount, arabCount, nuclearCount, onEnter }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex flex-col items-center justify-center relative overflow-hidden">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-transparent" />
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-gradient-radial from-purple-500/15 to-transparent rounded-full blur-3xl animate-slow-pulse" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-gradient-radial from-amber-500/10 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 max-w-4xl">
        <div className="relative mb-8">
          <div className="text-9xl animate-[spin_20s_linear_infinite] drop-shadow-[0_0_40px_rgba(200,0,0,0.9)]">
            🌍
          </div>
          <div className="absolute -inset-10 bg-gradient-to-r from-red-800 via-orange-700 to-black rounded-full blur-3xl opacity-40 animate-pulse" />
          <div className="absolute inset-0 rounded-full border-4 border-red-500/20 blur-sm animate-pulse" />
        </div>

        <h1 className="text-7xl lg:text-8xl font-black tracking-tight mb-4">
          <span className="bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-300 bg-clip-text text-transparent">أطلس</span>
          <span className="block bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent">العالم</span>
        </h1>

        <p className="text-xl text-gray-400 mb-2">موسوعة شاملة ومعتمدة لجميع دول العالم</p>
        <p className="text-gray-500 mb-12">استكشف المعلومات، قارن الإحصائيات، واستمع للأناشيد الوطنية</p>

        <div className="flex gap-6 mb-12 flex-wrap justify-center">
          <div className="bg-gradient-to-br from-amber-600/20 to-orange-700/10 border border-amber-500/40 rounded-2xl px-8 py-5 text-center backdrop-blur-xl">
            <div className="text-4xl font-black text-amber-300">{countryCount}</div>
            <div className="text-sm text-amber-200/70 font-semibold mt-1">دولة حول العالم</div>
          </div>
          <div className="bg-gradient-to-br from-emerald-600/20 to-green-700/10 border border-emerald-500/40 rounded-2xl px-8 py-5 text-center backdrop-blur-xl">
            <div className="text-4xl font-black text-emerald-300">{arabCount}</div>
            <div className="text-sm text-emerald-200/70 font-semibold mt-1">دولة عربية</div>
          </div>
          <div className="bg-gradient-to-br from-red-600/20 to-rose-700/10 border border-red-500/40 rounded-2xl px-8 py-5 text-center backdrop-blur-xl">
            <div className="text-4xl font-black text-red-300">{nuclearCount}</div>
            <div className="text-sm text-red-200/70 font-semibold mt-1">قوة نووية</div>
          </div>
        </div>

        <button
          onClick={onEnter}
          className="group relative px-10 py-4 rounded-2xl font-bold text-lg transition-all duration-300"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-all" />
          <div className="relative bg-gradient-to-r from-amber-500 to-orange-500 text-black px-10 py-4 rounded-2xl shadow-lg shadow-amber-500/25 group-hover:scale-105 transition-transform">
            ابدأ الاستكشاف
          </div>
        </button>
      </div>
    </div>
  );
}
