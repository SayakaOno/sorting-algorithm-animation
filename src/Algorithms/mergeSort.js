function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let right = array.slice();
  let left = right.splice(0, Math.floor(right.length / 2));
  left = mergeSort(left);
  right = mergeSort(right);

  let newArray = [];
  while (left.length > 0 || right.length > 0) {
    if (left[0] > right[0]) {
      newArray.push(right.shift());
    } else {
      newArray.push(left.shift());
    }
  }
  if (left.length > 0) {
    newArray.push(...left);
  } else {
    newArray.push(...right);
  }
  return newArray;
}

export default mergeSort;
