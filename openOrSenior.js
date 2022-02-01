export const openOrSenior = (list) => {
  const appropriateAge = 40;
  const workExperience = 15;

  return list.map((element) =>
    element[0] >= appropriateAge && element[1] > workExperience ? 'Senior' : 'Open',
  );
};
