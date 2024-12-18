import {
  type AvailableBankNote,
  availableBankNotes,
  maximumChoices,
} from "./config.ts";
import { Solution } from "./solution.ts";

const sortedBankNotes = availableBankNotes.slice().sort((a, b) => b - a);

/**
 *
 * @param withdrawalValue the amount of money to be withdrawn from the atm
 * @returns an array of Solution, with max length defined by maximumChoices
 */
export function findSolutions(withdrawalValue: number): Solution[] {
  const solutions: Solution[] = [];
  let currentSolution = solve(new Solution(withdrawalValue), sortedBankNotes);

  while (solutions.length < maximumChoices) {
    if (currentSolution.isValid()) solutions.push(currentSolution.clone());

    const highestNote = currentSolution.highestBankNote();
    if (highestNote == null) break; // there are no valid solutions

    currentSolution = solve(
      currentSolution.remove(highestNote),
      sortedBankNotes.filter((bankNote) => bankNote !== highestNote),
    );
    if (solutions.some((s) => s.equals(currentSolution))) break; // found solution already exists
  }

  return solutions;
}

/**
 * tries to find a valid solution from the partialSolution given
 * @param availableBankNotes array of bank notes available to be added
 * @returns the mutated solution
 */
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
