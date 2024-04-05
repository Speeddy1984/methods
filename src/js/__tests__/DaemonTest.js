import Daemon from "../Daemon";

test("test Daemon", () => {
  const result = new Daemon("Olga", "Daemon");
  expect(result).toEqual({
    name: "Olga",
    type: "Daemon",
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});
