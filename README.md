# Ψ Func

A TypeScript based relation to the fundimental building blocks of our reality.

I found it difficult to learn the different and difference between the fundimental particles. So I've built a strictly typed package of all of them and how they relate to each other. This is mainly because of the similarly named particles and the same suffix used for all the different types.


## Fermions

### Quarks

name | charge | spin | anti matter
--- | --- | --- | ---
UpQuark | +2/3 | 1/2 | false
DownQuark | -1/3 | 1/2 | false
TopQuark | +2/3 | 1/2 | false
BottomQuark | -1/3 | 1/2 | false
StrangeQuark | -1/3 | 1/2 | false
CharmQuark | +2/3 | 1/2 | false
CharmQuark | +2/3 | 1/2 | false
AntiUpQuark | -2/3 | 1/2 | false
AntiDownQuark | +1/3 | 1/2 | false
AntiTopQuark | -2/3 | 1/2 | false
AntiBottomQuark | +1/3 | 1/2 | false
AntiStrangeQuark | +1/3 | 1/2 | false
AntiCharmQuark | -2/3 | 1/2 | false
AntiCharmQuark | -2/3 | 1/2 | false

### Leptons

name | charge | spin | anti matter
--- | --- | --- | ---
Electron | -1 | 1/2 | false
Positron | +1 | 1/2 | true
ElectronNeutrino | 0 | 1/2 | false
ElectronAntiNeutrino | 0 | 1/2 | true
Muon | -1 | 1/2 | false
AntiMuon | +1 | 1/2 | true
Tau | -1 | 1/2 | false
AntiTau | +1 | 1/2 | true
TauNeutrino | -1 | 1/2 | false
AntiTauNeutrino | 0 | 1/2 | true
MuonNeutrino | 0 | 1/2 | false
AntiMuonNeutrino | 0 | 1/2 | true

## Bosons

'Communication' or 'transfer' particles that interact with applied forced

name | Forces | Scalar
--- | --- | ---
Photon | Electromagnetic | false
Gluon | Strong force | false
ZBoson | Weak force | false
PositiveWBoson | Weak force | false
NegativeWBoson | Weak force | false
Higgs Boson | | true

```ts
import { Photon, UpQuark } from 'wave-func';

const photon = new Photo();

const up = new UpQuark();

const bosons = getBosons(up); // [Gluon, PositiveWBoson, NegativeWBoson, ZBoson]
```

## Forces 

- Electromagnetic
- Weak force
- Strong force (chromodynamic)

## Spin

The spin of a particle

## Elements 

The atoms of our reality

```ts
import { Oxygen } from 'wave-func';

const oxygen = new Oxygen();

console.log(oxygen.symbol, oxygen.hardons, oxygen.electrons, oxygen.electronShells, oxygen.meltingPoint, oxygen.boilingPoint)

```

### Properties

Property | Purpose | Example value
--- | --- | ---
element.electrons | The amount of electrons charged to atom. In shells | `[2, 8, 8, 2]`
element.electronShells | The number of electron shells on an atm | `4`
element.name | The name of the element from `ElementName` enum | `Calcium`
element.number | The atomic number of the element (number of protons considered neutral) | `20`
element.atomicSymbol | The symbol given to the atomic structure | `Ca`
element.symbol | The atomic symbol and the sub of the element's proton count if required | `21Ca`
element.group | The atomic group of the element | `Alkalin metals`
element.meltingPoint | The melting point of the element in kelvin | `1115`
element.boilingPoint | The boiling point of the element in kelvin | `1757`
element.hardons | An array of hardon particles in the nucleus | `[[Function Proton], [Function Neutron]]` (not a helpful example)
element.charge | The overall charge of the element (sum of proton charge, neutron charge and electron charge) | `0` `1`
element.overallChargeStatus | The overall charge of the element: positive or negative | `negative`
element.stable | A boolean of the overall atom's charge | `true`


### Functions

#### addHardon

Adds a hardon particle to the nucleus which will change the overall atom's charge, stability and symbol output.

```ts
const element = new Oxygen();

console.log(element.symbol); // O
console.log(element.charge); // 0
console.log(element.stable); // true

element.addHardon(new Proton());

console.log(element.symbol); // 9O
console.log(element.charge); // 1
console.log(element.stable); // false
```

> Eventually I want to be able to change the element's atomic name and prototype based on the overall protons/neutrons in the hardon array (nucleus)


## Charge 

```ts
import { Proton, Neutron, Carbon } from 'wave-func';

const proton = new Proton();
const neutron = new Neutron();

console.log(proton.charge); // 1
console.log(neutron.charge); // 0

const carbon = new Carbon();

console.log(carbon.charge); // 0

carbon.addHardon(new Proton());
console.log(carbon.charge); // 1
```

## Anti matter

```ts
import { Proton, Electron, oppositeMatter } from 'wave-func';

const antiMatter = oppositeMatter(new Proton()); // AntiProton
const antiMatter = oppositeMatter(new Electron()); // Positron
```

# Idea

```ts
import { Oxygen, Neutron, Proton } from 'wave-func';

const element = new Oxygen();

console.log(element.constructor); // [Function Oxygen]
element.addHardon(new Neutron());

console.log(element.contructor, element.symbol); // [Function Oxygen] 9O

element.addHardon(new Proton());
console.log(element.constructor, element.symbol); // [Function Fluorine] F

```
