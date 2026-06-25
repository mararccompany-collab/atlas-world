import { useRef, useState } from 'react';
import { searchAnthemUrl } from '../utils/anthemSearch';

interface AnthemPlayButtonProps {
  url?: string;
  code?: string;
  title: string;
  countryNameEn?: string;
}

export default function AnthemPlayButton({ url, code, title, countryNameEn }: AnthemPlayButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const currentUrlRef = useRef(url);

  const toggle = async (e: React.MouseEvent) => {
    e.stopPropagation();
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

  if (!url && !code) return null;

  return (
    <>
      <audio ref={audioRef} src={url || (code ? `https://nationalanthems.info/${code}.mp3` : '')} onEnded={() => setPlaying(false)} />
      <button
        onClick={toggle}
        disabled={loading}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/20 border border-rose-500/30 text-rose-400 hover:bg-rose-500/30 hover:text-rose-300 transition-all text-xs font-medium disabled:opacity-50"
        title={loading ? 'جاري التحميل...' : playing ? 'إيقاف' : `تشغيل ${title}`}
      >
        {loading ? (
          <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        ) : playing ? (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
        {loading ? 'تحميل' : playing ? 'جاري' : hasError ? 'خطأ' : 'النشيد'}
      </button>
    </>
  );
}
