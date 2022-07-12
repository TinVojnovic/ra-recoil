import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { configuratorAtoms } from "../state/atoms";

export const Discount: React.FC = () => {
  const [discount, setDiscount] = useState(0);
  const setValue = useSetRecoilState(configuratorAtoms.discountState);

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
      <button onClick={() => setValue(discount)}>Add discount</button>
    </section>
  );
};
