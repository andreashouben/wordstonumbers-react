import React, { ChangeEventHandler, ReactNode } from "react";

export type NumberOption = "A1" | "A0" | "A26" | "A25";

type NumberMappingRadioProps = {
  numberMapping: NumberOption;
  onChange: ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
  children: ReactNode;
};

export function NumberMappingRadio({
  numberMapping,
  onChange,
  checked,
  children,
}: NumberMappingRadioProps) {
  return (
    <>
      <input
        id={numberMapping}
        type="radio"
        value={numberMapping}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={numberMapping}>{children}</label>
    </>
  );
}
