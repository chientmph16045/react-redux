import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { IProduct } from '../interface/product';
import { createProduct, fetchProductOne } from '../slice/product';
import { useAppDispatch } from '../store/hook';
import {useNavigate,useParams} from "react-router-dom"
import { useSelector } from 'react-redux';
type Props = {}

const UpdateProduct = (props: Props) => {
  const { 
    handleSubmit,
    register,
    formState: { errors } 
} = useForm<IProduct>();

const dispatch = useAppDispatch()
const navigate=useNavigate()
const {id} = useParams()
const {item}= useSelector((state:any)=>state.product)
console.log(id)
const onAdd: SubmitHandler<IProduct> = (data) => {
    // dispatch().then(() => {
    //     navigate("/")
    // })
}
useEffect(()=>{
  dispatch(fetchProductOne(id))
},[])
return (
    <form onSubmit={handleSubmit(onAdd)}>
        <input type="text" defaultValue={item.name} {...register("name", { required: true })} />
        {errors.name && <span>không đựọc để trống</span>}
        <button>Add</button>
    </form>
)
}

export default UpdateProduct