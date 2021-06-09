import React, {useState} from 'react';
import './App.css';

function App() {

    let [value, setValue] = useState<number>(0)

    function onClickButtonInc() {
        setValue(value + 1)
    }

    function setToLocalStorage() {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    }

    function getToLocalStorage() {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            const newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    function clearLocalStorage() {
        localStorage.clear()
        setValue(0)
    }

    const removeLocalStorage = () => {
        localStorage.removeItem('counterValue + 1')
    }

    return (
        <div className='main'>
            <h3>
                {value}
            </h3>
            <button onClick={onClickButtonInc}> inc</button>
            <button onClick={setToLocalStorage}> setToLocalStorage</button>
            <button onClick={getToLocalStorage}> getToLocalStorage</button>
            <button onClick={clearLocalStorage}> clearLocalStorage</button>
            <button onClick={removeLocalStorage}> removeLocalStorage</button>
        </div>
    )
}

export default App;
