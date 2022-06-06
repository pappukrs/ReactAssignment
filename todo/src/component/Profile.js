import React from "react";


export default function Profile(){

  const[age,setAge]=React.useState(18);

 const handlerAge=(value)=>{
    setAge(age+value)
  }

  return(
    <div>
      <img src={{url:"https://i.pravatar.cc/300"}} alt="img" />
      <h4>Name:pappu kumar</h4>
      <h3>Age:{age}</h3>
      <button style={{cursor:"pointer",padding:"5px",margin:"2px"}} onClick={()=>{handlerAge(1)}}> Increase Age</button>
      <button style={{cursor:"pointer",padding:"5px",margin:"2px"}} onClick={()=>{handlerAge(-1)}}> Increase Age</button>
    </div>
  )
}