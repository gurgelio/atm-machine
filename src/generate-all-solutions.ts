import { AVAILABLE_BANK_NOTES as defaultAvailableBankNotes } from "./config.ts";
import type { Solution } from "./solution.ts";

/**
 * @deprecated dangerous after 1000
 */
export function generateAllSolutions(
  partialSolution: Solution,
  availableBankNotes = [...defaultAvailableBankNotes],
) {
  if (partialSolution.isValid()) return [partialSolution]; // this solution is already valid;

  const currentBankNote = availableBankNotes.pop();
  if (currentBankNote == null) return []; // reached the end but found no valid solution in this branch

  const foundSolutions: Solution[] = [
    ...generateAllSolutions(partialSolution.clone(), [...availableBankNotes]), // find solutions ignoring currentBankNote
  ];

  while (
    partialSolution.sum() + currentBankNote <=
      partialSolution.withdrawalValue
  ) {
    foundSolutions.push(
      ...generateAllSolutions(partialSolution.add(currentBankNote).clone(), [
        ...availableBankNotes,
      ]),
    );
  }

  return foundSolutions;
}
