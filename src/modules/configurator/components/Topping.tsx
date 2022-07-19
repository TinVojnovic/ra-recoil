import React from "react";
import { ToppingsInfo } from "modules/configurator";
import { useSetRecoilState } from "recoil";
import { configuratorAtoms } from "../state/atoms";

export const Topping: React.FC<ToppingsInfo> = ({ name, price }) => {
  const setValue = useSetRecoilState(configuratorAtoms.toppingsState)

  function handle(e:React.ChangeEvent<HTMLInputElement>){
    let isChecked = e.target.checked;
    console.log({name: name, price: price, isChecked: isChecked})
    let topping = 

    if(isChecked){
      setValue([...{name: name, price: price, isChecked: true}])
    }
  }

  return (
    <li>
      <label htmlFor={name}>
        {name} {price}
      </label>
      <input type="checkbox" name={name} id={name} onChange={e => handle(e)} />
    </li>
  );
};
