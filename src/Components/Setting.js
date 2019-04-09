import React from 'react';
import { BUBBLE, SELECTION, INSERTION } from '../constants';

const Setting = props => {
  const onChange = e => {
    //TODO: Validation
    let newArray = e.target.value.split(',');
    props.setArray(newArray);
  };

  const onSortClick = sort => {
    props.setDisplay(
      Object.assign({}, props.display, { [sort]: !props.display[sort] })
    );
  };

  return (
    <div className='setting'>
      <textarea value={props.array} onChange={onChange} />
      <p className='warning'>WARNING</p>
      <div>
        <input
          type='checkbox'
          id='bubble-sort'
          checked={props.display[BUBBLE]}
          onChange={() => onSortClick(BUBBLE)}
        />
        <label htmlFor='bubble-sort' value='bubble'>
          Bubble sort
        </label>
        <input
          type='checkbox'
          id='selection-sort'
          onChange={() => onSortClick(SELECTION)}
          checked={props.display[SELECTION]}
        />
        <label htmlFor='selection-sort' value='selection'>
          Selection sort
        </label>
        <input
          type='checkbox'
          id='insertion-sort'
          onChange={() => onSortClick(INSERTION)}
          checked={props.display[INSERTION]}
        />
        <label htmlFor='insertion-sort' value='insertion'>
          Insertion sort
        </label>
      </div>
      <progress value='22' max='100' />
      <div className='buttons'>
        <button onClick={props.onStartClick}>START</button>
        <button onClick={props.onResetClick}>RESET</button>
      </div>
    </div>
  );
};

export default Setting;
