# Blocks

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
import { Photon, UpQuark } from 'blocks';

const photon = new Photo();

const up = new UpQuark();

const bosons = getBosons(up); // [Gluon, PositiveWBoson, NegativeWBoson, ZBoson]
```

## Forces 

Electromagnetic
Weak force
Strong force (chromodynamic)

## Spin

The spin of a particle

## Elements 

The atoms of our reality

```ts
import { Oxygen } from 'blocks';

const oxygen = new Oxygen();

console.log(oxygen.symbol, oxygen.hardons, oxygen.electrons, oxygen.electronShells, oxygen.meltingPoint, oxygen.boilingPoint)

```

## Charge 

```ts
import { Proton, Neutron, Carbon } from 'blocks';

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
import { Proton, Electron, oppositeMatter } from 'blocks';

const antiMatter = oppositeMatter(new Proton()); // AntiProton
const antiMatter = oppositeMatter(new Electron()); // Positron
```

# Idea

```ts
import { Oxygen, Neutron, Proton } from 'blocks';

const element = new Oxygen();

console.log(element.constructor); // [Function Oxygen]
element.addHardon(new Neutron());

console.log(element.contructor, element.symbol); // [Function Oxygen] 9O

element.addHardon(new Proton());
console.log(element.constructor, element.symbol); // [Function Fluorine] F

```
