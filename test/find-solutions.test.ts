import assert from "node:assert";
import { describe, test } from "node:test";
import { findSolutions } from "../src/find-solutions.js";

describe("findSolutions", { skip: true }, () => {
  for (const i of Array.from(Array(1000).keys()))
    test(i.toString(), () => {
      const solutions = findSolutions(i);

      assert.ok(solutions.length > 0);
    });
});
