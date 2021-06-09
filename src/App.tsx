import React, {useState} from 'react';
import './App.css';

function App() {

    let [value, setValue] = useState<number>(0)

    function onClickButtonInc() {
        setValue(value + 1)
    }

    return (
        <div className='main'>
            <h3>
                {value}
            </h3>
            <button onClick={onClickButtonInc}>
                inc
            </button>
        </div>
    )
}

export default App;
