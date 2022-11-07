import React, { useState } from 'react';
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
            <button onclick={handleClick} id="clear">C</button>
            <button onclick={handleClick} id="del">DEL</button>
            <button onclick={handleClick} name="+" id="operator">&divide;</button>
            <button onclick={handleClick} name="7" >7</button>
            <button onclick={handleClick} name="8" >8</button>
            <button onclick={handleClick} name="9" >9</button>
            <button onclick={handleClick} name="*" id="operator">&times;</button>
            <button onclick={handleClick} name="4" >4</button>
            <button onclick={handleClick} name="5" >5</button>
            <button onclick={handleClick} name="6" >6</button>
            <button onclick={handleClick} name="-" id="operator">-</button>
            <button onclick={handleClick} name="1" >1</button>
            <button onclick={handleClick} name="2" >2</button>
            <button onclick={handleClick} name="3" >3</button>
            <button onclick={handleClick} name="+" id="operator">+</button>
            <button onclick={handleClick} name="0" >0</button>
            <button onclick={handleClick} name="." >.</button>
            <button onclick={handleClick} id="equal">=</button>
        </div>
    </div>
  );
}

export default App;
