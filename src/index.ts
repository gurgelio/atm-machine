import { number, select } from "@inquirer/prompts";
import { generateSolutions } from "./greedy-algorithm.js";
import type { Solution } from "./solution.js";

main();

async function main() {
  const withdrawalValue = await getWithdrawalAmount();

  const choices = generateSolutions(withdrawalValue);
  if (choices.length === 0) {
    console.log("Nenhuma combinação encontrada para este valor!");
    return;
  }

  const selectedSolution = await getSelectedSolution(choices);

  console.log(selectedSolution.bankNotes);
}

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

export async function getSelectedSolution(choices: Solution[]) {
  return await select({
    message: "Escolha quais notas deseja sacar:",
    choices: choices
      .toSorted((a, b) => a.bankNotesAmount() - b.bankNotesAmount())
      .map((choice) => ({
        name: choice.toString(),
        value: choice,
      })),
  });
}
