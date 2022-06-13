
import React from "react";
export default function Product(){

   
    const [data,setData]=React.useState([]);


    const getData=()=>{


        fetch(`http://localhost:8888/ecom`)
        .then((res)=> res.json())
        .then((res)=> setData(res))
        .catch((err)=>console.log(err))
        

    }
    getData();

  



    return(
        <>
        <h1>Products </h1>
        {data.map((item)=>{
            return <div>
                    <img src={item.image} alt="img"/>
                    <h1>{item.title}</h1>
                    <p>{item.category}</p>
                    <p>{item.price}</p>
                    <p>{item.gender}</p>
              </div>
        })}
        </>
    )
    




    

}