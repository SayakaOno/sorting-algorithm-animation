import React, { useState } from 'react';
import Visual from './Visual';
import bubbleSort from '../Algorithms/bubbleSort';
const array1 = [5, 4, 3, 2, 1];

const App = () => {
  const [bubbleArray, setBubbleArray] = useState(array1);
  const [bubbleCounter, setBubbleCounter] = useState({
    step: -1,
    length: bubbleArray.length
  });

  const increaseStep = ms => {
    let step = -1;
    let length = bubbleCounter.length;
    let id = setInterval(() => {
      if (step < length - 2) {
        step++;
        setBubbleCounter({ step, length });
      } else {
        if (length === 2) {
          clearInterval(id);
        } else {
          step = 0;
          length--;
          setBubbleCounter({ step, length });
        }
      }
    }, ms);
  };

  return (
    <div>
      <button onClick={() => increaseStep(1000)} />
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
    </div>
  );
};

export default App;
