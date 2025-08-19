import React from "react";
import "./Sunglass.css";
import Watch from "../Watch/Watch";
import {
  add,
  multiply,
  devideThefirstNumberByTheSecondNumber as devide,
} from "../../../utilities/Calculate";
// import add from "../../../utilities/Calculate";

const sunglass = () => {
  const first = 45;
  const second = 55;
  const sum = add(first, second);
  const mult = multiply(first, second);
  const vaag = devide(first, second);

  return <div></div>;
};

export default sunglass;
