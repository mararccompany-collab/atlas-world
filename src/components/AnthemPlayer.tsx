import { useRef, useState, useEffect } from 'react';
import { searchAnthemUrl } from '../utils/anthemSearch';

interface AnthemPlayerProps {
  url: string;
  title: string;
  code?: string;
  countryNameEn?: string;
}

export default function AnthemPlayer({ url, title, code, countryNameEn }: AnthemPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const currentUrlRef = useRef(url);

  useEffect(() => { currentUrlRef.current = url; }, [url]);

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
      if (!code || !countryNameEn) { setHasError(true); return; }

      setLoading(true);
      try {
        const newUrl = await searchAnthemUrl(code, countryNameEn);
        currentUrlRef.current = newUrl;
        el.src = newUrl;
        await el.play();
        setPlaying(true);
      } catch {
        setHasError(true);
      } finally {
        setLoading(false);
      }
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
      <audio ref={audioRef} src={url} onEnded={() => setPlaying(false)} />
      <button
        onClick={toggle}
        disabled={loading}
        className="w-10 h-10 flex items-center justify-center rounded-full bg-rose-500 hover:bg-rose-600 text-white transition-colors disabled:opacity-50"
      >
        {loading ? (
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : playing ? (
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
          {loading ? 'جاري البحث...' : hasError ? 'تعذر التشغيل' : playing ? 'جاري التشغيل...' : 'اضغط للتشغيل'}
        </p>
      </div>
    </div>
  );
}
