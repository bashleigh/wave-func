import { AntiUpQuark, AntiDownQuark } from "../antimatter";
import { DownQuark, UpQuark } from "../matter";
import { AbstractHardon, HardonCategory } from "../types";

export class Proton extends AbstractHardon {
  name = 'proton';
  particles = [
    new UpQuark(),
    new UpQuark(),
    new DownQuark(),
  ];
  category = HardonCategory.BARYON;
  antiMatter = false;
}

export class Neutron extends AbstractHardon {
  name = 'neutron';
  particles = [
    new UpQuark(),
    new DownQuark(),
    new DownQuark(),
  ];
  category = HardonCategory.BARYON;
  antiMatter = false;
}

export class Pion extends AbstractHardon {
  name = 'pion';
  category = HardonCategory.MESON;
  particles = [
    new UpQuark(),
    new AntiUpQuark(),
  ];
  antiMatter = false;
}

export class AntiProton extends AbstractHardon {
  name = 'antiproton';
  particles = [
    new AntiUpQuark(),
    new AntiUpQuark(),
    new AntiDownQuark(),
  ];
  category = HardonCategory.BARYON;
  antiMatter = true;
}

export class AntiNeutron extends AbstractHardon {
  name = 'antineutron';
  particles = [
    new AntiUpQuark(),
    new AntiDownQuark(),
    new AntiDownQuark(),
  ];
  category = HardonCategory.BARYON;
  antiMatter = true;
}
