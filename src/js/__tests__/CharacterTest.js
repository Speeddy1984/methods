import Character from "../Character";
import Daemon from "../Daemon";

test("test Character with valid arguments", () => {
  const result = new Character("Olga", "Daemon");
  expect(result).toEqual({
    name: "Olga",
    type: "Daemon",
    health: 100,
    level: 1,
  });
});

test("test Character with empty name", () => {
  expect(() => new Character("", "Daemon")).toThrowError(
    "Имя не является строкой или длина имени меньше 2 или больше 10 символов"
  );
});

test("test Character with non-string name", () => {
  expect(() => new Character(123, "Daemon")).toThrowError(
    "Имя не является строкой или длина имени меньше 2 или больше 10 символов"
  );
});

test("test Character with long name", () => {
  expect(() => new Character("LooooooongName", "Daemon")).toThrowError(
    "Имя не является строкой или длина имени меньше 2 или больше 10 символов"
  );
});

test("test Character with short name", () => {
  expect(() => new Character("x", "Daemon")).toThrowError(
    "Имя не является строкой или длина имени меньше 2 или больше 10 символов"
  );
});

test("test Character with invalid type", () => {
  expect(() => new Character("Ivan", "Programmer")).toThrowError(
    "Неверный тип персонажа"
  );
});

test("test LevelUp with null health", () => {
  const result = new Daemon("Olga", "Daemon");
  result.health = 0;

  expect(() => result.levelUp()).toThrowError("Нельзя повысить левел умершего");
});

test("test damage with null health", () => {
  const result = new Daemon("Olga", "Daemon");
  result.health = 0;

  expect(() => result.damage(20)).toThrowError("Нельзя повысить левел умершего");
});

test("test levelUp() method", () => {
  const result = new Daemon("Olga", "Daemon");
  result.health = 100;

  console.log(result);

  result.levelUp();

  expect(result.level).toBe(2);
  expect(result.attack).toBe(12);
  expect(result.defence).toBe(48);
  expect(result.health).toBe(100);
});

test("test damage(points) method", () => {
  const result = new Daemon("Olga", "Daemon");
  result.health = 100;

  result.damage(20);

  expect(result.health).toBeCloseTo(88);
});