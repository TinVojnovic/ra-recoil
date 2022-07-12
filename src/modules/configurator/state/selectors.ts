import { selector } from "recoil";
import { configuratorAtoms } from "./atoms";

const totalPriceState = selector({
  key: "configurator.pizza.totalPrice",
  get: ({ get }) => {
    const toppings = get(configuratorAtoms.toppingsState);
    const size = get(configuratorAtoms.sizeState);
    const discount = get(configuratorAtoms.discountState);
    let sum: number = 0;

    const toppingsPrices = toppings.map((topping) => {
      sum += topping.price;
    });

    return (sum + size) * (discount / 100);
  },
});
