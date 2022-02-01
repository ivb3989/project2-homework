const ReverseWords = (str) => {
  return str
    .split(/[\s]+/)
    .map((x) => x.split("").reverse().join(""))
    .join(" ");
};
