import React, {useState} from 'react';

import '../App.css';


function Counter2() {
const inirialCount = 0
    const [count,setCount]= useState(inirialCount)
let increas = ()=> {
        for(let i=0; i<5; i++)
        setCount(e=> e +1)
}
    return (
        <div className="App">
        Count: {count}
            <button onClick={()=>setCount(inirialCount)}>Reset</button>
            <button onClick={()=>setCount(e=> e+1)}>Increment</button>
            <button onClick={()=>setCount(e=>e-1)}>DIscrement</button>
            <button onClick={increas}>Increas on 5</button>
        </div>
    );
}

export default Counter2;
