export const openOrSenior = (list) => {
  return list.map((element) =>
    element[0] >= 40 && element[1] > 15 ? "Senior" : "Open"
  );
};
