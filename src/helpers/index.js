export const isEmptyArray = array => !Array.isArray(array) || !array.length;

export const isEmptyObj = obj => {
  if (obj && obj.constructor === Object) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  return true;
};
