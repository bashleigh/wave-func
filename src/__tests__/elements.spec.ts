import { ElementaryGroup, ElementName, Oxygen } from "../elements";

describe('Elements', () => {
  it('Abstract Element has helpful properties', () => {
    const element = new Oxygen();

    expect(element.atomicSymbol).toBe('O');
    expect(element.symbol).toBe('O');
    expect(element.electrons).toStrictEqual([2, 6]);
    expect(element.electronShells).toBe(2);
    expect(element.stable).toBeTruthy();
    expect(element.group).toBe(ElementaryGroup.CHALCOGENS_GROUP);
    expect(element.charge).toBe(0);
    expect(element.name).toBe(ElementName.OXYGEN);
    expect(element.number).toBe(8);
  });
});
