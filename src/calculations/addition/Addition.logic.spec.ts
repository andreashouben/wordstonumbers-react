import { crossfoots } from "./Addition.logic";

describe("AdditionLogic", () => {
  it("should return empty array if there are no crossfeet", () => {
    expect(crossfoots(1)).toHaveLength(0);
  });

  it("should return 10 for 10", () => {
    expect(crossfoots(10)).toContain(10);
  });

  it("should return [99,18] for 99", () => {
    expect(crossfoots(99)).toEqual([99, 18]);
  });

  it("should return [78,15] for 78", () => {
    expect(crossfoots(78)).toEqual([78, 15]);
  });
});
