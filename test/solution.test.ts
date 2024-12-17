import assert from "node:assert";
import { describe, test } from "node:test";
import { Solution } from "../src/solution.js";

describe("Solution", () => {
  test("toString", () => {
    const solution = new Solution(100).add(50).add(20);

    assert.equal(solution.toString(), "1x R$50, 1x R$20");
  });

  describe("clone", () => {
    test("object is different", () => {
      const solution = new Solution(100);
      const clone = solution.clone();

      assert.notEqual(solution, clone);
    });

    test("bankNotes are different", () => {
      const solution = new Solution(100);
      const clone = solution.clone();

      assert.notEqual(solution.bankNotes, clone.bankNotes);
    });
  });

  describe("isValid", () => {
    test("valid", () => {
      const solution = new Solution(340).add(200).add(100).add(20).add(20);

      assert.ok(solution.isValid());
    });

    test("under expected value", () => {
      const solution = new Solution(340).add(200).add(100).add(20);

      assert.equal(solution.isValid(), false);
    });

    test("above expected value", () => {
      const solution = new Solution(340).add(200).add(200).add(20).add(20);

      assert.equal(solution.isValid(), false);
    });
  });

  describe("sum", () => {
    test("zero", () => {
      const solution = new Solution(300);

      assert.equal(solution.sum(), 0);
    });

    test("all bank notes", () => {
      const solution = new Solution(300)
        .add(200)
        .add(100)
        .add(50)
        .add(20)
        .add(10)
        .add(5)
        .add(2);

      assert.equal(solution.sum(), 387);
    });
  });

  describe("highestBankNote", () => {
    test("from empty", () => {
      const solution = new Solution(300);

      assert.equal(solution.highestBankNote(), null);
    });

    test("from two", () => {
      const solution = new Solution(300).add(2).add(50);

      assert.equal(solution.highestBankNote(), 50);
    });
  });

  describe("bankNotesAmount", () => {
    test("from zero", () => {
      const solution = new Solution(195);

      assert.equal(solution.bankNotesAmount(), 0);
    });

    test("from one", () => {
      const solution = new Solution(195).add(20);

      assert.equal(solution.bankNotesAmount(), 1);
    });

    test("from two", () => {
      const solution = new Solution(195).add(20).add(2);

      assert.equal(solution.bankNotesAmount(), 2);
    });
  });

  describe("add", () => {
    test("from zero", () => {
      const solution = new Solution(100).add(50);

      assert.equal(solution.bankNotes[50], 1);
    });

    test("from one", () => {
      const solution = new Solution(100).add(50).add(50);

      assert.equal(solution.bankNotes[50], 2);
    });

    test("a different bank note", () => {
      const solution = new Solution(100).add(50).add(100);

      assert.equal(solution.bankNotes[100], 1);
    });
  });

  describe("remove", () => {
    test("from zero", () => {
      const solution = new Solution(100).remove(50);

      assert.equal(solution.bankNotes[50], 0);
    });

    test("from one", () => {
      const solution = new Solution(100).add(50).remove(50);

      assert.equal(solution.bankNotes[50], 0);
    });

    test("from two", () => {
      const solution = new Solution(100).add(50).add(50);
      solution.remove(50);

      assert.equal(solution.bankNotes[50], 1);
    });
  });
});
