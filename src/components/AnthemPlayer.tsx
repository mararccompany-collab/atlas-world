import { useRef, useState } from 'react';

interface AnthemPlayerProps {
  url: string;
  title: string;
}

export default function AnthemPlayer({ url, title }: AnthemPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;

    if (playing) {
      el.pause();
      setPlaying(false);
      return;
    }

    setHasError(false);
    try {
      await el.play();
      setPlaying(true);
    } catch {
      setHasError(true);
    }
  };

  const stop = () => {
    const el = audioRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0;
    setPlaying(false);
  };

  return (
    <div className="flex items-center gap-3 p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl">
      <audio ref={audioRef} src={url} preload="auto" onEnded={() => setPlaying(false)} />
      <button
        onClick={toggle}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-rose-500 hover:bg-rose-600 text-white transition-colors"
      >
        {playing ? (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
      <button
        onClick={stop}
        className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-700 hover:bg-gray-600 text-white transition-colors"
        title="إيقاف"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <rect x="6" y="6" width="12" height="12" rx="1" />
        </svg>
      </button>
      <div className="flex-1 min-w-0">
        <p className="text-white text-sm font-medium truncate">{title}</p>
        <p className="text-rose-400 text-xs">
          {hasError ? 'تعذر التشغيل' : playing ? 'جاري التشغيل...' : 'اضغط للتشغيل'}
        </p>
      </div>
    </div>
  );
}
