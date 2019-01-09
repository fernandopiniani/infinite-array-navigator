/**
 * Normalizes any index to stay between 0 (first element) 
 * and n-1 (last element) of an n elements array array.
 * @param {integer} index a raw index number.
 * @param {array} array an array of 1 or more elements.
 */
const normalizeIndex = (index, array) => {
  if (!array.length) throw Error("Empty array is not valid");
  const indexModulus = index % array.length;
  if (indexModulus < 0) {
    return array.length + indexModulus;
  } else {
    return indexModulus;
  }
};

/**
 * Calculates a quantity of elements before and after a given index.
 * @param {integer} index the center element which view will be positioned.
 * @param {integer} quantitiy how many elements will be calculated after and before the relative index.
 */
const relativetNeighbors = (index, quantitiy = 0) => {
  let indexArray = [];
  for (let i = index - quantitiy; i <= index + quantitiy; i++) {
    indexArray.push(i);
  }
  return indexArray;
};

/**
 * @returns an view of original array with position element on center and
 *  limited quantity neighbors using circular logic.
 * @param {array} array 
 * @param {integer} position 
 * @param {integer} limit 
 */
const infinityArrayNavigator = (array, position = 0, limit = 0) =>
    relativetNeighbors(position, limit)
    .map(i => normalizeIndex(i, array))
    .map(i => array[i]);

