import React from "react";



let data=[
  { id: 1, title: "Wake up", status: true },
  { id: 2, title: "drink tea", status: false },
  { id: 3, title: "eat maggi", status: true },
  { id: 4, title: "sleep", status: false }
]
export default function Todo(){
  return(
    <div style={{padding:"5px"}}>
      <h1>Todo list</h1>
      {data.map((item,index)=>{
        return  item.status===true ?<h4 styel={{color:"green"}}> {item.title} </h4>:<h4 styel={{color:"red"}}> {item.title} </h4>
      })}
    </div>
  )
}