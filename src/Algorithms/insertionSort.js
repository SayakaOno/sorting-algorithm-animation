function insertionSort(array) {
  let counter = 1;
  let newArray = array.slice();
  while (counter < newArray.length) {
    for (let i = 0; i < counter; i++) {
      if (newArray[counter] < newArray[i]) {
        newArray.splice(i, 0, newArray.splice(counter, 1)[0]);
      }
    }
    counter++;
  }
}

export default insertionSort;
