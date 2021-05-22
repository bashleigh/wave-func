import { AntiBottomQuark, AntiCharmQuark, AntiDownQuark, AntiMuon, AntiStrangeQuark, AntiTau, AntiTopQuark, AntiUpQuark, ElectronAntiNeutrino, MuonAntiNeutrino, Positron, TauAntiNeutrino } from "../antimatter";
import { AntiNeutron, AntiProton, Neutron, Proton } from "../hardons";
import { BottomQuark, CharmQuark, DownQuark, Electron, ElectronNeutrino, Muon, MuonNeutrino, StrangeQuark, Tau, TauNeutrino, TopQuark, UpQuark } from "../matter";
import { HardonInterface, Particle } from "../types";

const oppositeMatters = {
  [UpQuark.name]: AntiUpQuark,
  [DownQuark.name]: AntiDownQuark,
  [CharmQuark.name]: AntiCharmQuark,
  [StrangeQuark.name]: AntiStrangeQuark,
  [TopQuark.name]: AntiTopQuark,
  [BottomQuark.name]: AntiBottomQuark,
  [Electron.name]: Positron,
  [ElectronNeutrino.name]: ElectronAntiNeutrino,
  [TauNeutrino.name]: TauAntiNeutrino,
  [Muon.name]: AntiMuon,
  [MuonNeutrino.name]: MuonAntiNeutrino,
  [Tau.name]: AntiTau,
  [Proton.name]: AntiProton,
  [Neutron.name]: AntiNeutron,
};

const oppositeAntiMatters = {
  [AntiUpQuark.name]: UpQuark,
  [AntiDownQuark.name]: DownQuark,
  [AntiCharmQuark.name]: CharmQuark,
  [AntiStrangeQuark.name]: StrangeQuark,
  [AntiTopQuark.name]: TopQuark,
  [AntiBottomQuark.name]: BottomQuark,
  [Positron.name]: Electron,
  [ElectronAntiNeutrino.name]: ElectronNeutrino,
  [TauAntiNeutrino.name]: TauNeutrino,
  [AntiMuon.name]: Muon,
  [MuonAntiNeutrino.name]: MuonNeutrino,
  [AntiTau.name]: Tau,
  [AntiProton.name]: Proton,
  [AntiNeutron.name]: Neutron,
};

export const oppositeMatter = (matter: Particle | HardonInterface): Particle | HardonInterface => {
  const opposite = ((matter.antiMatter) ? oppositeAntiMatters : oppositeMatters)[matter.constructor.name];

  return new opposite();
};
