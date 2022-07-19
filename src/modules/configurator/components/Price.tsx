import React from "react";
import { useRecoilValue } from "recoil";
import { configuratorSelectors } from "../state/selectors";

export const Price: React.FC = () => {
  const totalPrice = useRecoilValue(configuratorSelectors.totalPriceState)
  return (
    <section>
      <p>{totalPrice}</p>
    </section>
  );
};
