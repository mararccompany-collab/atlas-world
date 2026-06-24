import { countries, Country } from './countries';
import { enrichmentData } from './countries-enriched';
import { extraDetailsData } from './countries-extra-details';
import { statisticsData } from './countries-statistics';
import { anthemUrls } from './anthemUrls';

function enrichCountries(): Country[] {
  return countries.map(c => {
    const extra = enrichmentData[c.id];
    const extra2 = extraDetailsData[c.id];
    const extra3 = statisticsData[c.id];
    const anthemUrl = anthemUrls[c.id];
    let result = { ...c };
    if (extra) result = { ...result, ...extra };
    if (extra2) result = { ...result, ...extra2 };
    if (extra3) result = { ...result, ...extra3 };
    if (anthemUrl) result.nationalAnthemUrl = anthemUrl;
    return result;
  });
}

export const enrichedCountries = enrichCountries();

export type { Country };
export {
  continents,
  regions,
  subRegions,
} from './countries';
