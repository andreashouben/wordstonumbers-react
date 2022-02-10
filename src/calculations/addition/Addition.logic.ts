export const splitNumber = (val: number) => {
  return val
    .toFixed()
    .split("")
    .map((c) => Number(c));
};

export const crossfoots = (val: number, cf: number[] = []): number[] => {
  if (val < 10) {
    return cf;
  }
  const sum = splitNumber(val).reduce((a, b) => a + b);
  return crossfoots(sum, [...cf, val]);
};
