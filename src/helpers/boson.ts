import { Gluon, NegativeWBoson, Photon, PositiveWBoson, ZBoson } from "../bosons";
import { ForceType, Particle } from "../types";

export const getBosons = (particle: Particle): Particle[] => {
  if (!particle.appliedForces || particle.appliedForces.length === 0) {
    return [];
  }

  const bosons: Particle[] = [];

  if (particle.appliedForces.includes(ForceType.STRONG_FORCE)) {
    bosons.push(new Gluon());
  }

  if (particle.appliedForces.includes(ForceType.ELECTROMAGNETISM)) {
    bosons.push(new Photon());
  }

  if (particle.appliedForces.includes(ForceType.WEAK_FORCE)) {
    bosons.push(new PositiveWBoson());
    bosons.push(new NegativeWBoson());
    bosons.push(new ZBoson());
  }

  return bosons;
}
