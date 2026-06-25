import { countries, Country } from './countries';
import { enrichmentData } from './countries-enriched';
import { extraDetailsData } from './countries-extra-details';
import { statisticsData } from './countries-statistics';
import { getAnthemUrl } from './anthemUrls';
import { leaderImages } from './leaderImages';
import { arabExtraInfo } from './arabExtraInfo';

function enrichCountries(): Country[] {
  return countries.map(c => {
    const extra = enrichmentData[c.id];
    const extra2 = extraDetailsData[c.id];
    const extra3 = statisticsData[c.id];
    const anthemUrl = getAnthemUrl(c.id);
    const leaderImg = leaderImages[c.id];
    const extraInfo = arabExtraInfo[c.id];
    let result = { ...c };
    if (extra) result = { ...result, ...extra };
    if (extra2) result = { ...result, ...extra2 };
    if (extra3) result = { ...result, ...extra3 };
    if (anthemUrl) result.nationalAnthemUrl = anthemUrl;
    if (leaderImg) result.leaderImageUrl = leaderImg;
    if (extraInfo) {
      result.phoneCode = extraInfo.phoneCode;
      result.internetTLD = extraInfo.internetTLD;
      result.established = extraInfo.established;
    }
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
