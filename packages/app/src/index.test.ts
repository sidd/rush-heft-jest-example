import { app } from "./index";

describe("util", () => {
  it("returns the correct value", () => {
    expect(app()).toBe(true);
  });
});
