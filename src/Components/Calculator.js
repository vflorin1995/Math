import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
  }

  florin(e) {
    const data = (calculate(this.state, e.target.innerText));
    this.setState(data);
  }

  render() {
    const { total, next } = this.state;
    const display = !next ? total : next;
    return (
      <div>
        <div className="display">{ display || 0 }</div>
        <div className="grid">
          <button type="button" onClick={(e) => { this.florin(e); }}> AC </button>
          <button type="button" onClick={(e) => { this.florin(e); }}> +/- </button>
          <button type="button" onClick={(e) => { this.florin(e); }}> % </button>
          <button type="button" onClick={(e) => { this.florin(e); }} className="orange"> ÷ </button>
          <button type="button" onClick={(e) => { this.florin(e); }}> 7 </button>
          <button type="button" onClick={(e) => { this.florin(e); }}> 8 </button>
          <button type="button" onClick={(e) => { this.florin(e); }}> 9 </button>
          <button type="button" onClick={(e) => { this.florin(e); }} className="orange"> X </button>
          <button type="button" onClick={(e) => { this.florin(e); }}> 4 </button>
          <button type="button" onClick={(e) => { this.florin(e); }}> 5 </button>
          <button type="button" onClick={(e) => { this.florin(e); }}> 6 </button>
          <button type="button" onClick={(e) => { this.florin(e); }} className="orange"> - </button>
          <button type="button" onClick={(e) => { this.florin(e); }}> 1 </button>
          <button type="button" onClick={(e) => { this.florin(e); }}> 2 </button>
          <button type="button" onClick={(e) => { this.florin(e); }}> 3 </button>
          <button type="button" onClick={(e) => { this.florin(e); }} className="orange"> + </button>
          <button type="button" onClick={(e) => { this.florin(e); }} className="zero"> 0 </button>
          <button type="button" onClick={(e) => { this.florin(e); }}> . </button>
          <button type="button" onClick={(e) => { this.florin(e); }} className="orange"> = </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
