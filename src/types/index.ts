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
}

export enum ChargeType {
  ELECTROMAGNETIC = 'electromagnetic',
  COLOUR = 'colour',
}

export enum Spin {
  WHOLE = '1',
  HALF = '1/2',
  TWO_THIRDS = '2/3',
  ONE_THIRD = '1/3',
}

export interface Particle {
  name: string;
  group: ParticleGroup;
  type?: ParticleType;
  appliedForces: ForceType[];
  charge: {
    value: number | string,
    state: StateType,
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
