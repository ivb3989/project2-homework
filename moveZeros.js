export const moveZeroes = (array) => {
    return array.sort((a, b) => a === 0 && b !== 0 ? 1 : (b === 0 && a !== 0 ? -1 : 0));
};
