export const calculateRentalCost = (days) => {
  const price = 40;
  const total = days * price;
  const saleFor3AndMore = 20;
  const saleFor7AndMore = 50;

  if (days < 3) {
    return total;
  } else if (days >= 3 && days < 7) {
    return total - saleFor3AndMore;
  }

  return total - saleFor7AndMore;
 
};
