import React, { useState } from 'react';
import Visual from './Visual';
import Setting from '../Components/Setting';
import bubbleSort from '../Algorithms/bubbleSort';
import selectionSort from '../Algorithms/selectionSort';
import insertionSort from '../Algorithms/insertionSort';
import mergeSort from '../Algorithms/mergeSort';
import { BUBBLE, SELECTION, INSERTION } from '../constants';

const initialArray = [5, 1, 2, 3, 4];
const array2 = [5, 4, 3, 2, 1];

const App = () => {
  const [array, setArray] = useState(initialArray);
  const [display, setDisplay] = useState({
    [BUBBLE]: true,
    [SELECTION]: true,
    [INSERTION]: true
  });

  const [status, setStatus] = useState();

  const [bubbleArray, setBubbleArray] = useState(array);
  const [bubbleCounter, setBubbleCounter] = useState({
    step: -1,
    length: bubbleArray.length
  });

  const [selectionArray, setSelectionArray] = useState(array);
  const [selectionCounter, setSelectionCounter] = useState({
    i: 0,
    j: 0
  });
  const [selectionMinIndex, setSelectionMinIndex] = useState(0);

  const [insertionArray, setInsertionArray] = useState(array);
  const [insertionCounter, setInsertionCounter] = useState({
    i: 0,
    counter: 1
  });

  const onStartClick = () => {
    increaseBubbleStep(500);
    startSelectionSort(500);
    startInsertionSort(500);
    // mergeSort(array);
  };

  const onResetClick = () => {
    setArray(initialArray);
    setBubbleArray(initialArray);
    setSelectionArray(initialArray);
    setInsertionArray(initialArray);
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
      insertionArray,
      insertionCounter.counter,
      insertionCounter.i,
      setInsertionArray,
      setInsertionCounter,
      ms
    )();
  };

  return (
    <div>
      <Setting
        array={array}
        setArray={setArray}
        display={display}
        setDisplay={setDisplay}
        onStartClick={onStartClick}
        onResetClick={onResetClick}
      />
      <div>{bubbleArray}</div>
      {display[BUBBLE] === true && (
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
      )}
      {display[SELECTION] === true && (
        <Visual
          title={'Selection Sort'}
          array={selectionArray}
          comparedIndices={[selectionCounter.i, selectionCounter.j]}
          minIndex={selectionMinIndex}
        />
      )}
      {display[INSERTION] === true && (
        <Visual title={'insertion Sort'} array={insertionArray} />
      )}
    </div>
  );
};

export default App;
