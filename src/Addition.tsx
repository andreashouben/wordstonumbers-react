import React from "react";

type AdditionProps = { digits: number[] };

const renderCalculation = (digits: number[]) => {
  const calc = digits.join(" + ");
  const sum = digits.reduce((a, b) => a + b);
  return `${calc} = ${sum}`;
};

const splitNumber = (val: number) => {
  return val
    .toFixed()
    .split("")
    .map((c) => Number(c));
};

export const Addition = ({ digits }: AdditionProps) => {
  if (digits.length === 0) {
    return null;
  }

  const calc = digits.join(" + ");
  const sum = digits.reduce((a, b) => a + b);
  const crossfoots = [];

  return (
    <div className="row">
      <div className="two columns">Addition:</div>
      <div className="ten columns"> {`${calc} = ${sum} ${crossfoot}`}</div>
    </div>
  );
};
