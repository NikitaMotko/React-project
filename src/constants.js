export const BASE_URL = 'http://localhost:3001';
export const BANNERS_PAGE_LIMIT = 4;
export const TABLE_LIMIT = 7;
export const WEAPON = 'weapon';
export const CHARACTER = 'character';
export const COMMON = 'common';
export const RARE = 'rare';
export const IMMORTAL = 'immortal';
export const QUALITY_BANNER = [COMMON, RARE, IMMORTAL];
export const TYPE_BANNER = [WEAPON, CHARACTER];
export const REGEX_USERNAME =
  /^(?=.{5,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
export const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export const REGEX_PASSWORD =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&.,<'>\-+=/#^()_`~";:\s]{8,20}$/;
