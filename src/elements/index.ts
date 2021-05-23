import { AntiProton, Neutron, Proton } from "../hardons";
import { toSub } from "../helpers";
import { AbstractHardon } from "../types";

export enum ElementName {
  HYDROGEN = 'hydrogen',
  HELIUM = 'helium',
  LITHIUM = 'lithium',
  BERYLLIUM = 'beryllium',
  BORON = 'boron',
  CARBON = 'carbon',
  NITROGEN = 'nitrogen',
  OXYGEN = 'oxygen',
  FLUORINE = 'fluorine',
  NEON = 'neon',
  SODIUM = 'sodium',
  MAGNESIUM = 'magnesium',
  ALUMINIUM = 'aluminium',
  SILICON = 'silicon',
  PHOSPHORUS = 'phosphorus',
  SULFUR = 'sulfur',
  CHLORINE = 'chlorine',
  ARGON = 'argon',
  POTASSIUM = 'potassium',
  CALCIUM = 'calcium',
  SCANDIUM = 'scandium',
  TITANIUM = 'titanium',
  VANADIUM = 'vanadium',
  CHROMIUM = 'chromium',
  MANGANESE = 'manganese',
  IRON = 'iron',
  COLBOLT = 'colbolt',
  NICKEL = 'nickel',
  COPPER = 'copper',
  ZINC = 'zinc',
  GALLIUM = 'gallium',
  GERMANIUM = 'germanium',
  ARSENIC = 'arsenic',
  SELENIUM = 'selenium',
  BORMINE = 'bormine',
  KRYPTON = 'krypton',
  RUBIDIUM = 'rubidium',
  STRONTIUM = 'strontium',
  YTTRIUM = 'yttrium',
  ZIRCONIUM = 'zirconium',
  NIOBIUM = 'niobium',
  MOLYBDENUM = 'molbdenum',
  TECHNETIUM = 'technetium',
  RUTHENIUM = 'ruthenium',
  RHODIUM = 'rhodium',
  PALLADIUM = 'palladium',
  SILVER = 'silver',
  CADMIUM = 'cadmium',
  INDIUM = 'indium',
  TIN = 'tin',
  ANTIMONY = 'antimony',
  TELLURIUM = 'tellurium',
  IODINE = 'iodine',
  XNEON = 'xneon',
  CASIUM = 'casium',
  BARIUM = 'barium',
  LUTETIUM = 'lutetium',
  HAFNIUM = 'hafnium',
  TANTALUM = 'tantalum',
  TUNGSTEN = 'tungsten',
  RHENIUM = 'rhenium',
  OSMIUM = 'osmium',
  IRIDIUM = 'iridium',
  PLATINUM = 'pltinum',
  GOLD = 'gold',
  MERCURY = 'mercury',
  THALLIUM = 'thallium',
  LEAD = 'lead',
  BISMUTH = 'bismuth',
  POLONIUM = 'polonium',
  ASTATINE = 'astatine',
  RADON = 'radon',
  FRANCIUM = 'francium',
  RADIUM = 'radium',
  LAWRENCIUM = 'lawrencium',
  RUTHERFORDIUM = 'rutherfordium',
  DUBNIUM = 'dubnium',
  SEABORGIUM = 'seaborgium',
  BOHRIUM = 'bohrium',
  HASSIUM = 'hassium',
  MEITNERIUM = 'meitnerium',
  DARMSTADTIUM = 'darmstadtium',
  REONTGENIUM = 'reontgenium',
  COPERNICIUM = 'copernicium',
  NIHONIUM = 'nihonium',
  FLEROVIUM = 'flerovium',
  MOSCOVIUM = 'moscovium',
  LIVERMORIUM = 'livermorium',
  TENNESSINE = 'tennessine',
  OGANESSON = 'oganesson',

}

export enum ElementaryGroup {
  HYDROGEN = 'hydrogen',
  NOBLE_GAS = 'noble gas',
  ALKALIN_METAL = 'alkalin metal',
  BORON_GROUP = 'boron group',
  CARBON_GROUP = 'carbon group',
  PNICTOGENS_GROUP = 'pinctogens group',
  CHALCOGENS_GROUP = 'chalcogens group',
  HALOGEN = 'halogen group',
  GROUP3 = 'group 3',
  GROUP4 = 'group 4',
  GROUP5 = 'group 5',
  GROUP6 = 'group 6',
  GROUP7 = 'group 7',
  GROUP8 = 'group 8',
  GROUP9 = 'group 9',
  GROUP10 = 'group 10',
  GROUP11 = 'group 11',
  GROUP12 = 'group 12',
}

