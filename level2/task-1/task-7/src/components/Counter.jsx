import {useState} from 'react'

function Counter() {
    const[count,setCount]=useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
  return (
    <div className='crud'>
        <button className='l1'>{count}</button>
        <button className='l2'onClick={increment}>Increment</button>
        <button className='l3'onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter