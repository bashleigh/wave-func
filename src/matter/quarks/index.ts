import { ForceType, AbstractParticle, ParticleCharge, ParticleGroup, ParticleType, StateType } from "../../types";

export class UpQuark extends AbstractParticle {
  name = 'up quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: ParticleCharge["2/3"],
    state: StateType.POSITIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 2.2;
  symbol = 'u';
  spin = '1/2';
}

export class DownQuark extends AbstractParticle {
  name = 'down quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: ParticleCharge["1/3"],
    state: StateType.NEGATIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 2.2;
  symbol = 'd';
  spin = '1/2';
}

export class CharmQuark extends AbstractParticle {
  name = 'charm quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: ParticleCharge["2/3"],
    state: StateType.POSITIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 1.28;
  symbol = 'c';
  spin = '1/2';
}

export class StrangeQuark extends AbstractParticle {
  name = 'strange quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: ParticleCharge["1/3"],
    state: StateType.NEGATIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 96;
  symbol = 's';
  spin = '1/2';
}

export class TopQuark extends AbstractParticle {
  name = 'top quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: ParticleCharge["2/3"],
    state: StateType.POSITIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 173.1;
  symbol = 't';
  spin = '1/2';
}

export class BottomQuark extends AbstractParticle {
  name = 'bottom quark';
  group = ParticleGroup.FERMION;
  type = ParticleType.QUARK;
  charge = {
    value: ParticleCharge["1/3"],
    state: StateType.NEGATIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
    ForceType.WEAK_FORCE,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 4.18;
  symbol = 'b';
  spin = '1/2';
}
