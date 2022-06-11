import React, {useState} from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    const decreaseCounter = () => {
        setCounter({
            counter: counter - 1,
        })
    }

    const increaseCounter = () => {
        setCounter({
            counter: counter + 1,
        })
    }

    return (
        <div>
            <p>{counter}</p>
            <button onClick={decreaseCounter}>Decrease</button>
            <button onClick={increaseCounter}>Increase</button>
        </div>
    )
}

export default Counter
