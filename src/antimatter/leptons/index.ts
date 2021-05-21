import { ForceType, Particle, ParticleGroup, ParticleType, StateType } from "../../types";

export class Positron implements Particle {
  name: 'positron';
  type = ParticleType.LEPTON;
  group = ParticleGroup.FERMION;
  charge = {
    value: 1,
    state: StateType.positive,
  };
  scalar = false;
  appliedForces = [
    ForceType.ELECTROMAGNETISM,
  ];
  antiMatter = true;
  mass = .511;
  theoretical = false;
  symbol = 'e+';
  spin = '1/2';
}

export class ElectronAntiNeutrino implements Particle {
  name: 'electron antineutrino';
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
  antiMatter = true;
  mass = 2.2;
  theoretical = false;
  symbol = '-Ve';
  spin = '1/2';
}

export class AntiMuon implements Particle {
  name: 'antimuon';
  type = ParticleType.LEPTON;
  group = ParticleGroup.FERMION;
  charge = {
    value: 1,
    state: StateType.positive,
  };
  scalar = false;
  appliedForces = [
    ForceType.ELECTROMAGNETISM,
  ];
  antiMatter = true;
  mass = 105.66;
  theoretical = false;
  symbol = '-µ';
  spin = '1/2';
}

export class MuonAntiNeutrino implements Particle {
  name: 'muon antineutrino';
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
  antiMatter = true;
  mass = .17;
  theoretical = false;
  symbol = '-Vµ';
  spin = '1/2';
}

export class AntiTau implements Particle {
  name: 'antitau';
  type = ParticleType.LEPTON;
  group = ParticleGroup.FERMION;
  charge = {
    value: 1,
    state: StateType.positive,
  };
  scalar = false;
  appliedForces = [
    ForceType.ELECTROMAGNETISM,
  ];
  antiMatter = true;
  mass = 1.7768;
  theoretical = false;
  symbol = '-Vµ';
  spin = '1/2';
}

export class TauAntiNeutrino implements Particle {
  name: 'tau antineutrino';
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
  antiMatter = true;
  mass = 18.2;
  theoretical = false;
  symbol = '-Vt';
  spin = '1/2';
}
