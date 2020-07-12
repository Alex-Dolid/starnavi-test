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

export const getRandomInteger = (min, max, exceptions = []) => {

  const _random = () => Math.floor(min + Math.random() * (max + 1 - min));

  let rand = _random();
  // eslint-disable-next-line no-loop-func
  for ( ; exceptions.find(num => rand === num); ) {
    rand = _random();
  }

  return rand;
};
