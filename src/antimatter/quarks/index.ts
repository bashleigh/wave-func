import { ForceType, Particle, ParticleGroup, ParticleType, StateType } from "../../types";

export class AntiUpQuark implements Particle {
  name = 'antiup quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: '2/3',
    state: StateType.negative,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = true;
  theoretical = false;
  mass = 2.2;
  symbol: '-u';
  spin = '1/2';
}

export class AntiDownQuark implements Particle {
  name = 'antidown quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: '1/3',
    state: StateType.positive,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = true;
  theoretical = false;
  mass = 4.7;
  symbol: '–d';
  spin = '1/2';
}

export class AntiCharmQuark implements Particle {
  name = 'anticharm quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: '2/3',
    state: StateType.negative,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = true;
  theoretical = false;
  mass = 1.28;
  symbol: '-c';
  spin = '1/2';
}

export class AntiStrangeQuark implements Particle {
  name = 'antistrange quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: '1/3',
    state: StateType.positive,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = true;
  theoretical = false;
  mass = 96;
  symbol: '-s';
  spin = '1/2';
}


export class AntiTopQuark implements Particle {
  name = 'antitop quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: '2/3',
    state: StateType.negative,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = true;
  theoretical = false;
  mass = 173.1;
  symbol: '-t';
  spin = '1/2';
}

export class AntiBottomQuark implements Particle {
  name = 'antibottom quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: '1/3',
    state: StateType.positive,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = true;
  theoretical = false;
  mass = 4.18;
  symbol: '-b';
  spin = '1/2';
}
