import { expect } from "jsr:@std/expect";
import { describe, it } from "jsr:@std/testing/bdd";
import { Solution } from "../src/solution.ts";

describe("Solution", () => {
  it("toString", () => {
    const solution = new Solution(100).add(50).add(20);

    expect(solution.toString()).toEqual("1x R$50, 1x R$20");
  });

  describe("clone", () => {
    it("object is different", () => {
      const solution = new Solution(100);
      const clone = solution.clone();

      expect(clone).not.toBe(solution);
    });

    it("bankNotes are different", () => {
      const solution = new Solution(100);
      const clone = solution.clone();

      expect(solution.bankNotes).not.toBe(clone.bankNotes);
    });
  });

  describe("isValid", () => {
    it("valid", () => {
      const solution = new Solution(340).add(200).add(100).add(20).add(20);

      expect(solution.isValid()).toBeTruthy();
    });

    it("under expected value", () => {
      const solution = new Solution(340).add(200).add(100).add(20);

      expect(solution.isValid()).toBeFalsy();
    });

    it("above expected value", () => {
      const solution = new Solution(340).add(200).add(200).add(20).add(20);

      expect(solution.isValid()).toBeFalsy();
    });
  });

  describe("sum", () => {
    it("zero", () => {
      const solution = new Solution(300);

      expect(solution.sum()).toBe(0);
    });

    it("all bank notes", () => {
      const solution = new Solution(300)
        .add(200)
        .add(100)
        .add(50)
        .add(20)
        .add(10)
        .add(5)
        .add(2);

      expect(solution.sum()).toBe(387);
    });
  });

  describe("highestBankNote", () => {
    it("from empty", () => {
      const solution = new Solution(300);

      expect(solution.highestBankNote()).toBeNull();
    });

    it("from two", () => {
      const solution = new Solution(300).add(2).add(50);

      expect(solution.highestBankNote()).toBe(50);
    });
  });

  describe("bankNotesAmount", () => {
    it("from zero", () => {
      const solution = new Solution(195);

      expect(solution.bankNotesAmount()).toBe(0);
    });

    it("from one", () => {
      const solution = new Solution(195).add(20);

      expect(solution.bankNotesAmount()).toBe(1);
    });

    it("from two", () => {
      const solution = new Solution(195).add(20).add(2);

      expect(solution.bankNotesAmount()).toBe(2);
    });
  });

  describe("add", () => {
    it("from zero", () => {
      const solution = new Solution(100).add(50);

      expect(solution.bankNotes[50]).toBe(1);
    });

    it("from one", () => {
      const solution = new Solution(100).add(50).add(50);

      expect(solution.bankNotes[50]).toBe(2);
    });

    it("a different bank note", () => {
      const solution = new Solution(100).add(50).add(100);

      expect(solution.bankNotes[100]).toBe(1);
    });
  });

  describe("remove", () => {
    it("from zero", () => {
      const solution = new Solution(100).remove(50);

      expect(solution.bankNotes[50]).toBe(0);
    });

    it("from one", () => {
      const solution = new Solution(100).add(50).remove(50);

      expect(solution.bankNotes[50]).toBe(0);
    });

    it("from two", () => {
      const solution = new Solution(100).add(50).add(50);
      solution.remove(50);

      expect(solution.bankNotes[50]).toBe(1);
    });
  });
});
