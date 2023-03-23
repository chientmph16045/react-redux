import React from 'react'
import { SubmitHandler, useForm } from "react-hook-form"
import { IProduct } from '../interface/product';
import { createProduct } from '../slice/product';
import { useAppDispatch } from '../store/hook';
import { useNavigate } from "react-router-dom"
type Props = {}

const AddProduct = (props: Props) => {
    const { 
        handleSubmit,
        register,
        formState: { errors } 
    } = useForm<IProduct>();

    const dispatch = useAppDispatch()
    const navigate=useNavigate()
    const onAdd: SubmitHandler<IProduct> = (data) => {
        dispatch(createProduct(data)).then(() => {
            navigate("/")
        })
    }
    return (
        <form onSubmit={handleSubmit(onAdd)}>
            <input type="text" {...register("name", { required: true })} />
            {errors.name && <span>không đựọc để trống</span>}
            <button>Add</button>
        </form>
    )
}

export default AddProduct