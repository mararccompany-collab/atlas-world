const BASE = 'https://nationalanthems.info/';

const overrides: Record<string, string> = {
  cy: `${BASE}gr.mp3`,
  xk: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/National_Anthem_of_the_Republic_of_Kosovo.ogg',
};

export function getAnthemUrl(code: string): string {
  return overrides[code] || `${BASE}${code}.mp3`;
}
