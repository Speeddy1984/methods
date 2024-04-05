import Bowerman from "../Bowerman";

test("test Bowerman", () => {
  const result = new Bowerman("Ivan", "Bowerman");
  expect(result).toEqual({
    name: "Ivan",
    type: "Bowerman",
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});
