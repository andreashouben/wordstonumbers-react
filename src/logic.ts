import { NumberOption } from "./NumberMappingRadio";

export const useNumberMapping = (word: string, option: NumberOption) => {
  const valueMap = {
    A0: (value: number) => value - 97,
    A1: (value: number) => value - 96,
    A26: (value: number) => 123 - value,
    A25: (value: number) => 122 - value,
  };
  return word
    .split("")
    .map((char) => char.toLocaleLowerCase())
    .map((char) => {
      return char.match(/\d/)
        ? Number(char)
        : char.match(/[a-z]/)
        ? valueMap[option](char.charCodeAt(0))
        : 0;
    });
};
