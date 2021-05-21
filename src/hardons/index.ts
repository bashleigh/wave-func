import { AntiUpQuark, AntiDownQuark } from "../antimatter";
import { DownQuark, UpQuark } from "../matter";
import { Hardon, HardonCategory } from "../types";

export class Proton implements Hardon {
  name = 'proton';
  particles = [
    new UpQuark(),
    new UpQuark(),
    new DownQuark(),
  ];
  category = HardonCategory.BARYON;
}

export class Neutron implements Hardon {
  name = 'neutron';
  particles = [
    new UpQuark(),
    new DownQuark(),
    new DownQuark(),
  ];
  category = HardonCategory.BARYON;
}

export class Pion implements Hardon {
  name = 'pion';
  category = HardonCategory.MESON;
  particles = [
    new UpQuark(),
    new AntiUpQuark(),
  ];
}

export class AntiProton implements Hardon {
  name = 'antiproton';
  particles = [
    new AntiUpQuark(),
    new AntiUpQuark(),
    new AntiDownQuark(),
  ];
  category = HardonCategory.BARYON;
}

export class AntiNeutron implements Hardon {
  name = 'antineutron';
  particles = [
    new AntiUpQuark(),
    new AntiDownQuark(),
    new AntiDownQuark(),
  ];
  category = HardonCategory.BARYON;
}
