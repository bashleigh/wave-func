import { UpQuark, DownQuark } from "../";

describe('Particle', () => {
  it('chargeForHumans', () => {
    const up = new UpQuark();

    expect(up.chargeForHumans).toBe(`+2/3`);

    const down = new DownQuark();

    expect(down.chargeForHumans).toBe(`-1/3`);
  });
});
