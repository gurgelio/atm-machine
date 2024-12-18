import { AVAILABLE_BANK_NOTES, DEFAULT_CURRENCY } from "./config.ts";

export class Solution {
  public withdrawalValue: number | bigint;
  public bankNotes = {} as Record<number, number>;

  constructor(withdrawalValue: number | bigint) {
    this.withdrawalValue = withdrawalValue;
  }

  /**
   * determines if solutions are identical
   * @returns boolean
   */
  equals(other: Solution) {
    for (const key of AVAILABLE_BANK_NOTES) {
      if (other.bankNotes[key] !== this.bankNotes[key]) return false;
    }
    return true;
  }

  /**
   * @returns human readable string
   */
  toString() {
    return Object.entries(this.bankNotes)
      .filter(([, bankNoteAmount]) => bankNoteAmount > 0)
      .sort(
        ([bankNoteA], [bankNoteB]) =>
          Number.parseInt(bankNoteB) - Number.parseInt(bankNoteA),
      )
      .map(
        ([bankNote, bankNoteAmount]) =>
          `${bankNoteAmount}x ${DEFAULT_CURRENCY}${bankNote}`,
      )
      .join(", ");
  }

  /**
   * creates a deep copy of this Solution
   */
  clone() {
    const cloned = new Solution(this.withdrawalValue);
    cloned.bankNotes = { ...this.bankNotes };

    return cloned;
  }

  /**
   * @returns the number of bank notes used in the solution currently
   */
  bankNotesAmount() {
    return Object.values(this.bankNotes).reduce((acc, curr) => acc + curr, 0);
  }

  /**
   * adds a bank note to the combination
   * @param bankNote the bank note to be added
   * @returns itself for method chaining
   */
  add(bankNote: number) {
    if (this.bankNotes[bankNote] == null) this.bankNotes[bankNote] = 0;

    this.bankNotes[bankNote] += 1;
    return this;
  }

  /**
   * removes a bank note from the combination
   * @param bankNote the bank note to be removed
   * @returns itself for method chaining
   */
  remove(bankNote: number) {
    if (this.bankNotes[bankNote] == null) this.bankNotes[bankNote] = 0;
    if (this.bankNotes[bankNote] === 0) return this;

    this.bankNotes[bankNote] -= 1;
    return this;
  }

  /**
   * determines if this combination is a valid solution
   * @returns boolean
   */
  isValid() {
    return this.sum() == this.withdrawalValue;
  }

  /**
   * @returns the highest bank note used in this solution
   */
  highestBankNote() {
    let highestNote: number | null = null;
    for (const [bankNote, amount] of Object.entries(this.bankNotes)) {
      if (amount === 0) continue;
      highestNote = Math.max(
        Number.parseInt(bankNote),
        highestNote ?? 0,
      );
    }
    return highestNote;
  }

  /**
   * @returns the monetary sum
   */
  sum() {
    let sum = 0;

    for (const [bankNote, bankNoteAmount] of Object.entries(this.bankNotes)) {
      sum += Number.parseInt(bankNote) * bankNoteAmount;
    }
    return sum;
  }
}
