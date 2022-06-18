import React from 'react';
import {useParams} from 'react-router-dom'
const ProductDetail=()=>{
   let {productId}=useParams()
//    console.log(productId)
  
   const [productDetail,setProductDetail]=React.useState([]);


   React.useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(res=>res.json())
    .then(res=>setProductDetail(res))
    .catch((err)=>console.log(err));
   },[productId]);




    return (
        <>
         <h1 style={{textAlign:"center"}}>PRODUCT DETAIL</h1>

         {productDetail.map((item)=>{
            return(
                <>
                <h1>{item}</h1>
               
                </>
            )
         })}
        </>
    )
}

export default ProductDetail;