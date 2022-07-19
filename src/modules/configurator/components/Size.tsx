import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { configuratorAtoms } from "../state/atoms";

export const Size: React.FC = () => {
  const [size, setSize] = useState("");
  const setValue = useSetRecoilState(configuratorAtoms.sizeState);

  

  return (
    <section>
      <label htmlFor="s">S</label>
      <input type="radio" value={7} id="s" name="size" />
      <label htmlFor="m">M</label>
      <input type="radio" value={10} id="m" name="size" />
      <label htmlFor="l">L</label>
      <input type="radio" value={13} id="l" name="size" />
    </section>
  );
};
