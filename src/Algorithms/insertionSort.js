function insertionSort(
  array,
  counter1,
  i1,
  setInsertionArray,
  setInsertionCounter,
  ms
) {
  let counter = counter1;
  let newArray = array.slice();
  let i = i1;

  return function() {
    let id = setInterval(() => {
      if (counter < newArray.length) {
        if (i < counter) {
          if (newArray[counter] < newArray[i]) {
            newArray.splice(i, 0, newArray.splice(counter, 1)[0]);
            setInsertionArray(newArray);
            console.log(newArray);
            i = 0;
          } else {
            if (i + 1 === counter) {
              i = 0;
            } else {
              i++;
              setInsertionCounter({ i, counter });
              return;
            }
          }
        }
        if (i === 0 && counter + 1 === newArray.length) {
          clearInterval(id);
          return;
        } else {
          counter++;
        }
        setInsertionCounter({ i, counter });
      }
    }, ms);
  };
}

export default insertionSort;
