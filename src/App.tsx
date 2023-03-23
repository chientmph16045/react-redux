import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import ProductList from './components/product'
import { IProduct } from './interface/product'
import {Routes,Route} from   "react-router-dom"
import AddProduct from './components/add'
import UpdateProduct from './components/update'
import ProductListTest from './components/test'
type props={
  data:IProduct[]
}
function App() {
  return (
    <Routes>
        <Route path='/' element={<ProductList/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/update/:id' element={<UpdateProduct/>}/>
    </Routes>
  )
}

export default App
