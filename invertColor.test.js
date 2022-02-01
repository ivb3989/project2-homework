import { invertColor } from "./invertColor";

describe("invertColor function", () => {
  it("should return '#ffffff' when pass '#000000'", () => {
    expect(invertColor("#000000")).toBe("#ffffff");
  });
  it("should return '#221155' when pass '#DDEEAA'", () => {
    expect(invertColor("#DDEEAA")).toBe("#221155");
  });
  it("should return '#fedcba' when pass '#DDEEAA'", () => {
    expect(invertColor("#012345")).toBe("#fedcba");
  });
});
