export const invertColor = (color) => {
  return `#${(0xffffff ^ parseInt(color.substring(1), 16)).toString(16)}`;
};
