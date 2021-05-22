const subUnicodes = {
  0: '\u2070',
  1: '\u00B9',
  2: '\u00B2',
  3: '\u00B3',
  4: '\u2074',
  5: '\u2075',
  6: '\u2076',
  7: '\u2077',
  8: '\u2078',
  9: '\u2079',
};

const superUnicodes = {
  0: '\u2080',
  1: '\u2081',
  2: '\u2082',
  3: '\u2083',
  4: '\u2084',
  5: '\u2085',
  6: '\u2086',
  7: '\u2087',
  8: '\u2088',
  9: '\u2089',
};

export const toSub = (num: number): string => num.toString().split('').map(nu => subUnicodes[parseInt(nu)]).join('');
export const toSuper = (num: number): string => num.toString().split('').map(nu => superUnicodes[parseInt(nu)]).join('');