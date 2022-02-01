export const isPrime = (num) => {
  if (isNaN(num) || num % 1 !== 0) {
    return false;
  }
  num = Math.abs(num);

  if (num === 0 || num === 1) {
    return false;
  }

  return [...Array(num - 2)].map((_, element) => element + 2).filter((element) => num % element === 0).length === 0;
};
