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

      fetch(`http://localhost:5433/grocery`,{
        method: 'POST',
        headers:{
          'content-type': 'application/json'
        },
       

        body: JSON.stringify(payload)
      })
     
      setData([...data,payload]);
    }
   
    const handleDelete=(id)=>{

      fetch(`http://localhost:5433/grocery/${id}`,{
        method:"DELETE",
        headers:{'content-type':'application/json'}
      })
    let updatedData=data.filter((item)=>item.id !== id);


    setData(updatedData);
    }
    
    return(
      <>
       <h1 style={{textAlign: 'center',backgroundColor:"teal",}}> ADD GROCERRY ITEM</h1>
      <GroceryInput handleAdd={handleAdd}/>
      <GroceryList data={data} handleDelete={handleDelete}/>
      </>
    )
   }

   export default Grocerry;