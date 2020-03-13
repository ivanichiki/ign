import React, {useState} from 'react'

function Train1() {
  const[jopa,setJopa]= useState('');
  const[array,setArray]=useState([{nam:''},
      {nam:''}]);

  let addText = (event)=>{
      if (event.key==='Enter'){
          console.log('Hi')
          setArray([
              ...array,
              {nam: event.target.value}])
          setJopa('')
      }
  }
let newarray=array.map(el=> <div> {el.nam}</div>)
    return(
        <div>
            <input type='text' value={jopa} onChange={event => setJopa(event.target.value)}
            onKeyPress={addText}

            />
            <label>Введите текст</label>
            {newarray}
        </div>
    )

}

export default Train1