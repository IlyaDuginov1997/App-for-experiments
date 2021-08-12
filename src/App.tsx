import React from 'react';
import './App.css';
import {ComponentForLocalStorage} from './Components/ComponentForLocalStorage';

function App() {

    function alertSomeFunc(value: string) {
        alert(value)
    }

    return (
        <div className='main'>
            <ComponentForLocalStorage someFunc={alertSomeFunc}/>
        </div>
    )
}

export default App;


