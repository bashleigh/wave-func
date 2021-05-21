import { Neutron, Proton } from "../hardons";
import { Hardon } from "../types";

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
}

export interface Element {
  hardons: Hardon[];
  electrons: number[];
  name: ElementName;
  symbol: string;
  meltingPoint?: number;
  bolingPoint?: number;
  group: ElementaryGroup;
  number: number;
}

export class Hydrogen implements Element {
  name = ElementName.HYDROGEN;
  number = 1;
  symbol = 'H';
  hardons = [
    new Proton(),
  ];
  electrons = [1];
  group = ElementaryGroup.HYDROGEN;
  meltingPoint = 13.99;
  bolingPoint = 20.271;
}

export class Helium implements Element {
  name = ElementName.HELIUM;
  number = 2;
  symbol = 'He';
  hardons = [
    ...new Array(2).fill(new Proton()),
    ...new Array(2).fill(new Neutron()),
  ];
  electrons = [2];
  group = ElementaryGroup.NOBLE_GAS;
  meltingPoint = .95;
  bolingPoint = 4.222;
}

export class Lithium implements Element {
  name = ElementName.LITHIUM;
  number = 3;
  symbol = 'Li';
  hardons = [
    ...new Array(3).fill(new Proton()),
    ...new Array(3).fill(new Neutron()),
  ];
  electrons = [2, 1];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 453.65;
  bolingPoint = 1603;
}

export class Beryllium implements Element {
  name = ElementName.BERYLLIUM;
  number = 4;
  symbol = 'Be';
  hardons = [
    ...new Array(4).fill(new Proton()),
    ...new Array(4).fill(new Neutron()),
  ];
  electrons = [2, 2];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 1560;
  bolingPoint = 2742;
}

export class Boron implements Element {
  name = ElementName.BORON;
  number = 5;
  symbol = 'B';
  hardons = [
    ...new Array(5).fill(new Proton()),
    ...new Array(5).fill(new Neutron()),
  ];
  electrons = [2, 3];
  group = ElementaryGroup.BORON_GROUP;
  meltingPoint = 2349;
  bolingPoint = 4200;
}

export class Carbon implements Element {
  name = ElementName.CARBON;
  number = 6;
  symbol = 'C';
  hardons = [
    ...new Array(6).fill(new Proton()),
    ...new Array(6).fill(new Neutron()),
  ];
  electrons = [2, 4];
  group = ElementaryGroup.CARBON_GROUP;
}

export class Nitrogen implements Element {
  name = ElementName.NITROGEN;
  number = 7;
  symbol = 'N';
  hardons = [
    ...new Array(7).fill(new Proton()),
    ...new Array(7).fill(new Neutron()),
  ];
  electrons = [2, 5];
  group = ElementaryGroup.PNICTOGENS_GROUP;
  bolingPoint = 77.355;
  meltingPoint = 63.23;
}

export class Oxygen implements Element {
  name = ElementName.OXYGEN;
  number = 8;
  symbol = 'O';
  hardons = [
    ...new Array(8).fill(new Proton()),
    ...new Array(8).fill(new Neutron()),
  ];
  electrons = [2, 6];
  group = ElementaryGroup.CHALCOGENS_GROUP;
  meltingPoint = 54.36;
  bolingPoint = 90.188;
}

export class Fluorine implements Element {
  name = ElementName.FLUORINE;
  number = 9;
  symbol = 'F';
  hardons = [
    ...new Array(9).fill(new Proton()),
    ...new Array(9).fill(new Neutron()),
  ];
  electrons = [2, 7];
  group = ElementaryGroup.HALOGEN;
  meltingPoint = 53.48;
  bolingPoint = 85.03;
}

export class Neon implements Element {
  name = ElementName.NEON;
  number = 10;
  symbol = 'Ne';
  hardons = [
    ...new Array(10).fill(new Proton()),
    ...new Array(10).fill(new Neutron()),
  ];
  electrons = [2, 8];
  group = ElementaryGroup.NOBLE_GAS;
  meltingPoint = 24.56;
  bolingPoint = 27.104;
}

export class Sodium implements Element {
  name = ElementName.SODIUM;
  number = 11;
  symbol = 'Na';
  hardons = [
    ...new Array(11).fill(new Proton()),
    ...new Array(11).fill(new Neutron()),
  ];
  electrons = [2, 8, 1];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 370.944;
  bolingPoint = 1156.09;
}

export class Magnesium implements Element {
  name = ElementName.MAGNESIUM;
  number = 12;
  symbol = 'Mg';
  hardons = [
    ...new Array(12).fill(new Proton()),
    ...new Array(12).fill(new Neutron()),
  ];
  electrons = [2, 8, 2];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 923;
  bolingPoint = 1363;
}

export class Aluminium implements Element {
  name = ElementName.ALUMINIUM;
  number = 13;
  symbol = 'Al';
  hardons = [
    ...new Array(13).fill(new Proton()),
    ...new Array(13).fill(new Neutron()),
  ];
  electrons = [2, 8, 3];
  group = ElementaryGroup.BORON_GROUP;
  meltingPoint = 933.47;
  bolingPoint = 2743;
}

export class Silicon implements Element {
  name = ElementName.SILICON;
  number = 14;
  symbol = 'Si';
  hardons = [
    ...new Array(14).fill(new Proton()),
    ...new Array(14).fill(new Neutron()),
  ];
  electrons = [2, 8, 4];
  group = ElementaryGroup.CARBON_GROUP;
  meltingPoint = 1687;
  bolingPoint = 3538;
}

