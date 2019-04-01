function selectionSort(
  arra,
  i1,
  j1,
  minIndex,
  setSelectionMinIndex,
  setSelectionArray,
  setSelectionCounter,
  ms
) {
  let fnc = function() {
    let array = arra.slice();
    let length = array.length;
    let i = i1;
    let j = j1;

    return function() {
      if (i < length - 1) {
        if (j < length) {
          j++;
        }
        if (j === length) {
          if (i === length - 2) {
            clearInterval(id);
            return;
          }
          i++;
          j = i + 1;
        }
        setSelectionCounter({ i, j });
      }

      if (i < array.length - 1) {
        if (j < array.length) {
          if (array[minIndex] > array[j]) {
            minIndex = j;
            setSelectionMinIndex(minIndex);
          }
        }
        if (j === array.length - 1) {
          array = swap(array, i, minIndex, setSelectionArray);
          minIndex = i + 1;
        }
      }
    };
  };
  let id = setInterval(fnc(), ms);
}

function swap(array, i, j, setSelectionArray) {
  let newArray = array.slice();
  let temp = newArray[i];
  newArray[i] = newArray[j];
  newArray[j] = temp;
  setSelectionArray(newArray);
  return newArray;
}

export default selectionSort;
