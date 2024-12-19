import {
  AVAILABLE_BANK_NOTES,
  type AvailableBankNote,
  DEFAULT_MAXIMUM_CHOICES,
} from "./config.ts";
import { Solution } from "./solution.ts";

/**
 * Finds different combinations of bank notes for the given withdrawalValue through the {@link https://en.wikipedia.org/wiki/Greedy_algorithm | greedy algorithm}.
 *
 * @param withdrawalValue the amount of money to be withdrawn from the atm
 * @param [maximumChoices=DEFAULT_MAXIMUM_CHOICES] maximum choices to be returned (less makes it significantly faster)
 * @param [bankNotes=AVAILABLE_BANK_NOTES.slice()] an array of valid bank notes
 * @returns an array of Solution, with max length defined by maximumChoices
 */
export function findSolutions(
  withdrawalValue: number | bigint,
  maximumChoices = DEFAULT_MAXIMUM_CHOICES,
  bankNotes = AVAILABLE_BANK_NOTES.slice(),
): Solution[] {
  const solutions: Solution[] = [];
  const sortedBankNotes = bankNotes.sort((a, b) => b - a);

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
  availableBankNotes: AvailableBankNote[],
) {
  const bankNote = availableBankNotes[0];
  if (bankNote == null || partialSolution.isValid()) return partialSolution;

  while (partialSolution.sum() + bankNote <= partialSolution.withdrawalValue) {
    partialSolution.add(bankNote);
  }

  return solve(partialSolution, availableBankNotes.slice(1));
}
