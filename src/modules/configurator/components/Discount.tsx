import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { configuratorAtoms } from "../state/atoms";

export const Discount: React.FC = () => {
  const [discount, setDiscount] = useState(0);
  const setValue = useSetRecoilState(configuratorAtoms.discountState);
  const getValue = useRecoilValue(configuratorAtoms.discountState)

  function onClick(){
    setValue(discount)
    console.log(getValue)
  }

  return (
    <section>
      <label htmlFor="discount">Discount</label>
      <input
        onChange={(e) => setDiscount(Number(e.currentTarget.value))}
        value={discount}
        type="number"
        name="discount"
        id="discount"
      />
      <button onClick={() => onClick()}>Add discount</button>
    </section>
  );
};
