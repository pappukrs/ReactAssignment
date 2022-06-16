import React from "react";

const TodoInput =({handleAdd})=>{
    const [name,setName]=React.useState("");
    return(
      <>
      
      <input
       type="text"
       placeholder="Add TODO "
       value={name}
       required
       onChange={(e)=>{setName(e.target.value)}}
       
      />
      <button 
      onClick={()=>{handleAdd(name);setName("") } }   >
        Save</button>
      </>
    )
  }

  export default TodoInput;
   