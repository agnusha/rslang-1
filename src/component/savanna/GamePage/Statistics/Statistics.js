import React from 'react';
import './style.scss';

const Statistics = ({ iKnowArr, iDontKnowArr, endGame }) => (
  <div className='statistics'>
    <div className='popup'>
      <div className='iKnow'>
        <span>I know: </span>
        {iKnowArr.map(({ word, wordTranslate }, i) => (
          <div className='item' key={i}> {word} - {wordTranslate} </div>
        ))}
      </div>
      <div className='iDontKnow'>
        <span>I don't know:</span>
        {iDontKnowArr.map(({ word, wordTranslate }, i) => (
          <div className='item' key={i}> {word} - {wordTranslate} </div>
        ))}
      </div>
      <button onClick={endGame} className='btn btn-warning'> Continue </button>
    </div>
  </div>
);

export default Statistics;
