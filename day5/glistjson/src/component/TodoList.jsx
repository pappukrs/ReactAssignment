import React from "react";


 const TodoList =({data,handlePage,page})=>{
    return(
      <>
      {data.map((item)=>{
      return <div >
          <h1 key={item.id}>{item.name}</h1>
       </div>
     })
     
    
     }

     <br/>
     <br/>
     <br/>
      <button onClick={()=>handlePage(-1)} disabled={page===1}> previous </button>
      <button onClick={()=>handlePage(1)}>Next</button>
      </>
    )
   }

   export default TodoList;
