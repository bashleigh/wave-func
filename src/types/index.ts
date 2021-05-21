export enum ParticleGroup {
  FERMION = 'fermion',
  GAUGE_BOSON = 'gauge boson',
}

export enum ParticleType {
  QUARK = 'quark',
  LEPTON = 'lepton',
}

export enum ForceType {
  WEAK_FORCE = 'weak force',
  ELECTROMAGNETIC = 'electromagnetic',
  STRONG_FORCE = 'strong force',
  CHROMODYNAMIC = 'chromodynamic',
}

export enum Spin {
  WHOLE = '1',
  HALF = '1/2',
  TWO_THIRDS = '2/3',
  ONE_THIRD = '1/3',
}

export enum ParticleCharge {
  'whole' = 1,
  'none' = 0,
  '1/3' = 0.3333333,
  '2/3' = 0.6666666,
  '1/2' = .5,
}

export const numberToParticleCharge = (num: number): ParticleCharge => num === 1 ? ParticleCharge.whole : num === 0.3333333 ? ParticleCharge["1/3"] : num === 0.6666666 ? ParticleCharge["2/3"] : num === .5 ? ParticleCharge["1/2"] : ParticleCharge.none;

export interface Particle {
  name: string;
  group: ParticleGroup;
  type?: ParticleType;
  appliedForces: ForceType[];
  charge: {
    value: ParticleCharge,
    state?: StateType,
  };
  scalar: boolean;
  antiMatter: boolean;
  mass: number;
  theoretical: boolean;
  symbol: string;
  spin: number | string;
}

export enum StateType { 
  'positive',
  'negative',
}

export enum HardonCategory {
  MESON = 'meson',
  BARYON = 'baryon',
}

export interface HardonInterface {
  name: string;
  particles: Particle[];
  category: HardonCategory;
}

export abstract class AbstractHardon implements HardonInterface {
  abstract name: string;
  abstract particles: Particle[];
  abstract category: HardonCategory; // Determined by particles in hardon?

  get charge(): ParticleCharge {
    return numberToParticleCharge(this.particles.reduce((current, particle) => {
      const particleCharge: number = particle.charge.state === StateType.positive ? 0 + particle.charge.value : 0 - particle.charge.value;

      return current + particleCharge;
    }, 0))
  }
}
