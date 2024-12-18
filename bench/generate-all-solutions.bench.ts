import { generateAllSolutions } from "../src/generate-all-solutions.ts";
import { Solution } from "../src/solution.ts";

const values = [
  10,
  20,
  50,
  100,
  200,
  300,
  350,
  400,
  500,
  // 1000, // error: RangeError: Maximum call stack size exceeded
];

for (const i of values) {
  Deno.bench({
    group: "generate all solutions",
    name: `for ${i}`,
    baseline: true,
    fn: () => {
      generateAllSolutions(new Solution(i));
    },
  });
}
