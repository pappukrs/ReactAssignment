import React from 'react';
import {useSelector,useDispatch} from 'react-redux'
import {incCount,decCount,resetCount} from '../src/Redux/action'
function Counter() {
    
const {count}=useSelector((state)=>state);
console.log(count);

const dispatch =useDispatch();
  return(
    <div>
      <h1>count is {count}</h1>
       <button onClick={()=>{  dispatch(incCount(1))}}>INCREASE</button>
       <button onClick={()=>{ dispatch(decCount(1))}}>DECREASE</button>
      <button onClick={()=>{ dispatch(resetCount())}}>RESET</button> 
    </div>
  )
         
}

export default Counter;
