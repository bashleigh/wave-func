import { AntiTopQuark, AntiUpQuark, Positron } from "../antimatter";
import { AntiProton, Proton } from "../hardons";
import { oppositeMatter } from "../helpers/opposite.matter";
import { Electron, TopQuark, UpQuark } from "../matter";

describe('Opposite matter', () => {
  it('Can get opposite of matter', () => {
    expect(oppositeMatter(new UpQuark())).toBeInstanceOf(AntiUpQuark);
  });

  it('Can get opposite of antimatter', () => {
    expect(oppositeMatter(new AntiTopQuark())).toBeInstanceOf(TopQuark);
  });

  it('Can get opposite of proton', () => {
    expect(oppositeMatter(new Proton())).toBeInstanceOf(AntiProton);
  });

  it('Can get opposite of positron', () => {
    expect(oppositeMatter(new Positron())).toBeInstanceOf(Electron);
  });
});
