import { findSolutions } from "../src/find-solutions.ts";

const BANK_NOTES = [
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

Deno.bench({
  group: "[ZWL] find 3",
  name: "for 1 billion",
  baseline: true,
  fn: () => {
    findSolutions(1_000_000_000, 3, BANK_NOTES);
  },
});

Deno.bench({
  group: "[ZWL] find 3",
  name: "for 1 quadrillion", // US$ 1_000
  fn: () => {
    findSolutions(1_000_000_000_000_000, 3, BANK_NOTES);
  },
});

Deno.bench({
  group: "[ZWL] find 3",
  name: "for 10 quadrillion", // US$ 10_000
  fn: () => {
    findSolutions(10_000_000_000_000_000n, 3, BANK_NOTES);
  },
});

Deno.bench({
  group: "[ZWL] find 3",
  name: "for 1 quintillion", // US$ 1_000_000
  fn: () => {
    findSolutions(1_000_000_000_000_000_000n, 3, BANK_NOTES);
  },
});

Deno.bench({
  group: "[ZWL] find 3",
  name: "for 10 quintillion", // US$ 10_000_000
  fn: () => {
    findSolutions(10_000_000_000_000_000_000n, 3, BANK_NOTES);
  },
});

Deno.bench({
  group: "[ZWL] find 3",
  name: "for 100 quintillion", // US$ 100_000_000
  fn: () => {
    findSolutions(100_000_000_000_000_000_000n, 3, BANK_NOTES);
  },
});
