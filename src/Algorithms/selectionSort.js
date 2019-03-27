function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let temp = array[i];
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

export default selectionSort;