export interface ElementInterface {
  hardons: AbstractHardon[];
  electrons: number[];
  name: ElementName;
  atomicSymbol: string;
  meltingPoint?: number;
  bolingPoint?: number;
  group: ElementaryGroup;
  number: number;
}
export abstract class AbstractElement implements ElementInterface {
  abstract electrons: number[];
  abstract atomicSymbol: string;
  abstract name: ElementName;
  abstract hardons: AbstractHardon[];
  abstract group: ElementaryGroup;
  abstract number: number;

  get electronShells(): number {
    return this.electrons.length
  }

  get overallChargeStatus(): 'positive' | 'negative' {
    return this.charge < 0 ? 'negative' : 'positive';
  }

  get charge(): number {
    return this.hardons.reduce((charge, hardon) => hardon.charge + charge, 0) - this.electrons.reduce((sum, electron) => sum + electron);
  }

  get symbol(): string {
    const protonCount = this.hardons.filter(hardon => hardon instanceof Proton).length;
    return protonCount === this.number ? this.atomicSymbol : `${toSub(protonCount)}${this.atomicSymbol}`;
  }

  get stable(): boolean {
    return this.charge === 0;
  }

  addHardon(hardon: Proton | Neutron) {
    this.hardons.push(hardon);
    if (hardon instanceof Proton) {
      // TODO calculate next atommic structure
    }
  }
}

export class Hydrogen extends AbstractElement {
  name = ElementName.HYDROGEN;
  number = 1;
  atomicSymbol = 'H';
  hardons = [
    new Proton(),
  ];
  electrons = [1];
  group = ElementaryGroup.HYDROGEN;
  meltingPoint = 13.99;
  bolingPoint = 20.271;
}

export class Helium extends AbstractElement {
  name = ElementName.HELIUM;
  number = 2;
  atomicSymbol = 'He';
  hardons = [
    ...new Array(2).fill(new Proton()),
    ...new Array(2).fill(new Neutron()),
  ];
  electrons = [2];
  group = ElementaryGroup.NOBLE_GAS;
  meltingPoint = .95;
  bolingPoint = 4.222;
}

export class Lithium extends AbstractElement {
  name = ElementName.LITHIUM;
  number = 3;
  atomicSymbol = 'Li';
  hardons = [
    ...new Array(3).fill(new Proton()),
    ...new Array(3).fill(new Neutron()),
  ];
  electrons = [2, 1];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 453.65;
  bolingPoint = 1603;
}

export class Beryllium extends AbstractElement {
  name = ElementName.BERYLLIUM;
  number = 4;
  atomicSymbol = 'Be';
  hardons = [
    ...new Array(4).fill(new Proton()),
    ...new Array(4).fill(new Neutron()),
  ];
  electrons = [2, 2];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 1560;
  bolingPoint = 2742;
}

export class Boron extends AbstractElement {
  name = ElementName.BORON;
  number = 5;
  atomicSymbol = 'B';
  hardons = [
    ...new Array(5).fill(new Proton()),
    ...new Array(5).fill(new Neutron()),
  ];
  electrons = [2, 3];
  group = ElementaryGroup.BORON_GROUP;
  meltingPoint = 2349;
  bolingPoint = 4200;
}

export class Carbon extends AbstractElement {
  name = ElementName.CARBON;
  number = 6;
  atomicSymbol = 'C';
  hardons = [
    ...new Array(6).fill(new Proton()),
    ...new Array(6).fill(new Neutron()),
  ];
  electrons = [2, 4];
  group = ElementaryGroup.CARBON_GROUP;
}

export class Nitrogen extends AbstractElement {
  name = ElementName.NITROGEN;
  number = 7;
  atomicSymbol = 'N';
  hardons = [
    ...new Array(7).fill(new Proton()),
    ...new Array(7).fill(new Neutron()),
  ];
  electrons = [2, 5];
  group = ElementaryGroup.PNICTOGENS_GROUP;
  bolingPoint = 77.355;
  meltingPoint = 63.23;
}

