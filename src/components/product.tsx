import { useEffect } from "react"
import { useSelector } from "react-redux"
import { deleteProduct, fetchProduct } from "../slice/product"
import { useAppDispatch } from "../store/hook"
import {Link} from "react-router-dom"


const ProductList = () => {
    const { value: product } = useSelector((state:any) => state.product)
    const dispatch = useAppDispatch()
    console.log(product)
    useEffect(() => {
        dispatch(fetchProduct())
    }, [])
    const remove = (id: any) => {
        dispatch(deleteProduct(id))
    }
    return <>
        <Link to="add">add</Link>
        {product.map((item:any) => (
            <table key={item.id}>
                <tbody>
                    <tr>
                        <td >{item.name}</td>
                        <td>
                            <button onClick={() => remove(item.id)}>remove</button>
                            <button><Link to={`update/${item.id}`}>update</Link></button>
                        </td>
                    </tr>
                </tbody>
            </table>
        ))}


    </>
}



export default ProductList