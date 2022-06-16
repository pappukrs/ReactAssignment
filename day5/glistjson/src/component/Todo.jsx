
import React ,{useEffect} from "react"
import TodoInput from "./TodoInput.jsx";
import TodoList from "./TodoList.jsx";
import {v4 as uuid } from "uuid"




const Todo=()=>{
    const [data,setData]=React.useState([]);
    const [page,setPage]=React.useState(1)




    const getData=()=>{
      fetch(`http://localhost:5643/list?_page=${page}&_limit=3`)
      .then((res)=>res.json())
      .then((res)=>setData(res))
      .catch((err)=>console.log(err))
    }
    
    useEffect(()=>{
      getData();
    },[data]);
    
    
    const handleAdd=(name)=>{
     
      let payload={
        name:name,
        id:uuid()
      }
      // setData([...data,payload]);

      fetch(`http://localhost:5643/list`,{
        method:"POST",
        headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(payload)
      })
      .then((res)=>res.json())
      .then((res)=> {return getData() });
    }
   
   
    
   

   const  handlePage=(value)=>{
    setPage(page+value);
   }
    
    return(
      <>
       <h1 style={{textAlign: 'center',backgroundColor:"teal",}}> ADD TODO</h1>
      <TodoInput handleAdd={handleAdd}/>
      <TodoList data={data } handlePage={handlePage} page={page}/>
      </>
    )
   }

   export default Todo;