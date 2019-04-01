import React, { useState } from 'react';
import Visual from './Visual';
import bubbleSort from '../Algorithms/bubbleSort';
import selectionSort from '../Algorithms/selectionSort';
import insertionSort from '../Algorithms/insertionSort';
const array1 = [5, 1, 2, 3, 4];
const array2 = [5, 4, 3, 2, 1];

const App = () => {
  const [bubbleArray, setBubbleArray] = useState(array1);
  const [bubbleCounter, setBubbleCounter] = useState({
    step: -1,
    length: bubbleArray.length
  });

  const [selectionArray, setSelectionArray] = useState(array1);
  const [selectionCounter, setSelectionCounter] = useState({
    i: 0,
    j: 0
  });
  const [selectionMinIndex, setSelectionMinIndex] = useState(0);

  const [insertionArray, setInsertionArray] = useState(array1);
  const [insertionCounter, setInsertionCounter] = useState({
    i: 0,
    counter: 1
  });

  const onStartClick = () => {
    increaseBubbleStep(1000);
    startSelectionSort(1000);
    startInsertionSort(1000);
  };

  const increaseBubbleStep = ms => {
    let step = -1;
    let length = bubbleCounter.length;
    let id = setInterval(() => {
      if (step < length - 2) {
        step++;
      } else {
        if (length === 2) {
          clearInterval(id);
        } else {
          step = 0;
          length--;
        }
      }
      setBubbleCounter({ step, length });
    }, ms);
  };

  const startSelectionSort = ms => {
    selectionSort(
      selectionArray,
      selectionCounter.i,
      selectionCounter.j,
      selectionMinIndex,
      setSelectionMinIndex,
      setSelectionArray,
      setSelectionCounter,
      ms
    );
  };

  const startInsertionSort = ms => {
    insertionSort(
      array1,
      insertionCounter.counter,
      insertionCounter.i,
      setInsertionArray,
      setInsertionCounter,
      ms
    )();
  };

  return (
    <div>
      <button onClick={onStartClick} />
      <div>{array1}</div>
      <Visual
        title={'Bubble Sort'}
        array={
          bubbleCounter.step === -1
            ? bubbleArray
            : bubbleSort(
                bubbleArray,
                bubbleCounter.step,
                setBubbleArray,
                bubbleCounter.length
              )
        }
      />
      <Visual
        title={'Selection Sort'}
        array={selectionArray}
        comparedIndices={[selectionCounter.i, selectionCounter.j]}
        minIndex={selectionMinIndex}
      />
      <Visual title={'insertion Sort'} array={insertionArray} />
    </div>
  );
};

export default App;
