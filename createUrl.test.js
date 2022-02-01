import { createUrl } from "./createUrl";

describe("createUrl function", () => {
  it("should return '/api/0' when pass '/api/{id}', {id: 0}", () => {
    expect(createUrl("/api/{id}", { id: 0 })).toBe("/api/0");
  });
  it("should return '/api/undefined' when pass '/api/{id}', {name: 'Petya'}", () => {
    expect(createUrl("/api/{id}", { name: "Petya" })).toBe("/api/undefined");
  });
  it("should return '/api/items/0' when pass '/api/{list}/{id}', {list: 'items', id: 0}", () => {
    expect(
      createUrl("/api/{list}/{id}", { list: "items", id: 0 }, { id: 0 })
    ).toBe("/api/items/0");
  });
});
