
import React from "react";

const GroceryInput =({handleAdd})=>{
    const [name,setName]=React.useState("");
    return(
      <>
      
      <input
       type="text"
       placeholder="Add Grocerry list"
       value={name}
       onChange={(e)=>{setName(e.target.value)}}
       
      />
      <button 
      onClick={()=>{handleAdd(name);setName("") } }   >
        ADD</button>
      </>
    )
  }

  export default GroceryInput;
   