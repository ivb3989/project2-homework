import { calculateRentalCost } from "./calculateRentalCost";

describe("calculateRentalCost function", () => {
  it("should return 80 when pass 2", () => {
    expect(calculateRentalCost(2)).toBe(80);
  });
  it("should return 80 when pass 3", () => {
    expect(calculateRentalCost(3)).toBe(100);
  });
  it("should return 80 when pass 7", () => {
    expect(calculateRentalCost(7)).toBe(230);
  });
});
