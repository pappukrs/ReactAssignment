import React from 'react'
import { Routes,Route  } from 'react-router-dom'
import Navbar  from './component/Navbar'
import Home from './component/Home'
import Product from './component/Product'
import ProductDetail from './component/ProductDetail'

import NotFoundPage from './component/NotFoundPage'



export default function App() {
return(
    <>
    <Navbar />
   <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/product/:productId' element={<ProductDetail/>}></Route>
      <Route path='*' element={<NotFoundPage/>}></Route>
     
   </Routes>
    </>
)
}