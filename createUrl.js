export const createUrl = (string, obj) => {
  const matches = string.match(/{[a-zA-Z]+?}/g);
  if (matches) {
    matches.forEach((template) => {
      const key = template.replace(/{|}/g, "");
      string = string.replace(template, obj[key]);
    });
    return string;
  }
};
