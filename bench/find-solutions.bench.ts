import { findSolutions } from "../src/find-solutions.ts";

Deno.bench({
  group: "[BRL] find 1",
  name: "for 100",
  baseline: true,
  fn: () => {
    findSolutions(100, 1);
  },
});

Deno.bench({
  group: "[BRL] find 1",
  name: "for 1_000",
  fn: () => {
    findSolutions(1_000, 1);
  },
});

Deno.bench({
  group: "[BRL] find 1",
  name: "for 10_000",
  fn: () => {
    findSolutions(10_000, 1);
  },
});

Deno.bench({
  group: "[BRL] find 1",
  name: "for 100_000",
  fn: () => {
    findSolutions(100_000, 1);
  },
});

Deno.bench({
  group: "[BRL] find 1",
  name: "for 1_000_000",
  fn: () => {
    findSolutions(1_000_000, 1);
  },
});

Deno.bench({
  group: "[BRL] find 1",
  name: "for 10_000_000",
  fn: () => {
    findSolutions(10_000_000, 1);
  },
});

Deno.bench({
  group: "[BRL] find 1",
  name: "for 100_000_000",
  fn: () => {
    findSolutions(100_000_000, 1);
  },
});

Deno.bench({
  group: "[BRL] find 10",
  name: "for 100",
  baseline: true,
  fn: () => {
    findSolutions(100, 10);
  },
});

Deno.bench({
  group: "[BRL] find 10",
  name: "for 1000",
  fn: () => {
    findSolutions(1_000, 10);
  },
});

Deno.bench({
  group: "[BRL] find 10",
  name: "for 10_000",
  fn: () => {
    findSolutions(10_000, 10);
  },
});

Deno.bench({
  group: "[BRL] find 10",
  name: "for 100_000",
  fn: () => {
    findSolutions(100_000, 10);
  },
});

Deno.bench({
  group: "[BRL] find 10",
  name: "for 1_000_000",
  fn: () => {
    findSolutions(1_000_000, 10);
  },
});

Deno.bench({
  group: "[BRL] find 10",
  name: "for 10_000_000",
  fn: () => {
    findSolutions(10_000_000, 10);
  },
});

Deno.bench({
  group: "[BRL] find 10",
  name: "for 100_000_000",
  fn: () => {
    findSolutions(100_000_000, 10);
  },
});

Deno.bench({
  group: "[BRL] find 100",
  name: "for 1_000",
  fn: () => {
    findSolutions(1_000, 100);
  },
});

Deno.bench({
  group: "[BRL] find 100",
  name: "for 10_000",
  fn: () => {
    findSolutions(10_000, 100);
  },
});

Deno.bench({
  group: "[BRL] find 100",
  name: "for 100_000",
  fn: () => {
    findSolutions(100_000, 100);
  },
});

Deno.bench({
  group: "[BRL] find 100",
  name: "for 1_000_000",
  fn: () => {
    findSolutions(1_000_000, 100);
  },
});

Deno.bench({
  group: "[BRL] find 100",
  name: "for 10_000_000",
  fn: () => {
    findSolutions(10_000_000, 100);
  },
});

Deno.bench({
  group: "[BRL] find 100",
  name: "for 100_000_000",
  fn: () => {
    findSolutions(100_000_000, 100);
  },
});
