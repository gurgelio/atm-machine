import { number, select } from "@inquirer/prompts";
import { generateGreedySolutions } from "./greedy-algorithm.js";
import type { Solution } from "./solution.js";

export async function getWithdrawalAmount() {
  const response = await number({
    message: "Qual valor deseja sacar?",
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
    required: true,
  });

  if (response == null) throw "Withdrawal value must be valid";
  return response;
}

export function sortSolutions(solutions: Solution[]) {
  return solutions.toSorted(
    (a, b) => a.bankNotesAmount() - b.bankNotesAmount(),
  );
}

const withdrawalValue = await getWithdrawalAmount();
const choices = generateGreedySolutions(withdrawalValue);

if (choices.length === 0) throw "No solutions found";

const selectedSolution = await select({
  message: "Escolha quais notas deseja sacar:",
  choices: sortSolutions(choices).map((choice) => ({
    name: choice.toString(),
    value: choice,
  })),
});

console.log(selectedSolution.bankNotes);
