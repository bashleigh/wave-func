import { ForceType, AbstractParticle, ParticleGroup, StateType } from "../types";

export class Photon extends AbstractParticle {
  name = 'photon';
  group = ParticleGroup.GAUGE_BOSON;
  charge = {
    value: 0,
  };
  scalar = false;
  appliedForces = [
    ForceType.ELECTROMAGNETISM,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 0;
  symbol = 'Y';
  spin = '1';
}

export class Gluon extends AbstractParticle {
  name = 'gluon';
  group = ParticleGroup.GAUGE_BOSON;
  charge = {
    value: 0,
  };
  scalar = false;
  appliedForces = [
    ForceType.STRONG_FORCE,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 0;
  symbol = 'g';
  spin = '1';
}

export class ZBoson extends AbstractParticle {
  name = 'Z boson';
  group = ParticleGroup.GAUGE_BOSON;
  charge = {
    value: 0,
  };
  scalar = false;
  appliedForces = [
    ForceType.WEAK_FORCE,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 91.19;
  symbol = 'Z';
  spin = '1';
}

export class PositiveWBoson extends AbstractParticle {
  name = 'W+ boson';
  group = ParticleGroup.GAUGE_BOSON;
  charge = {
    value: 1,
    state: StateType.POSITIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.WEAK_FORCE,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 80.39;
  symbol = 'W+';
  spin = '1';
}

export class NegativeWBoson extends AbstractParticle {
  name = 'W- boson';
  group = ParticleGroup.GAUGE_BOSON;
  charge = {
    value: 1,
    state: StateType.NEGATIVE,
  };
  scalar = false;
  appliedForces = [
    ForceType.WEAK_FORCE,
  ];
  antiMatter = false;
  theoretical = false;
  mass = 80.39;
  symbol = 'W-';
  spin = '1';
}

export class Higgs extends AbstractParticle {
  name = 'higgs boson';
  group = ParticleGroup.GAUGE_BOSON;
  charge = {
    value: 0,
  };
  scalar = true;
  appliedForces = [];
  antiMatter = false;
  theoretical = false;
  mass = 124.97;
  symbol = 'H';
  spin = 0;
}