export class Phosphorus implements Element {
  name = ElementName.PHOSPHORUS;
  number = 15;
  symbol = 'P';
  hardons = [
    ...new Array(15).fill(new Proton()),
    ...new Array(15).fill(new Neutron()),
  ];
  electrons = [2, 8, 5];
  group = ElementaryGroup.PNICTOGENS_GROUP;
  meltingPoint = 317.3;
  bolingPoint = 553.7;
}

export class Sulfur implements Element {
  name = ElementName.SULFUR;
  number = 16;
  symbol = 'S';
  hardons = [
    ...new Array(16).fill(new Proton()),
    ...new Array(16).fill(new Neutron()),
  ];
  electrons = [2, 8, 6];
  group = ElementaryGroup.CHALCOGENS_GROUP;
  meltingPoint = 388.36;
  bolingPoint = 717.8;
}

export class Chlorine implements Element {
  name = ElementName.CHLORINE;
  number = 17;
  symbol = 'Cl';
  hardons = [
    ...new Array(17).fill(new Proton()),
    ...new Array(17).fill(new Neutron()),
  ];
  electrons = [2, 8, 7];
  group = ElementaryGroup.HALOGEN;
  meltingPoint = 171.6;
  bolingPoint = 239.11;
}

export class Argon implements Element {
  name = ElementName.ARGON;
  number = 18;
  symbol = 'Ar';
  hardons = [
    ...new Array(18).fill(new Proton()),
    ...new Array(18).fill(new Neutron()),
  ];
  electrons = [2, 8, 8];
  group = ElementaryGroup.NOBLE_GAS;
  meltingPoint = 83.81;
  bolingPoint = 87.302;
}

export class Potassium implements Element {
  name = ElementName.POTASSIUM;
  number = 19;
  symbol = 'K';
  hardons = [
    ...new Array(19).fill(new Proton()),
    ...new Array(19).fill(new Neutron()),
  ];
  electrons = [2, 8, 8, 1];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 336.7;
  bolingPoint = 1032;
}

export class Calcium implements Element {
  name = ElementName.CALCIUM;
  number = 20;
  symbol = 'Ca';
  hardons = [
    ...new Array(20).fill(new Proton()),
    ...new Array(20).fill(new Neutron()),
  ];
  electrons = [2, 8, 8, 2];
  group = ElementaryGroup.ALKALIN_METAL;
  meltingPoint = 1115;
  bolingPoint = 1757;
}

export class Scandium implements Element {
  name = ElementName.SCANDIUM;
  number = 21;
  symbol = 'Sc';
  hardons = [
    ...new Array(21).fill(new Proton()),
    ...new Array(21).fill(new Neutron()),
  ];
  electrons = [2, 8, 9, 2];
  group = ElementaryGroup.GROUP3;
  meltingPoint = 1814;
  bolingPoint = 3109;
}


export class Titanium implements Element {
  name = ElementName.TITANIUM;
  number = 22;
  symbol = 'Ti';
  hardons = [
    ...new Array(22).fill(new Proton()),
    ...new Array(22).fill(new Neutron()),
  ];
  electrons = [2, 8, 10, 2];
  group = ElementaryGroup.GROUP4;
  meltingPoint = 1941;
  bolingPoint = 3560;
}

export class Vandaium implements Element {
  name = ElementName.VANADIUM;
  number = 23;
  symbol = 'V';
  hardons = [
    ...new Array(23).fill(new Proton()),
    ...new Array(23).fill(new Neutron()),
  ];
  electrons = [2, 8, 11, 2];
  group = ElementaryGroup.GROUP5;
  meltingPoint = 2183;
  bolingPoint = 3680;
}

export class Chromium implements Element {
  name = ElementName.CHROMIUM;
  number = 24;
  symbol = 'Cr';
  hardons = [
    ...new Array(24).fill(new Proton()),
    ...new Array(24).fill(new Neutron()),
  ];
  electrons = [2, 8, 13, 1];
  group = ElementaryGroup.GROUP6;
  meltingPoint = 2180;
  bolingPoint = 2944;
}

export class Managnese implements Element {
  name = ElementName.MANGANESE;
  number = 25;
  symbol = 'Mn';
  hardons = [
    ...new Array(25).fill(new Proton()),
    ...new Array(25).fill(new Neutron()),
  ];
  electrons = [2, 8, 13, 2];
  group = ElementaryGroup.GROUP7;
  meltingPoint = 1519;
  bolingPoint = 2334;
}

export class Iron implements Element {
  name = ElementName.IRON;
  number = 26;
  symbol = 'Fe';
  hardons = [
    ...new Array(26).fill(new Proton()),
    ...new Array(26).fill(new Neutron()),
  ];
  electrons = [2, 8, 14, 2];
  group = ElementaryGroup.GROUP8;
  meltingPoint = 1811;
  bolingPoint = 3134;
}

export class Colbolt implements Element {
  name = ElementName.COLBOLT;
  number = 27;
  symbol = 'Co';
  hardons = [
    ...new Array(27).fill(new Proton()),
    ...new Array(27).fill(new Neutron()),
  ];
  electrons = [2, 8, 15, 2];
  group = ElementaryGroup.GROUP9;
  meltingPoint = 1768;
  bolingPoint = 3200;
}
