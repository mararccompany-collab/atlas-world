import { useRef, useState } from 'react';

interface AnthemPlayButtonProps {
  url?: string;
  code?: string;
  title: string;
}

export default function AnthemPlayButton({ url, code, title }: AnthemPlayButtonProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);

  if (!url && !code) return null;

  const src = url || (code ? `https://nationalanthems.info/${code}.mp3` : '');

  const toggle = async (e: React.MouseEvent) => {
    e.stopPropagation();
    const el = audioRef.current;
    if (!el || !src) return;

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

  return (
    <>
      <audio ref={audioRef} src={src} preload="auto" onEnded={() => setPlaying(false)} />
      <button
        onClick={toggle}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/20 border border-rose-500/30 text-rose-400 hover:bg-rose-500/30 hover:text-rose-300 transition-all text-xs font-medium"
        title={playing ? 'إيقاف' : `تشغيل ${title}`}
      >
        {playing ? (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <rect x="6" y="4" width="4" height="16" rx="1" />
            <rect x="14" y="4" width="4" height="16" rx="1" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
        {playing ? 'جاري' : hasError ? 'تعذر' : 'النشيد'}
      </button>
    </>
  );
}
