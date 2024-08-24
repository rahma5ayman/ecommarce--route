import {  useEffect, useState } from 'react';
import { createContext } from 'react';

export  let userContext = createContext(0);

export  function UserContextProvider(props) {

const [userLogin , setUserLogin] = useState(null);

    useEffect(()=>{
        if (localStorage.getItem('userToken') !==null) {
            setUserLogin(localStorage.getItem('userToken'))
        }
    }, [])


    return <userContext.Provider value ={{userLogin ,setUserLogin }}>
            {props.children}
    </userContext.Provider>
}