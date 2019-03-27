function bubbleSort(array, step, setBubbleArray, bubbleLength) {
  let newArray = array.slice();
  console.log('array', array);
  console.log('step', step);
  console.log('bubbleLength', bubbleLength);
  if (newArray[step] > newArray[step + 1]) {
    let temp = newArray[step];
    newArray[step] = newArray[step + 1];
    newArray[step + 1] = temp;
    setBubbleArray(newArray);
  }
  return newArray;
}

export default bubbleSort;
