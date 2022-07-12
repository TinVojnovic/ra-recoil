import { atom } from "recoil";
import { ToppingsInfo } from "../types";

const toppingsState = atom<ToppingsInfo[]>({
  key: "configurator.pizza.toppings",
  default: [],
});

const discountState = atom<number>({
  key: "configurator.pizza.discount",
  default: 0,
});

const sizeState = atom<number>({
  key: "configurator.pizza.size",
  default: 0,
});

export const configuratorAtoms = { toppingsState, discountState, sizeState };
