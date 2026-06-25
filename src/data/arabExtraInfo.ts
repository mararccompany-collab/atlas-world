export interface ArabExtraInfo {
  phoneCode: string;
  internetTLD: string;
  established: string;
}

export const arabExtraInfo: Record<string, ArabExtraInfo> = {
  sa: { phoneCode: '+966', internetTLD: '.sa', established: '23 سبتمبر 1932' },
  ae: { phoneCode: '+971', internetTLD: '.ae', established: '2 ديسمبر 1971' },
  eg: { phoneCode: '+20', internetTLD: '.eg', established: '28 فبراير 1922' },
  iq: { phoneCode: '+964', internetTLD: '.iq', established: '3 أكتوبر 1932' },
  jo: { phoneCode: '+962', internetTLD: '.jo', established: '25 مايو 1946' },
  lb: { phoneCode: '+961', internetTLD: '.lb', established: '22 نوفمبر 1943' },
  sy: { phoneCode: '+963', internetTLD: '.sy', established: '17 أبريل 1946' },
  kw: { phoneCode: '+965', internetTLD: '.kw', established: '19 يونيو 1961' },
  qa: { phoneCode: '+974', internetTLD: '.qa', established: '3 سبتمبر 1971' },
  bh: { phoneCode: '+973', internetTLD: '.bh', established: '15 أغسطس 1971' },
  om: { phoneCode: '+968', internetTLD: '.om', established: '18 نوفمبر 1650' },
  ye: { phoneCode: '+967', internetTLD: '.ye', established: '22 مايو 1990' },
  ly: { phoneCode: '+218', internetTLD: '.ly', established: '24 ديسمبر 1951' },
  tn: { phoneCode: '+216', internetTLD: '.tn', established: '20 مارس 1956' },
  dz: { phoneCode: '+213', internetTLD: '.dz', established: '5 يوليو 1962' },
  ma: { phoneCode: '+212', internetTLD: '.ma', established: '2 مارس 1956' },
  sd: { phoneCode: '+249', internetTLD: '.sd', established: '1 يناير 1956' },
  mr: { phoneCode: '+222', internetTLD: '.mr', established: '28 نوفمبر 1960' },
  so: { phoneCode: '+252', internetTLD: '.so', established: '1 يوليو 1960' },
  dj: { phoneCode: '+253', internetTLD: '.dj', established: '27 يونيو 1977' },
  km: { phoneCode: '+269', internetTLD: '.km', established: '6 يوليو 1975' },
  ps: { phoneCode: '+970', internetTLD: '.ps', established: '15 نوفمبر 1988' },
};
