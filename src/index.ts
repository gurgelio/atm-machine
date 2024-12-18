import { number, select } from "@inquirer/prompts";
import { findSolutions } from "./find-solutions.ts";
import type { Solution } from "./solution.ts";

await main();

async function main() {
  const withdrawalValue = await getWithdrawalAmount();

  const choices = findSolutions(withdrawalValue);
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
  const sortedChoices = choices.sort(
    (a, b) => a.bankNotesAmount() - b.bankNotesAmount(),
  );

  return await select({
    message: "Escolha quais notas deseja sacar:",
    choices: sortedChoices.map((choice) => ({
      name: choice.toString(),
      value: choice,
    })),
  });
}
