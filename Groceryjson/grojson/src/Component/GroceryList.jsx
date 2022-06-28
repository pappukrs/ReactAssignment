import React from "react";


 const GroceryList =({data,handleDelete})=>{
    return(
      <>
      {data.map((item)=>{
      return <div >
          <h1>{item.name}</h1>
          <button onClick={()=>{handleDelete(item.id)}}>Delete</button>
       </div>
     })
     
     
     }
      
      </>
    )
   }

   export default GroceryList;
