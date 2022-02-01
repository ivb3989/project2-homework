export const transformState = (state, transforms) => {
  transforms.forEach((element) => {
    if (element.operation == "addProperties") {
      state = { ...state, ...element.properties };
    } else if (element.operation == "clear") {
      const props = Object.getOwnPropertyNames(state);
      for (let i = 0; i < props.length; i++) {
        delete state[props[i]];
      }
    } else if (element.operation == "removeProperties") {
      for (let i = 0; i < element.properties.length; i++) {
        delete state[element.properties[i]];
      }
    }
  });
  return state;
};
