import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { findSolutions } from "../src/find-solutions.ts";

describe("findSolutions", () => {
  for (const i of Array.from(Array(1000).keys()))
    it({
      name: i.toString(),
      ignore: i === 1 || i === 3,
      fn: () => {
        const solutions = findSolutions(i);

        expect(solutions.length).toBeGreaterThan(0);
      },
    });
});
