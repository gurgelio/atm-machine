import { availableBankNotes as defaultAvailableBankNotes } from "./config.js";
import type { Solution } from "./solution.js";

/**
 * @deprecated dangerous after 1000
 */
export function generateAllChoices(
  partialSolution: Solution,
  availableBankNotes = [...defaultAvailableBankNotes],
) {
  if (partialSolution.isValid()) return [partialSolution]; // this solution is already valid;

  const currentBankNote = availableBankNotes.pop();
  if (currentBankNote == null) return []; // reached the end but found no valid solution in this branch

  const foundSolutions: Solution[] = [
    ...generateAllChoices(partialSolution.clone(), [...availableBankNotes]), // find solutions ignoring currentBankNote
  ];

  while (
    partialSolution.sum() + currentBankNote <=
    partialSolution.withdrawalValue
  ) {
    foundSolutions.push(
      ...generateAllChoices(partialSolution.add(currentBankNote).clone(), [
        ...availableBankNotes,
      ]),
    );
  }

  return foundSolutions;
}
