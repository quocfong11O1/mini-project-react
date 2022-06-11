import React, { useState } from 'react'

function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('');

  const increaseTemperatureValue = () => {
    const newTemperatureValue = temperatureValue + 1;
    if (newTemperatureValue >= 15) {
      setTemperatureColor('hot')
    }
    setTemperatureValue(newTemperatureValue);
  }

  const decreaseTemperatureValue = () => {
    const newTemperatureValue = temperatureValue - 1;
    if (newTemperatureValue < 15) {
      setTemperatureColor('cold')
    }
    setTemperatureValue(temperatureValue - 1);
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°C</div>
      </div>

      <div className='button-container'>
          <button onClick={increaseTemperatureValue}>+</button>
          <button onClick={decreaseTemperatureValue}>-</button>
        </div>
    </div>
  )
}

export default App
