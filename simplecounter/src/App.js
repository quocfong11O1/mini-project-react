import React, {useState} from 'react';


function App() {
  const [counter, setCounter] = useState(0);
  
  const increaseCounter = () => {
    const newCounterValue = counter + 1;
    setCounter(newCounterValue);
  }

  const decreaseCounter = () => {
    const newCounterValue = counter - 1;
    setCounter(newCounterValue);
  }

  return (
    <div className="App">
        <div><h1>Counter</h1></div>
        <div className="counter-container">
          <div className="button">
            <button onClick={decreaseCounter}>-</button>
          </div>
          <div className="count">{counter}</div>
          <div className="button">
            <button onClick={increaseCounter}>+</button>
          </div>
        </div>
    </div>
  );
}

export default App;
