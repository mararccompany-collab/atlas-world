const NI = 'https://nationalanthems.info/';
const COMMONS = 'https://commons.wikimedia.org/wiki/Special:FilePath/';

const commonsUrls: Record<string, string> = {
  sa: `${COMMONS}Saudi_Arabian_national_anthem%2C_performed_by_the_United_States_Navy_Band.oga`,
  ae: `${COMMONS}UAE_national_anthem.ogg`,
  eg: `${COMMONS}Bilady%2C_Bilady%2C_Bilady.ogg`,
  iq: `${COMMONS}United_States_Navy_Band_-_Mawtini.ogg`,
  jo: `${COMMONS}National_anthem_of_Jordan_instrumental.ogg`,
  lb: `${COMMONS}Lebanese_national_anthem.ogg`,
  sy: `${COMMONS}National_Anthem_of_Syria.ogg`,
  kw: `${COMMONS}National_anthem_of_Kuwait_(instrumental).ogg`,
  qa: `${COMMONS}National_anthem_of_Qatar.ogg`,
  bh: `${COMMONS}Bahraini_Anthem.ogg`,
  nz: `${COMMONS}U.S._Navy_Band_-_God_Save_the_King.oga`,
  ar: `${COMMONS}Es_Argentina.ogg`,
  cl: `${COMMONS}Himno_Nacional_de_Chile.ogg`,
  co: `${COMMONS}United_States_Navy_Band_-_%C2%A1Oh%2C_gloria_inmarcesible!.ogg`,
  pe: `${COMMONS}United_States_Navy_Band_-_Marcha_Nacional_del_Per%C3%BA.ogg`,
  ve: `${COMMONS}United_States_Navy_Band_-_Gloria_al_Bravo_Pueblo.ogg`,
  cu: `${COMMONS}Cuban_national_anthem_(abridged_version)%2C_performed_by_the_U.S._Navy_Band.oga`,
  bd: `${COMMONS}Amar_Sonar_Bangla_instrumental_by_US_Navy_Band.oga`,
  gy: `${COMMONS}National_Anthem_of_Guyana.ogg`,
  vu: `${COMMONS}United_States_Navy_Band_-_Yumi%2C_Yumi%2C_Yumi.ogg`,
  ws: `${COMMONS}SamoaAnthem.ogg`,
  to: `${COMMONS}Ko_e_fasi_%CA%BBo_e_tu%CA%BBi_%CA%BBo_e_%CA%BBOtu_Tonga.ogg`,
  pw: `${COMMONS}Belau_rekid_(instrumental).oga`,
  cy: `${NI}gr.mp3`,
  xk: `https://upload.wikimedia.org/wikipedia/commons/0/0a/National_Anthem_of_the_Republic_of_Kosovo.ogg`,
};

export function getAnthemUrl(code: string): string {
  return commonsUrls[code] || `${NI}${code}.mp3`;
}
