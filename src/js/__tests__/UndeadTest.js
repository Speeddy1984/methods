import Undead from "../Undead";

test("test Undead", () => {
  const result = new Undead("Victor", "Undead");
  expect(result).toEqual({
    name: "Victor",
    type: "Undead",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
