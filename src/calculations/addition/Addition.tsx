import React from "react";
import { crossfoots, splitNumber } from "./Addition.logic";

type AdditionProps = { digits: number[] };

const renderCalculation = (val: number[] | number) => {
  const digits = typeof val === "number" ? splitNumber(val) : val;
  const calc = digits.join(" + ");
  const sum = digits.reduce((a, b) => a + b);
  return `${calc} = ${sum}`;
};

export const Addition = ({ digits }: AdditionProps) => {
  if (digits.length === 0) {
    return null;
  }

  const calc = digits.join(" + ");
  const sum = digits.reduce((a, b) => a + b);

  let crossfoots1 = crossfoots(sum);
  let cfText = "";
  if (crossfoots1.length == 1) {
    cfText = `(QS: ${renderCalculation(crossfoots1[0])})`;
  } else if (crossfoots1.length > 1) {
    const sums = crossfoots1.map((cf) => renderCalculation(cf)).join("; ");
    cfText = `(Iter. QS: ${sums})`;
  }

  return <>{`${calc} = ${sum} ${cfText}`}</>;
};
