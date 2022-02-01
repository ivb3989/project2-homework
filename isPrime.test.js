import { isPrime } from './isPrime';

describe('isPrime function', () => {
  it('should return true when pass 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('should return true when pass 75', () => {
    expect(isPrime(75)).toBe(false);
  });

  it('should return true when pass 1', () => {
    expect(isPrime(1)).toBe(false);
  });

  it('should return true when pass 75', () => {
    expect(isPrime(75)).toBe(false);
  });

  it('should return true when pass -1', () => {
    expect(isPrime(-1)).toBe(false);
  });
});

