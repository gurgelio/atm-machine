import { generateAllSolutions } from "../src/generate-all-solutions.ts";
import { Solution } from "../src/solution.ts";

Deno.bench({
  name: "find all solutions for 10",
  baseline: true,
  fn: () => {
    generateAllSolutions(new Solution(10));
  },
});

Deno.bench({
  name: "find all solutions for 20",
  fn: () => {
    generateAllSolutions(new Solution(20));
  },
});

Deno.bench({
  name: "find all solutions for 50",
  fn: () => {
    generateAllSolutions(new Solution(50));
  },
});

Deno.bench({
  name: "find all solutions for 100",
  fn: () => {
    generateAllSolutions(new Solution(100));
  },
});

Deno.bench({
  name: "find all solutions for 500",
  fn: () => {
    generateAllSolutions(new Solution(500));
  },
});

Deno.bench({
  name: "find all solutions for 1_000",
  ignore: true,
  fn: () => {
    generateAllSolutions(new Solution(1_000));
  },
});
