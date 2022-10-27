import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObject] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const florin = (e) => {
    const data = (calculate(obj, e.target.innerText));
    setObject(data);
  };
  const { total, next } = obj;
  const display = !next ? total : next;
  return (
    <div>
      <div className="display">{ display || 0 }</div>
      <div className="grid">
        <button type="button" onClick={(e) => { florin(e); }}> AC </button>
        <button type="button" onClick={(e) => { florin(e); }}> +/- </button>
        <button type="button" onClick={(e) => { florin(e); }}> % </button>
        <button type="button" onClick={(e) => { florin(e); }} className="orange"> ÷ </button>
        <button type="button" onClick={(e) => { florin(e); }}> 7 </button>
        <button type="button" onClick={(e) => { florin(e); }}> 8 </button>
        <button type="button" onClick={(e) => { florin(e); }}> 9 </button>
        <button type="button" onClick={(e) => { florin(e); }} className="orange"> x </button>
        <button type="button" onClick={(e) => { florin(e); }}> 4 </button>
        <button type="button" onClick={(e) => { florin(e); }}> 5 </button>
        <button type="button" onClick={(e) => { florin(e); }}> 6 </button>
        <button type="button" onClick={(e) => { florin(e); }} className="orange"> - </button>
        <button type="button" onClick={(e) => { florin(e); }}> 1 </button>
        <button type="button" onClick={(e) => { florin(e); }}> 2 </button>
        <button type="button" onClick={(e) => { florin(e); }}> 3 </button>
        <button type="button" onClick={(e) => { florin(e); }} className="orange"> + </button>
        <button type="button" onClick={(e) => { florin(e); }} className="zero"> 0 </button>
        <button type="button" onClick={(e) => { florin(e); }}> . </button>
        <button type="button" onClick={(e) => { florin(e); }} className="orange"> = </button>
      </div>
    </div>
  );
};

export default Calculator;
