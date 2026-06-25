const CACHE_KEY = 'anthem_urls';
const CACHE_TTL = 30 * 24 * 60 * 60 * 1000;

function getCache(): Record<string, { url: string; ts: number }> {
  try { return JSON.parse(localStorage.getItem(CACHE_KEY) || '{}'); } catch { return {}; }
}

function getCached(code: string): string | null {
  const c = getCache()[code];
  if (c && Date.now() - c.ts < CACHE_TTL) return c.url;
  return null;
}

function setCached(code: string, url: string) {
  const cache = getCache();
  cache[code] = { url, ts: Date.now() };
  try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache)); } catch {}
}

export async function searchAnthemUrl(code: string, countryName: string): Promise<string> {
  const cached = getCached(code);
  if (cached) return cached;

  try {
    const parseUrl = `https://en.wikipedia.org/w/api.php?action=parse&page=${encodeURIComponent(countryName)}&prop=images&format=json&origin=*`;
    const r = await fetch(parseUrl, { signal: AbortSignal.timeout(5000) });
    const d = await r.json();
    const images: string[] = d.parse?.images ?? [];
    const anthemFile = images.find(f => /\.(ogg|oga|mp3)$/i.test(f) && /anthem/i.test(f));
    if (anthemFile) {
      const queryUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=File:${encodeURIComponent(anthemFile)}&prop=imageinfo&iiprop=url&format=json&origin=*`;
      const r2 = await fetch(queryUrl, { signal: AbortSignal.timeout(5000) });
      const d2 = await r2.json();
      const pages = d2.query?.pages;
      if (pages) {
        const url = Object.values(pages as Record<string, any>)[0]?.imageinfo?.[0]?.url;
        if (url) { setCached(code, url); return url; }
      }
    }
  } catch {}

  const fallback = `https://nationalanthems.info/${code}.mp3`;
  setCached(code, fallback);
  return fallback;
}
