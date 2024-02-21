import { writable } from "svelte/store";
type Customer = {
  name: string;
  highlighted: boolean;
};
export const customers = writable([
  { name: "Joe Smoe", highlighted: false },
  { name: "Chaim", highlighted: false },
]);
