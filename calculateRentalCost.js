export const calculateRentalCost = (days) => {
    return days < 3 ? days*40 : days >= 7 ? days*40-50 : days*40-20;
}
