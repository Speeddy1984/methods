import Magician from "../Magician";

test("test Magician", () => {
  const result = new Magician("Gena", "Magician");
  expect(result).toEqual({
    name: "Gena",
    type: "Magician",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
