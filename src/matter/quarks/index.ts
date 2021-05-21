import { ForceType, Particle, ParticleGroup, ParticleType, StateType } from "../../types";

export class UpQuark implements Particle {
  name = 'up quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: '2/3',
    state: StateType.positive,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
    ForceType.CHROMODYNAMIC,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 2.2;
  symbol: 'u';
  spin = '1/2';
}

export class DownQuark implements Particle {
  name = 'down quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: '1/3',
    state: StateType.negative,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
    ForceType.CHROMODYNAMIC,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 2.2;
  symbol: 'd';
  spin = '1/2';
}

export class CharmQuark implements Particle {
  name = 'charm quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: '2/3',
    state: StateType.positive,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
    ForceType.CHROMODYNAMIC,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 1.28;
  symbol: 'c';
  spin = '1/2';
}

export class StrangeQuark implements Particle {
  name = 'strange quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: '1/3',
    state: StateType.negative,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
    ForceType.CHROMODYNAMIC,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 96;
  symbol: 's';
  spin = '1/2';
}

export class TopQuark implements Particle {
  name = 'top quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: '2/3',
    state: StateType.positive,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
    ForceType.CHROMODYNAMIC,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 173.1;
  symbol: 't';
  spin = '1/2';
}

export class BottomQuark implements Particle {
  name = 'bottom quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: '1/3',
    state: StateType.negative,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
    ForceType.CHROMODYNAMIC,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 4.18;
  symbol: 'b';
  spin = '1/2';
}
