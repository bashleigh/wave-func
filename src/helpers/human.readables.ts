export const numberToParticleChargeForHumans = (num: number): string => num === 1 ? '1' : num === 0.3333333 ? "1/3" : num === 0.6666666 ? "2/3" : num === .5 ? "1/2" : '0';
