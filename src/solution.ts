import {
  type AvailableBankNote,
  availableBankNotes,
  currency,
} from "./config.js";

export class Solution {
  public withdrawalValue: number;
  private _sum = 0; // cached sum value
  public bankNotes: Partial<
    Record<(typeof availableBankNotes)[number], number>
  > = {};

  constructor(withdrawalValue: number) {
    this.withdrawalValue = withdrawalValue;
  }

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

  clone() {
    const cloned = new Solution(this.withdrawalValue);
    cloned.bankNotes = { ...this.bankNotes };
    cloned._sum = this.sum();

    return cloned;
  }

  bankNotesAmount() {
    return Object.values(this.bankNotes).reduce((acc, curr) => acc + curr, 0);
  }

  add(bankNote: AvailableBankNote) {
    if (this.bankNotes[bankNote] == null) this.bankNotes[bankNote] = 0;
    this.bankNotes[bankNote] += 1;
    this.updateSum();
    return this;
  }

  remove(bankNote: AvailableBankNote) {
    if (this.bankNotes[bankNote] == null || this.bankNotes[bankNote] === 0)
      return this;
    this.bankNotes[bankNote] -= 1;
    this.updateSum();
    return this;
  }

  isValid() {
    return this.sum() === this.withdrawalValue;
  }

  highestBankNote() {
    let highestNote: AvailableBankNote = availableBankNotes[0];
    for (const [bankNote, amount] of Object.entries(this.bankNotes)) {
      if (amount == null || amount === 0) continue;
      highestNote = Math.max(
        Number.parseInt(bankNote),
        highestNote,
      ) as AvailableBankNote;
    }
    return highestNote;
  }

  sum() {
    return this._sum;
  }

  private updateSum() {
    let sum = 0;

    for (const [bankNote, bankNoteAmount] of Object.entries(this.bankNotes)) {
      sum += Number.parseInt(bankNote) * bankNoteAmount;
    }
    this._sum = sum;
  }
}
