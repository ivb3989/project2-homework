import { moveZeroes } from "./moveZeros";

describe("moveZeroes function", () => {
  it('should return [false,1,1,2,1,3,"a",0,0]', () => {
    expect(moveZeroes([false, 1, 0, 1, 2, 0, 1, 3, "a"])).toStrictEqual([false,1,1,2,1,3,"a",0,0,]);
  });
});
