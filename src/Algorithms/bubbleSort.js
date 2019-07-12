function bubbleSort(array, step, setBubbleArray, bubbleLength) {
  // console.log(array);
  let newArray = array.slice();
  if (newArray[step] > newArray[step + 1]) {
    let temp = newArray[step];
    newArray[step] = newArray[step + 1];
    newArray[step + 1] = temp;
    setBubbleArray(newArray);
  }
  return newArray;
}

export default bubbleSort;
