
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

const initialState={
    value:[],
    item:{}
}

export const fetchProduct=createAsyncThunk("product/fetchProduct",async()=>{
    const response = await fetch("http://localhost:3000/products")
    const data = await response.json()
    return data
})
export const fetchProductOne = createAsyncThunk ("product/fetchOne",async (id:number)=>{
    const response = await fetch("http://localhost:3000/products/"+id)
    const data = await response.json()
    return data
})
export const createProduct = createAsyncThunk ("product/createProduct",async (product)=>{
    const response = await fetch("http://localhost:3000/products",{
        method :"POST",
        headers: {
            "Content-Type":"application/json"
        },
        body :JSON.stringify(product)
    })
    const data = await response.json()
    return data
})
export const editProduct = createAsyncThunk ("product/createProduct",async (product)=>{
    const response = await fetch("http://localhost:3000/products/",{
        method :"PUT",
        headers: {
            "Content-Type":"application/json"
        },
        body :JSON.stringify(product)
    })
    const data = await response.json()
    return data
})
export const deleteProduct = createAsyncThunk ("product/deleteProduct",async (id)=>{
   await fetch("http://localhost:3000/products/"+id,{
        method :"DELETE", 
    })
    return id
})
const productSlice= createSlice({
    name:"product",
    initialState:initialState,
    reducers:{},
    extraReducers:(buider)=>{
        buider.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.value=action.payload
        })
        buider.addCase(deleteProduct.fulfilled,(state,action)=>{
            state.value=state.value.filter((item:any)=> item.id != action.payload)
        })
        buider.addCase(fetchProductOne.fulfilled,(state,action)=>{
            state.item=action.payload
        })
        buider.addCase(editProduct.fulfilled,(state,action)=>{
            state.item=state.value.map((item:any)=>item.id === action.payload.id ? action.payload : item)
        })
    }
})

export default productSlice.reducer;