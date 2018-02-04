import whoAmI from "../testable";

describe("whoAmI", () => {
  it("returns who it is", () => {
    expect(whoAmI()).toEqual({name: "Testable"});
  });
});
