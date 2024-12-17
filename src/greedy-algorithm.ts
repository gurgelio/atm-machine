import {
  type AvailableBankNote,
  availableBankNotes,
  maximumChoices,
} from "./config.js";
import { Solution } from "./solution.js";

const sortedBankNotes = availableBankNotes.toSorted((a, b) => b - a);

export function generateSolutions(withdrawalValue: number): Solution[] {
  const solutions = [];
  let currentSolution = solve(new Solution(withdrawalValue), sortedBankNotes);

  while (solutions.length < maximumChoices) {
    if (currentSolution.isValid()) solutions.push(currentSolution.clone());
    if (currentSolution.bankNotesAmount() === 0)
      throw "Nenhuma combinação encontrada para este valor!";

    const highestNote = currentSolution.highestBankNote();

    currentSolution = solve(
      currentSolution.remove(highestNote),
      sortedBankNotes.filter((bankNote) => bankNote !== highestNote),
    );
  }

  return solutions;
}

function solve(
  partialSolution: Solution,
  availableBankNotes: readonly AvailableBankNote[],
) {
  const bankNote = availableBankNotes[0];
  if (bankNote == null || partialSolution.isValid()) return partialSolution;

  while (partialSolution.sum() + bankNote <= partialSolution.withdrawalValue)
    partialSolution.add(bankNote);

  return solve(partialSolution, availableBankNotes.slice(1));
}
