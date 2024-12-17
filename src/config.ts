export const availableBankNotes = [2, 5, 10, 20, 50, 100, 200] as const;
export type AvailableBankNote = (typeof availableBankNotes)[number];

export const currency = "R$";

export const maximumChoices = 3;
