import { Photon } from "../bosons";
import { getBosons, toSub, toSuper } from "../helpers";
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
});