export class Oxygen extends AbstractElement {
  name = ElementName.OXYGEN;
  number = 8;
  atomicSymbol = 'O';
  hardons = [
    ...new Array(8).fill(new Proton()),
    ...new Array(8).fill(new Neutron()),
  ];
  electrons = [2, 6];
  group = ElementaryGroup.CHALCOGENS_GROUP;
  meltingPoint = 54.36;
  bolingPoint = 90.188;
}

export class Fluorine extends AbstractElement {
  name = ElementName.FLUORINE;
  number = 9;
  atomicSymbol = 'F';
  hardons = [
    ...new Array(9).fill(new Proton()),
    ...new Array(9).fill(new Neutron()),
  ];
  electrons = [2, 7];
  group = ElementaryGroup.HALOGEN;
  meltingPoint = 53.48;
  bolingPoint = 85.03;
}

export class Neon extends AbstractElement {
  name = ElementName.NEON;
  number = 10;
  atomicSymbol = 'Ne';
  hardons = [
    ...new Array(10).fill(new Proton()),
    ...new Array(10).fill(new Neutron()),
  ];
  electrons = [2, 8];
  group = ElementaryGroup.NOBLE_GAS;
  meltingPoint = 24.56;
  bolingPoint = 27.104;
}

export class Sodium extends AbstractElement {
  name = ElementName.SODIUM;
  number = 11;
  atomicSymbol = 'Na';
  hardons = [
    ...new Array(11).fill(new Proton()),
    ...new Array(11).fill(new Neutron()),
  ];
  electrons = [2, 8, 1];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 370.944;
  bolingPoint = 1156.09;
}

export class Magnesium extends AbstractElement {
  name = ElementName.MAGNESIUM;
  number = 12;
  atomicSymbol = 'Mg';
  hardons = [
    ...new Array(12).fill(new Proton()),
    ...new Array(12).fill(new Neutron()),
  ];
  electrons = [2, 8, 2];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 923;
  bolingPoint = 1363;
}

export class Aluminium extends AbstractElement {
  name = ElementName.ALUMINIUM;
  number = 13;
  atomicSymbol = 'Al';
  hardons = [
    ...new Array(13).fill(new Proton()),
    ...new Array(13).fill(new Neutron()),
  ];
  electrons = [2, 8, 3];
  group = ElementaryGroup.BORON_GROUP;
  meltingPoint = 933.47;
  bolingPoint = 2743;
}

export class Silicon extends AbstractElement {
  name = ElementName.SILICON;
  number = 14;
  atomicSymbol = 'Si';
  hardons = [
    ...new Array(14).fill(new Proton()),
    ...new Array(14).fill(new Neutron()),
  ];
  electrons = [2, 8, 4];
  group = ElementaryGroup.CARBON_GROUP;
  meltingPoint = 1687;
  bolingPoint = 3538;
}

export class Phosphorus extends AbstractElement {
  name = ElementName.PHOSPHORUS;
  number = 15;
  atomicSymbol = 'P';
  hardons = [
    ...new Array(15).fill(new Proton()),
    ...new Array(15).fill(new Neutron()),
  ];
  electrons = [2, 8, 5];
  group = ElementaryGroup.PNICTOGENS_GROUP;
  meltingPoint = 317.3;
  bolingPoint = 553.7;
}

export class Sulfur extends AbstractElement {
  name = ElementName.SULFUR;
  number = 16;
  atomicSymbol = 'S';
  hardons = [
    ...new Array(16).fill(new Proton()),
    ...new Array(16).fill(new Neutron()),
  ];
  electrons = [2, 8, 6];
  group = ElementaryGroup.CHALCOGENS_GROUP;
  meltingPoint = 388.36;
  bolingPoint = 717.8;
}

export class Chlorine extends AbstractElement {
  name = ElementName.CHLORINE;
  number = 17;
  atomicSymbol = 'Cl';
  hardons = [
    ...new Array(17).fill(new Proton()),
    ...new Array(17).fill(new Neutron()),
  ];
  electrons = [2, 8, 7];
  group = ElementaryGroup.HALOGEN;
  meltingPoint = 171.6;
  bolingPoint = 239.11;
}

