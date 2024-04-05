import Zombie from "../Zombie";

test("test Zombie", () => {
  const result = new Zombie("Eugen", "Zombie");
  expect(result).toEqual({
    name: "Eugen",
    type: "Zombie",
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});
