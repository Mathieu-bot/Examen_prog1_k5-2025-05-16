const countNearbyZombies = require("../src/countNearbyZombies");

describe("countNearbyZombies", () => {
  test("should return 3 for example input", () => {
    const input = [6, "20 23", "80 80", "-13 -50", "61 79", "60 80", "28 -96"];
    expect(countNearbyZombies(input)).toBe(3);
  });

  test("should return 0 when all zombies are far", () => {
    const input = [3, "100 0", "0 100", "70 70"];
    expect(countNearbyZombies(input)).toBe(1);
  });

  test("should count only those strictly less than 100 meters", () => {
    const input = [4, "70 70", "60 60", "28 -96", "0 99"];
    expect(countNearbyZombies(input)).toBe(3);
  });

  test("should return 0 when there are no zombies", () => {
    const input = [0];
    expect(countNearbyZombies(input)).toBe(0);
  });

  test("should work with negative coordinates", () => {
    const input = [3, "-70 -70", "-50 -50", "-100 -100"];
    expect(countNearbyZombies(input)).toBe(2);
  });

  test("should return correct count when zombies are exactly at 100m", () => {
    const input = [2, "28 -96", "60 80"];
    expect(countNearbyZombies(input)).toBe(0);
  });

  test("should return 1 when only one is in range", () => {
    const input = [3, "10 10", "100 100", "200 200"];
    expect(countNearbyZombies(input)).toBe(1);
  });
});
