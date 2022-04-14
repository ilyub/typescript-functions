import { Accumulator2 } from "@/Accumulator2";
import * as a from "@/array";

test("get", () => {
  const accumulator = new Accumulator2<string, string, unknown>([
    ["a", "x", [1, 2]],
    ["b", "y", [3]]
  ]);

  expect(accumulator.get("a", "x")).toStrictEqual([1, 2]);
  expect(accumulator.get("b", "y")).toStrictEqual([3]);
  expect(accumulator.get("c", "z")).toStrictEqual([]);
});

test("push", () => {
  const accumulator = new Accumulator2<string, string, number>();

  const expected = [
    ["a", "x", [1, 2]],
    ["a", "y", [3]],
    ["b", "z", [4]]
  ];

  accumulator.push("a", "x", 1);
  accumulator.push("a", "x", 2);
  accumulator.push("a", "y", 3);
  accumulator.push("b", "z", 4);
  expect(a.fromIterable(accumulator)).toStrictEqual(expected);
});

test("unshift", () => {
  const accumulator = new Accumulator2<string, string, number>();

  const expected = [
    ["a", "x", [2, 1]],
    ["a", "y", [3]],
    ["b", "z", [4]]
  ];

  accumulator.unshift("a", "x", 1);
  accumulator.unshift("a", "x", 2);
  accumulator.unshift("a", "y", 3);
  accumulator.unshift("b", "z", 4);
  expect(a.fromIterable(accumulator)).toStrictEqual(expected);
});