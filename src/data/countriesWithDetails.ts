import { countries, Country } from './countries';
import { enrichmentData } from './countries-enriched';

function enrichCountries(): Country[] {
  return countries.map(c => {
    const extra = enrichmentData[c.id];
    if (!extra) return c;
    return { ...c, ...extra };
  });
}

export const enrichedCountries = enrichCountries();

export type { Country };
export {
  continents,
  regions,
  subRegions,
} from './countries';
