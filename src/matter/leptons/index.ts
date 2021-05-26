import { ForceType, Particle, ParticleGroup, ParticleType, StateType } from "../../types";

export class Electron implements Particle {
  name = 'electron';
  type = ParticleType.LEPTON;
  group = ParticleGroup.FERMION;
  charge = {
    value: 1,
    state: StateType.negative,
  };
  scalar = false;
  appliedForces = [
    ForceType.ELECTROMAGNETISM,
  ];
  antiMatter = false;
  theoretical = false;
  mass = .511;
  symbol = 'e';
  spin = '1/2';
}

export class ElectronNeutrino implements Particle {
  name = 'electron neutrino';
  type = ParticleType.LEPTON;
  group = ParticleGroup.FERMION;
  charge = {
    value: 0,
    state: StateType.negative,
  };
  scalar = false;
  appliedForces = [
    ForceType.ELECTROMAGNETISM,
  ];
  antiMatter = false;
  mass = 2.2;
  theoretical = false;
  symbol = 'Ve';
  spin = '1/2';
}


export class Muon implements Particle {
  name = 'muon';
  type = ParticleType.LEPTON;
  group = ParticleGroup.FERMION;
  charge = {
    value: 1,
    state: StateType.negative,
  };
  scalar = false;
  appliedForces = [
    ForceType.ELECTROMAGNETISM,
  ];
  antiMatter = false;
  mass = 105.66;
  theoretical = false;
  symbol = 'µ';
  spin = '1/2';
}

export class Tau implements Particle {
  name = 'tau';
  type = ParticleType.LEPTON;
  group = ParticleGroup.FERMION;
  charge = {
    value: 1,
    state: StateType.negative,
  };
  scalar = false;
  appliedForces = [
    ForceType.ELECTROMAGNETISM,
  ];
  antiMatter = false;
  mass = 1.7768;
  theoretical = false;
  symbol = 'T';
  spin = '1/2';
}

export class TauNeutrino implements Particle {
  name = 'tau neutrino';
  type = ParticleType.LEPTON;
  group = ParticleGroup.FERMION;
  charge = {
    value: 1,
    state: StateType.negative,
  };
  scalar = false;
  appliedForces = [
    ForceType.ELECTROMAGNETISM,
  ];
  antiMatter = false;
  mass = 18.2;
  theoretical = false;
  symbol = 'Vt';
  spin = '1/2';
}

export class MuonNeutrino implements Particle {
  name = 'muon neutrino';
  type = ParticleType.LEPTON;
  group = ParticleGroup.FERMION;
  charge = {
    value: 0,
    state: StateType.negative,
  };
  scalar = false;
  appliedForces = [
    ForceType.ELECTROMAGNETISM,
  ];
  antiMatter = false;
  mass = 0.17;
  theoretical = false;
  symbol = 'Vµ';
  spin = '1/2';
}
