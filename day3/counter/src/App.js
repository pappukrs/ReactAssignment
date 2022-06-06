import React from 'react';
import ("./App.css")

export default function App(){


   let [count,setCount]=React.useState(0);

   const simpleChange=(value)=>{
      setCount(count+value);
   }

   const MulChange=()=>{
      setCount(count*2);
   }
 
return (
   <div id="pp">
   
   <h3 >{count%2===0?<h1 style={{color:"green"}}>Counter<h1>{count}</h1></h1>:<h1 style={{color:"red"}}>Counter<h1>{count}</h1></h1>}</h3>
   <button style={{cursor:"pointer",padding:"7px",backgroundColor:"blue",color:"white"}} onClick={()=>{simpleChange(1)}}>Increase</button>
   <button style={{cursor:"pointer",padding:"7px",backgroundColor:"blue",color:"white"}} onClick={()=>{simpleChange(-1)}}>Decrease</button>
   <br/>
    <button style={{cursor:"pointer",padding:"7px",backgroundColor:"blue",color:"white"}} onClick={()=>{MulChange(2)}}>Multiply By 2</button> 



   </div>


)


}