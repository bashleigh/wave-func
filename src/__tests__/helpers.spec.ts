import { Photon } from "../bosons";
import { getBosons, toSub, toSuper } from "../helpers";
import { numberToParticleChargeForHumans } from "../helpers/human.readables";
import { Electron } from "../matter";

describe("Helpers", () => {
  it('Can get sub number', () => {
    expect(toSub(3)).toBe('\u2083');
  });

  it('Can get super number', () => {
    expect(toSuper(3)).toBe('\u00B3');
  });

  it('Can get bosons for particle', () => {
    const particle = new Electron();

    const bosons = getBosons(particle);

    expect(bosons.length).toBe(1);
    expect(bosons[0]).toBeInstanceOf(Photon);
  });

  it('numberToParticleChargeForHumans', () => {
    expect(numberToParticleChargeForHumans(0.3333333)).toBe('1/3');
    expect(numberToParticleChargeForHumans(0.6666666)).toBe('2/3');
    expect(numberToParticleChargeForHumans(0.5)).toBe('1/2');
    expect(numberToParticleChargeForHumans(0)).toBe('0');
    expect(numberToParticleChargeForHumans(1)).toBe('1');
  });
});
