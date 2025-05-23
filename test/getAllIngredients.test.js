const getAllIngredients = require("../src/getAllIngredients");

describe("getAllIngredients", () => {
  test("should return 8 for the example input", () => {
    const input = [
      3,
      "tomato mozzarella ham bacon",
      "tomato pineapple ham mozzarella cream",
      "cream pepper mushroom",
    ];
    expect(getAllIngredients(input)).toBe(8);
  });

  test("should return 0 when there are no recipes", () => {
    const input = [0];
    expect(getAllIngredients(input)).toBe(0);
  });

  test("should count ingredients correctly when all recipes have the same ingredients", () => {
    const input = [2, "tomato mozzarella", "tomato mozzarella"];
    expect(getAllIngredients(input)).toBe(2);
  });

  test("should count distinct ingredients ignoring duplicates within one recipe", () => {
    const input = [2, "tomato tomato mozzarella", "mozzarella ham ham"];
    expect(getAllIngredients(input)).toBe(3);
  });

  test("should work with one recipe only", () => {
    const input = [1, "tomato mozzarella ham bacon"];
    expect(getAllIngredients(input)).toBe(4);
  });

  test("should handle empty strings as recipes", () => {
    const input = [3, "", "tomato", ""];
    expect(getAllIngredients(input)).toBe(1);
  });
});
