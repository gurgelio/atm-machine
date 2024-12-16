import {
  type AvailableBankNote,
  availableBankNotes,
  maximumChoices,
} from "./config.js";
import { Solution } from "./solution.js";

const sortedBankNotes = availableBankNotes.toSorted((a, b) => b - a);

export function generateGreedySolutions(withdrawalValue: number): Solution[] {
  const solutions = [];
  let currentSolution = greedyAlgorithm(
    new Solution(withdrawalValue),
    sortedBankNotes,
  );

  while (solutions.length < maximumChoices) {
    if (currentSolution?.isValid()) solutions.push(currentSolution.clone());
    const highestNote = currentSolution.highestBankNote();

    currentSolution = greedyAlgorithm(
      currentSolution.remove(highestNote),
      sortedBankNotes.filter((bankNote) => bankNote !== highestNote),
    );
  }

  return solutions;
}

function greedyAlgorithm(
  partialSolution: Solution,
  availableBankNotes: readonly AvailableBankNote[],
) {
  const bankNote = availableBankNotes[0];
  if (bankNote == null || partialSolution.isValid()) return partialSolution;

  while (partialSolution.sum() + bankNote <= partialSolution.withdrawalValue)
    partialSolution.add(bankNote);

  return greedyAlgorithm(partialSolution, availableBankNotes.slice(1));
}
