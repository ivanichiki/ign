import React, {useState} from 'react';

function Hook4() {
    const [array,setArray]=useState([])
    const [count,setCount]= useState(0)

    let addArray =()=> {
        for (let i=0; i<5;i++) {
            setCount(e => e + 1)
        }
        setArray([
            ...array,{
                value:count}
            ]
        )
    }

    let newArray=array.map(el=> <div>{el.value}</div>)

    return (
        <div className="App">

            <button onClick={addArray}>добавить</button>
            {newArray}

        </div>
    );
}

export default Hook4;