export class Argon extends AbstractElement {
  name = ElementName.ARGON;
  number = 18;
  atomicSymbol = 'Ar';
  hardons = [
    ...new Array(18).fill(new Proton()),
    ...new Array(18).fill(new Neutron()),
  ];
  electrons = [2, 8, 8];
  group = ElementaryGroup.NOBLE_GAS;
  meltingPoint = 83.81;
  bolingPoint = 87.302;
}

export class Potassium extends AbstractElement {
  name = ElementName.POTASSIUM;
  number = 19;
  atomicSymbol = 'K';
  hardons = [
    ...new Array(19).fill(new Proton()),
    ...new Array(19).fill(new Neutron()),
  ];
  electrons = [2, 8, 8, 1];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 336.7;
  bolingPoint = 1032;
}

export class Calcium extends AbstractElement {
  name = ElementName.CALCIUM;
  number = 20;
  atomicSymbol = 'Ca';
  hardons = [
    ...new Array(20).fill(new Proton()),
    ...new Array(20).fill(new Neutron()),
  ];
  electrons = [2, 8, 8, 2];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 1115;
  bolingPoint = 1757;
}

export class Scandium extends AbstractElement {
  name = ElementName.SCANDIUM;
  number = 21;
  atomicSymbol = 'Sc';
  hardons = [
    ...new Array(21).fill(new Proton()),
    ...new Array(21).fill(new Neutron()),
  ];
  electrons = [2, 8, 9, 2];
  group = ElementaryGroup.GROUP3;
  meltingPoint = 1814;
  bolingPoint = 3109;
}


export class Titanium extends AbstractElement {
  name = ElementName.TITANIUM;
  number = 22;
  atomicSymbol = 'Ti';
  hardons = [
    ...new Array(22).fill(new Proton()),
    ...new Array(22).fill(new Neutron()),
  ];
  electrons = [2, 8, 10, 2];
  group = ElementaryGroup.GROUP4;
  meltingPoint = 1941;
  bolingPoint = 3560;
}

export class Vandaium extends AbstractElement {
  name = ElementName.VANADIUM;
  number = 23;
  atomicSymbol = 'V';
  hardons = [
    ...new Array(23).fill(new Proton()),
    ...new Array(23).fill(new Neutron()),
  ];
  electrons = [2, 8, 11, 2];
  group = ElementaryGroup.GROUP5;
  meltingPoint = 2183;
  bolingPoint = 3680;
}

export class Chromium extends AbstractElement {
  name = ElementName.CHROMIUM;
  number = 24;
  atomicSymbol = 'Cr';
  hardons = [
    ...new Array(24).fill(new Proton()),
    ...new Array(24).fill(new Neutron()),
  ];
  electrons = [2, 8, 13, 1];
  group = ElementaryGroup.GROUP6;
  meltingPoint = 2180;
  bolingPoint = 2944;
}

export class Managnese extends AbstractElement {
  name = ElementName.MANGANESE;
  number = 25;
  atomicSymbol = 'Mn';
  hardons = [
    ...new Array(25).fill(new Proton()),
    ...new Array(25).fill(new Neutron()),
  ];
  electrons = [2, 8, 13, 2];
  group = ElementaryGroup.GROUP7;
  meltingPoint = 1519;
  bolingPoint = 2334;
}

export class Iron extends AbstractElement {
  name = ElementName.IRON;
  number = 26;
  atomicSymbol = 'Fe';
  hardons = [
    ...new Array(26).fill(new Proton()),
    ...new Array(26).fill(new Neutron()),
  ];
  electrons = [2, 8, 14, 2];
  group = ElementaryGroup.GROUP8;
  meltingPoint = 1811;
  bolingPoint = 3134;
}

export class Colbolt extends AbstractElement {
  name = ElementName.COLBOLT;
  number = 27;
  atomicSymbol = 'Co';
  hardons = [
    ...new Array(27).fill(new Proton()),
    ...new Array(27).fill(new Neutron()),
  ];
  electrons = [2, 8, 15, 2];
  group = ElementaryGroup.GROUP9;
  meltingPoint = 1768;
  bolingPoint = 3200;
}

export class Nickel extends AbstractElement {
  name = ElementName.NICKEL;
  number = 28;
  atomicSymbol = 'Ni';
  hardons = [
    ...new Array(29).fill(new Proton()),
    ...new Array(29).fill(new Neutron()),
  ];
  electrons = [2, 8, 16, 2];
  group = ElementaryGroup.GROUP10;
  meltingPoint = 1728;
  bolingPoint = 3003;
}

