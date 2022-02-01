import { reverseWords } from "./reverseWords";

describe("reverseWords function", () => {
  it('should return "elbuod  secaps" when pass "double  spaces"', () => {
    expect(reverseWords("double  spaces")).toBe("elbuod secaps");
  });
  it('should return "ehT kciuq nworb xof spmuj revo eht yzal .god" when pass "The quick brown fox jumps over the lazy dog."', () => {
    expect(reverseWords("The quick brown fox jumps over the lazy dog.")).toBe(
      "ehT kciuq nworb xof spmuj revo eht yzal .god"
    );
  });
});
