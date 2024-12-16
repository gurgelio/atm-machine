import type { AvailableBankNote } from "./config.js";

export const substitutions: Partial<
  Record<AvailableBankNote, AvailableBankNote[]>
> = {
  200: [100, 100],
  100: [50, 50],
  50: [20, 20, 10],
  20: [10, 10],
  10: [5, 5],
};
