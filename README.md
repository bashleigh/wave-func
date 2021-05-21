# Blocks

A TypeScript based relation to the fundimental building blocks of our reality.


## Fermions

### Quarks

### Leptons

## Bosons

## Forces 

Electromagnetic
Chromodynamic
Weak force
Strong force

## Spin

The spin of a particle

## Elements 

The atoms of our reality

```ts
import { Oxygen } from 'blocks';

const oxygen = new Oxygen();

console.log(oxygen.symbol, oxygen.hardons, oxygen.electrons, oxygen.meltingPoint, oxygen.boilingPoint)

```


# Idea

```ts
import { Oxygen, Neutron } from 'blocks';

const element = new Oxygen();

console.log(element.constructor); // [Function Oxygen]
element.addHardon(new Neutron());

console.log(element.contructor, element.symbol); // [Function Oxygen] 9O

element.addHardon(new Proton());
console.log(element.constructor, element.symbol); // [Function Fluorine] F

```
