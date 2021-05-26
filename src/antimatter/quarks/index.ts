import { ForceType, AbstractParticle, ParticleCharge, ParticleGroup, ParticleType, StateType } from "../../types";

export class AntiUpQuark extends AbstractParticle {
  name = 'antiup quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: ParticleCharge["2/3"],
    state: StateType.NEGATIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = true;
  theoretical = false;
  mass = 2.2;
  symbol = '-u';
  spin = '1/2';
}

export class AntiDownQuark extends AbstractParticle {
  name = 'antidown quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: ParticleCharge["1/3"],
    state: StateType.POSITIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = true;
  theoretical = false;
  mass = 4.7;
  symbol = '–d';
  spin = '1/2';
}

export class AntiCharmQuark extends AbstractParticle {
  name = 'anticharm quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: ParticleCharge["2/3"],
    state: StateType.NEGATIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = true;
  theoretical = false;
  mass = 1.28;
  symbol = '-c';
  spin = '1/2';
}

export class AntiStrangeQuark extends AbstractParticle {
  name = 'antistrange quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: ParticleCharge["1/3"],
    state: StateType.POSITIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = true;
  theoretical = false;
  mass = 96;
  symbol = '-s';
  spin = '1/2';
}


export class AntiTopQuark extends AbstractParticle {
  name = 'antitop quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: ParticleCharge["2/3"],
    state: StateType.NEGATIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = true;
  theoretical = false;
  mass = 173.1;
  symbol = '-t';
  spin = '1/2';
}

export class AntiBottomQuark extends AbstractParticle {
  name = 'antibottom quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: ParticleCharge["1/3"],
    state: StateType.POSITIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = true;
  theoretical = false;
  mass = 4.18;
  symbol = '-b';
  spin = '1/2';
}
