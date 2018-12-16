import { add } from "../scratch/add";

describe("Verifying jest", () => {
  test("Add function", () => {
    expect(add(2)).toEqual(4);
  });
});