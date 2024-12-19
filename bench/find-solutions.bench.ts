import { findSolutions } from "../src/find-solutions.ts";
import humanFormat from "human-format";

const values = [
  1_000,
  10_000,
  100_000,
  1_000_000,
  10_000_000,
  100_000_000,
  1_000_000_000,
];

const solutions = [1, 10, 100];

for (const i of values) {
  for (const j of solutions) {
    Deno.bench({
      group: `[BRL] find ${j}`,
      name: `for ${humanFormat(i)}`,
      baseline: true,
      fn: () => {
        findSolutions(i, j);
      },
    });
  }
}

const ZIMBABWEAN_BANK_NOTES = [
  10_000,
  20_000,
  50_000,
  100_000,
  500_000,
  // millions
  1_000_000,
  10_000_000,
  50_000_000,
  100_000_000,
  200_000_000,
  500_000_000,
  // billions
  1_000_000_000,
  5_000_000_000,
  10_000_000_000,
  20_000_000_000,
  50_000_000_000,
  // trillions
  10_000_000_000_000,
  20_000_000_000_000,
  50_000_000_000_000,
  100_000_000_000_000,
].sort();

const zimbabweanValues = [
  1_000_000_000_0, // US$ 0,01
  1_000_000_000_000, // US$ 1
  1_000_000_000_000_000, // US$ 1_000
  10_000_000_000_000_000n, // US$ 10_000
  1_000_000_000_000_000_000n, // US$ 1_000_000
  10_000_000_000_000_000_000n, // US$ 10_000_000
  100_000_000_000_000_000_000n, // US$ 100_000_000
];

for (const i of zimbabweanValues) {
  for (const j of solutions) {
    Deno.bench({
      group: `[ZWL] find ${j}`,
      name: `for ${humanFormat(Number(i))}`,
      baseline: true,
      fn: () => {
        findSolutions(i, j, ZIMBABWEAN_BANK_NOTES);
      },
    });
  }
}
