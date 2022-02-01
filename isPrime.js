export const isPrime = (num) => {
    if (isNaN(num) || num % 1 !== 0) return false;
    num = Math.abs(num);
    if (num === 0 || num === 1) return false;
    return [...Array(num - 2)].map((_, i) => i + 2).filter((i) => num % i == 0).length == 0;
}
