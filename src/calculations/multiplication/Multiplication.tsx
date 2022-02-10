import React from "react";
import { splitNumber } from "../addition/Addition.logic";

type MultiplicationProps = { digits: number[] };
const renderCalculation = (val: number[] | number) => {
  const digits = typeof val === "number" ? splitNumber(val) : val;
  const calc = digits.join(" * ");
  const sum = digits.reduce((a, b) => a * b);
  return `${calc} = ${sum}`;
};
export const Multiplication = ({ digits }: MultiplicationProps) => {
  return <>{renderCalculation(digits)}</>;
};
