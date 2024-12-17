import {
  type AvailableBankNote,
  availableBankNotes,
  currency,
} from "./config.js";

export class Solution {
  public withdrawalValue: number;
  public bankNotes = availableBankNotes.reduce(
    (obj, note) => ({ ...obj, [note]: 0 }),
    {},
  ) as Record<AvailableBankNote, number>;

  constructor(withdrawalValue: number) {
    this.withdrawalValue = withdrawalValue;
  }

  /**
   * determines if solutions are identical
   * @returns boolean
   */
  equals(other: Solution) {
    for (const key of availableBankNotes) {
      if (other.bankNotes[key] !== this.bankNotes[key]) return false;
    }
    return true;
  }

  /**
   *
   * @returns human readable string
   */
  toString() {
    return Object.entries(this.bankNotes)
      .filter(([, bankNoteAmount]) => bankNoteAmount > 0)
      .toSorted(
        ([bankNoteA], [bankNoteB]) =>
          Number.parseInt(bankNoteB) - Number.parseInt(bankNoteA),
      )
      .map(
        ([bankNote, bankNoteAmount]) =>
          `${bankNoteAmount}x ${currency}${bankNote}`,
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
  add(bankNote: AvailableBankNote) {
    this.bankNotes[bankNote] += 1;
    return this;
  }

  /**
   * removes a bank note from the combination
   * @param bankNote the bank note to be removed
   * @returns itself for method chaining
   */
  remove(bankNote: AvailableBankNote) {
    if (this.bankNotes[bankNote] === 0) return this;
    this.bankNotes[bankNote] -= 1;
    return this;
  }

  /**
   * determines if this combination is a valid solution
   * @returns boolean
   */
  isValid() {
    return this.sum() === this.withdrawalValue;
  }

  /**
   *
   * @returns the highest bank note used in this solution
   */
  highestBankNote() {
    let highestNote: AvailableBankNote | null = null;
    for (const [bankNote, amount] of Object.entries(this.bankNotes)) {
      if (amount === 0) continue;
      highestNote = Math.max(
        Number.parseInt(bankNote),
        highestNote ?? 0,
      ) as AvailableBankNote;
    }
    return highestNote;
  }

  /**
   *
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
