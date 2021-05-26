import { numberToParticleChargeForHumans } from "../helpers/human.readables";

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
  ELECTROMAGNETISM = 'electromagnetism',
  STRONG_FORCE = 'strong force',
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

export abstract class AbstractParticle implements Particle {
  abstract name: string;
  abstract group: ParticleGroup;
  abstract appliedForces: ForceType[];
  type?: ParticleType;
  abstract charge: {
    value: ParticleCharge;
    state?: StateType;
  };
  abstract scalar: boolean;
  abstract antiMatter: boolean;
  abstract mass: number;
  abstract theoretical: boolean;
  abstract symbol: string;
  abstract spin: number | string;

  get chargeForHumans(): string {
    return `${typeof this.charge.state !== 'undefined' ? this.charge.state === StateType.POSITIVE ? '+' : '-' : ''}${numberToParticleChargeForHumans(this.charge.value)}`;
  }
}

export enum StateType { 
  POSITIVE = 'positive',
  NEGATIVE = 'negative',
}

export enum HardonCategory {
  MESON = 'meson',
  BARYON = 'baryon',
}

export interface HardonInterface {
  name: string;
  particles: Particle[];
  category: HardonCategory;
  antiMatter: boolean;
}

export abstract class AbstractHardon implements HardonInterface {
  abstract name: string;
  abstract particles: Particle[];
  abstract category: HardonCategory; // Determined by particles in hardon?
  abstract antiMatter: boolean;

  get chargeForHumans(): string {
    return numberToParticleChargeForHumans(this.charge);
  }

  get charge(): number {
    return Math.ceil(this.particles.reduce((current, particle) => {
      const particleCharge: number = particle.charge.state === StateType.POSITIVE ? 0 + particle.charge.value : 0 - particle.charge.value;

      return current + particleCharge;
    }, 0))
  }
}
