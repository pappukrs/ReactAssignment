
import React from "react"
import GroceryInput from "./GroceryInput.jsx";
import GroceryList from "./GroceryList.jsx";
import {v4 as uuid } from "uuid"




const Grocerry=()=>{
    const [data,setData]=React.useState([]);
    
    
    const handleAdd=(name)=>{
     
      let payload={
        name:name,
        id:uuid()
      }
      setData([...data,payload]);
    }
   
    const handleDelete=(id)=>{
    let updatedData=data.filter((item)=>item.id !== id);
    setData(updatedData);
    }
    
    return(
      <>
      <GroceryInput handleAdd={handleAdd}/>
      <GroceryList data={data} handleDelete={handleDelete}/>
      </>
    )
   }

   export default Grocerry;