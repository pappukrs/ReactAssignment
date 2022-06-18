import React from 'react';
import {Link} from 'react-router-dom'



const Product=()=>{
const[product,setProduct]=React.useState([]);


React.useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=> res.json())
    .then((res)=> setProduct(res)  )
    .catch((err)=>console(err));
},[]);
return(
    <>
   <h1 style={{textAlign:"center"}}>PRODUCT LIST</h1>
   <table>
     <thead>
        <tr>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Detail</th>
        </tr>
     </thead>
     <tbody>
      { product.map((products) => { 
       return(
       <>
       <tr key={products.id}>
         <td>{products.title}</td>
         <td>{products.price}</td>
         <td>{<Link to={`/product/${products.id}`}>More Details...</Link>}</td>


       </tr>
      </>
       )
    }

    )}
   </tbody>
   
   </table>
    </>
)
    
}

export default Product;