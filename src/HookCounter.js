import { useState } from "react";


const HookCounter = () => {
    const [count,setCount] = useState (0);

    const addOneHandler = () =>{
        setCount((pervcount)=> pervcount + 1);
    }
    const addTwoHandler = () =>{
        setCount((pervcount)=> pervcount + 2);
    }
    const addFiveHandler = () =>{
        setCount((pervcount)=> pervcount + 5);
    }
    console.log(count)
    return ( 
        <div>
            <h2>count - {count}</h2>
            <button onClick={addOneHandler}>add one</button>
            <button onClick={addTwoHandler}>add two</button>
            <button onClick={addFiveHandler}>add five</button>
        </div>
     );
};
 
export default HookCounter;



// tozihat::::::::::
// update state ha be meghdar ghabli vabaste ast so => az callback function estefade mikonim (mesle pervcount inja)!!!