export class Copper extends AbstractElement {
  name = ElementName.COPPER;
  number = 29;
  atomicSymbol = 'Cu';
  hardons = [
    ...new Array(29).fill(new Proton()),
    ...new Array(29).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 1];
  group = ElementaryGroup.GROUP11;
  meltingPoint = 1357.77;
  bolingPoint = 2835;
}

export class Zinc extends AbstractElement {
  name = ElementName.ZINC;
  number = 30;
  atomicSymbol = 'Zn';
  hardons = [
    ...new Array(30).fill(new Proton()),
    ...new Array(30).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 2];
  group = ElementaryGroup.GROUP12;
  meltingPoint = 692.68;
  bolingPoint = 1180;
}

export class Gallium extends AbstractElement {
  name = ElementName.GALLIUM;
  number = 31;
  atomicSymbol = 'Ga';
  hardons = [
    ...new Array(31).fill(new Proton()),
    ...new Array(31).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 3];
  group = ElementaryGroup.BORON_GROUP;
  meltingPoint = 302.9146;
  bolingPoint = 2673;
}

export class Germanium extends AbstractElement {
  name = ElementName.GERMANIUM;
  number = 32;
  atomicSymbol = 'Ge';
  hardons = [
    ...new Array(32).fill(new Proton()),
    ...new Array(32).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 4];
  group = ElementaryGroup.CARBON_GROUP;
  meltingPoint = 1211.40;
  bolingPoint = 1720.85;
}


export class Arsenic extends AbstractElement {
  name = ElementName.ARSENIC;
  number = 33;
  atomicSymbol = 'As';
  hardons = [
    ...new Array(33).fill(new Proton()),
    ...new Array(33).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 5];
  group = ElementaryGroup.PNICTOGENS_GROUP;
}

export class Selenium extends AbstractElement {
  name = ElementName.SELENIUM;
  number = 34;
  atomicSymbol = 'Se';
  hardons = [
    ...new Array(34).fill(new Proton()),
    ...new Array(34).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 6];
  group = ElementaryGroup.CHALCOGENS_GROUP;
  meltingPoint = 494;
  bolingPoint = 958;
}

export class Bromine extends AbstractElement {
  name = ElementName.BORMINE;
  number = 35;
  atomicSymbol = 'Br';
  hardons = [
    ...new Array(35).fill(new Proton()),
    ...new Array(35).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 7];
  group = ElementaryGroup.HALOGEN;
  meltingPoint = 265.8;
  bolingPoint = 332;
}

export class Krypton extends AbstractElement {
  name = ElementName.KRYPTON;
  number = 36;
  atomicSymbol = 'Kr';
  hardons = [
    ...new Array(36).fill(new Proton()),
    ...new Array(36).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 8];
  group = ElementaryGroup.NOBLE_GAS;
  meltingPoint = 115.78;
  bolingPoint = 119.93;
}


export class Rubidium extends AbstractElement {
  name = ElementName.RUBIDIUM;
  number = 37;
  atomicSymbol = 'Rb';
  hardons = [
    ...new Array(37).fill(new Proton()),
    ...new Array(37).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 8, 1];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 312.45;
  bolingPoint = 961;
}


export class Strontium extends AbstractElement {
  name = ElementName.STRONTIUM;
  number = 38;
  atomicSymbol = 'Sr';
  hardons = [
    ...new Array(38).fill(new Proton()),
    ...new Array(38).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 8, 2];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 1050;
  bolingPoint = 1650;
}

export class Yttrium extends AbstractElement {
  name = ElementName.YTTRIUM;
  number = 39;
  atomicSymbol = 'Y';
  hardons = [
    ...new Array(39).fill(new Proton()),
    ...new Array(39).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 9, 2];
  group = ElementaryGroup.GROUP3;
  meltingPoint = 1799;
  bolingPoint = 3203;
}


export class Zirconium extends AbstractElement {
  name = ElementName.ZIRCONIUM;
  number = 40;
  atomicSymbol = 'Zr';
  hardons = [
    ...new Array(40).fill(new Proton()),
    ...new Array(40).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 10, 2];
  group = ElementaryGroup.GROUP4;
  meltingPoint = 2128;
  bolingPoint = 4650;
}

