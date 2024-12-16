import { number, select } from "@inquirer/prompts";
import { maximumChoices } from "./config.js";
import { greedyAlgorithm } from "./greedy-algorithm.js";
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

export function sanitizeGeneratedSolutions(solutions: Solution[]) {
  return solutions
    .toSorted((a, b) => a.bankNotesAmount() - b.bankNotesAmount())
    .slice(0, maximumChoices);
}

const withdrawalValue = await getWithdrawalAmount();
const choices = greedyAlgorithm(withdrawalValue);
const selectedSolution = await select({
  message: "Escolha quais notas deseja sacar:",
  choices: sanitizeGeneratedSolutions(choices).map((choice) => ({
    name: choice.toString(),
    value: choice,
  })),
});

console.log(`found ${choices.length} solutions`);
console.log(selectedSolution.bankNotes);
