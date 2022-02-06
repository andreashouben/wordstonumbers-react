import { NumberOption } from "./NumberMappingRadio";
import { useNumberMapping } from "./logic";

describe("mapword", () => {
  it.each([
    [[0], "a", "A0"],
    [[1], "1", "A0"],
    [[1], "b", "A0"],
    [[1], "a", "A1"],
    [[2], "b", "A1"],
    [[0], " ", "A1"],
    [[1, 1], "AA", "A1"],
    [[1, 26], "AZ", "A1"],
    [[0, 25], "AZ", "A0"],
    [[25, 0], "AZ", "A25"],
    [[26, 1], "AZ", "A26"],
    [[1, 1], "1Z", "A26"],
  ])(
    "should return a list containing %j given word %s and mapping %s",
    (map, word, mapping) => {
      expect(useNumberMapping(word, mapping as NumberOption)).toEqual(map);
    }
  );
});
