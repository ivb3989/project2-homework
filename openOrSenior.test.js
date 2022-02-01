import { openOrSenior } from "./openOrSenior";

describe("openOrSenior function", () => {
  it("should return ['Open', 'Senior', 'Open', 'Senior'] when pass [[31, 10],[55,23],[20, 0],[41, 16]]", () => {
    expect(
      openOrSenior([
        [31, 10],
        [55, 23],
        [20, 0],
        [41, 16],
      ])
    ).toStrictEqual(["Open", "Senior", "Open", "Senior"]);
  });
  it("should return ['Open', 'Open', 'Open', 'Open'] when pass [[34, 11],[55,7],[39, 16],[38, 14]]", () => {
    expect(
      openOrSenior([
        [34, 11],
        [55, 7],
        [39, 16],
        [38, 14],
      ])
    ).toStrictEqual(["Open", "Open", "Open", "Open"]);
  });
});
