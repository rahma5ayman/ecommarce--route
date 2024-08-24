import { useState } from 'react';
import { createContext } from 'react';

export  let CounterContext = createContext(0);

export  function CounterContextProvider(props) {
    const [counter ,setCounter]= useState(0);
    const [userName ,setUserName]= useState('');

    function changCounter() {
       setCounter(Math.random)
    }

    return <CounterContext.Provider value ={{counter ,userName , changCounter }}>
            {props.children}
    </CounterContext.Provider>
}