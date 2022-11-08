import React, { useState } from 'react';
import clear from './clear.js';
import deletes from './deletes.js';
import operate from './operate.js';
import './App.css';



function App() {
    const [result, setResult] = useState("");

    const handleClick= (props) => {
        setResult(result.concat(props.target.name));
    }

  return (
    <div className="container">
        <input type="text" value={result} />
        <div className="keypad">
            <button onClick={clear} id="clear">C</button>
            <button onClick={deletes} id="del">DEL</button>
            <button onClick={handleClick} name="/" id="operator">&divide;</button>
            <button onClick={handleClick} name="7" >7</button>
            <button onClick={handleClick} name="8" >8</button>
            <button onClick={handleClick} name="9" >9</button>
            <button onClick={handleClick} name="*" id="operator">&times;</button>
            <button onClick={handleClick} name="4" >4</button>
            <button onClick={handleClick} name="5" >5</button>
            <button onClick={handleClick} name="6" >6</button>
            <button onClick={handleClick} name="-" id="operator">-</button>
            <button onClick={handleClick} name="1" >1</button>
            <button onClick={handleClick} name="2" >2</button>
            <button onClick={handleClick} name="3" >3</button>
            <button onClick={handleClick} name="+" id="operator">+</button>
            <button onClick={handleClick} name="0" >0</button>
            <button onClick={handleClick} name="." >.</button>
            <button onClick={operate} id="equal">=</button>
        </div>
    </div>
  );
}

export default App;