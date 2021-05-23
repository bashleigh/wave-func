import { Carbon, ElementaryGroup, ElementName, Oxygen } from "../elements";
import { Neutron, Proton } from "../hardons";

describe('Elements', () => {
  it('Abstract Element has helpful properties', () => {
    const element = new Oxygen();

    expect(element.atomicSymbol).toBe('O');
    expect(element.symbol).toBe('O');
    expect(element.electrons).toStrictEqual([2, 6]);
    expect(element.electronShells).toBe(2);
    expect(element.charge).toBe(0);
    expect(element.stable).toBeTruthy();
    expect(element.group).toBe(ElementaryGroup.CHALCOGENS_GROUP);
    expect(element.name).toBe(ElementName.OXYGEN);
    expect(element.number).toBe(8);
  });

  it('Extra neutron doesn\'t affect charge', () => {
    const carbon = new Carbon();

    carbon.addHardon(new Neutron);

    expect(carbon.stable).toBeTruthy();
  });

  it('Adding extra Proton affects charge', () => {
    const carbon = new Carbon();

    carbon.addHardon(new Proton);

    expect(carbon.stable).toBeFalsy();
  });
});