export class Niobium extends AbstractElement {
  name = ElementName.NIOBIUM;
  number = 41;
  atomicSymbol = 'Nb';
  hardons = [
    ...new Array(41).fill(new Proton()),
    ...new Array(41).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 12, 1];
  group = ElementaryGroup.GROUP5;
  meltingPoint = 2750;
  bolingPoint = 5017;
}

export class Molybdenum extends AbstractElement {
  name = ElementName.MOLYBDENUM;
  number = 42;
  atomicSymbol = 'Mo';
  hardons = [
    ...new Array(42).fill(new Proton()),
    ...new Array(42).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 13, 1];
  group = ElementaryGroup.GROUP6;
  meltingPoint = 2896;
  bolingPoint = 4912;
}

export class Technetium extends AbstractElement {
  name = ElementName.TECHNETIUM;
  number = 43;
  atomicSymbol = 'Tc';
  hardons = [
    ...new Array(43).fill(new Proton()),
    ...new Array(43).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 13, 2];
  group = ElementaryGroup.GROUP7;
  meltingPoint = 2430;
  bolingPoint = 4538;
}

export class Ruthenium extends AbstractElement {
  name = ElementName.RUTHENIUM;
  number = 44;
  atomicSymbol = 'Ru';
  hardons = [
    ...new Array(44).fill(new Proton()),
    ...new Array(44).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 15, 1];
  group = ElementaryGroup.GROUP8;
  meltingPoint = 2607;
  bolingPoint = 4423;
}

export class Rhodium extends AbstractElement {
  name = ElementName.RHODIUM;
  number = 45;
  atomicSymbol = 'Rh';
  hardons = [
    ...new Array(45).fill(new Proton()),
    ...new Array(45).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 16, 2];
  group = ElementaryGroup.GROUP9;
  meltingPoint = 2237;
  bolingPoint = 3968;
}

export class Palladium extends AbstractElement {
  name = ElementName.PALLADIUM;
  number = 46;
  atomicSymbol = 'Pd';
  hardons = [
    ...new Array(46).fill(new Proton()),
    ...new Array(46).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 18];
  group = ElementaryGroup.GROUP10;
  meltingPoint = 1828.05;
  bolingPoint = 2830.82;
}

export class Silver extends AbstractElement {
  name = ElementName.TECHNETIUM;
  number = 47;
  atomicSymbol = 'Ag';
  hardons = [
    ...new Array(47).fill(new Proton()),
    ...new Array(47).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 18, 1];
  group = ElementaryGroup.GROUP7;
  meltingPoint = 1234.93;
  bolingPoint = 2435;
}

export class Cadmium extends AbstractElement {
  name = ElementName.CADMIUM;
  number = 48;
  atomicSymbol = 'Cd';
  hardons = [
    ...new Array(48).fill(new Proton()),
    ...new Array(48).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 18, 2];
  group = ElementaryGroup.GROUP12;
  meltingPoint = 594.22;
  bolingPoint = 1040;
}

export class Indium extends AbstractElement {
  name = ElementName.INDIUM;
  number = 49;
  atomicSymbol = 'In';
  hardons = [
    ...new Array(49).fill(new Proton()),
    ...new Array(49).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 18, 3];
  group = ElementaryGroup.BORON_GROUP;
  meltingPoint = 429.7485;
  bolingPoint = 2345;
}

export class Tin extends AbstractElement {
  name = ElementName.TIN;
  number = 50;
  atomicSymbol = 'Sn';
  hardons = [
    ...new Array(50).fill(new Proton()),
    ...new Array(50).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 18, 4];
  group = ElementaryGroup.CARBON_GROUP;
  meltingPoint = 505.08;
  bolingPoint = 2875;
}

export class Antimony extends AbstractElement {
  name = ElementName.ANTIMONY;
  number = 51;
  atomicSymbol = 'Sb';
  hardons = [
    ...new Array(51).fill(new Proton()),
    ...new Array(51).fill(new Neutron()),
  ];
  electrons = [2, 8, 18, 18, 5];
  group = ElementaryGroup.PNICTOGENS_GROUP;
  meltingPoint = 903.78;
  bolingPoint = 1908;
}
