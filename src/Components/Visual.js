import React from 'react';

const Visual = props => {
  const renderGraph = array => {
    return array.map((elem, i) => {
      return (
        <td key={elem}>
          <div className='content' style={{ height: array[i] * 2 }} />
        </td>
      );
    });
  };

  return (
    <section className='visual'>
      <h1>{props.title}</h1>
      <div>{props.array}</div>
      <table>
        <tbody>
          <tr>{renderGraph(props.array)}</tr>
        </tbody>
      </table>
    </section>
  );
};

export default Visual;
