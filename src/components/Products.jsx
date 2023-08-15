import React, { useEffect} from 'react'

import {add} from '../store/cartSlice';
import { useDispatch ,useSelector} from 'react-redux';
import { fetchProducts } from '../store/productsSlice';
import { STATUSES } from '../store/productsSlice';

const Products = () => {

    const dispatch=useDispatch();
    const {data:product ,status}=useSelector((state)=>state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    },[dispatch])
    
    
    const handleAdd=(product)=>{
            console.log("Inside Product.js ",product);
            dispatch(add(product));
    }
    

    if(status===STATUSES.LOADING)
    {
        return <h2>Loading...</h2>;
    }

    if(status===STATUSES.ERROR)
    {
        return <h3>Something Went Wrong...</h3>
    }
    
  return (
    <>
    {
        product.map((i)=>{
            return(
                <div key={i.id}>
                    <img src={i.image} alt='OOps'/>
                    <code>{i.title}</code>
                    <p>{i.price}</p>
                    <button onClick={()=>{
                        handleAdd(i)
                    }}>Add</button>
                </div>
            )
        })
    }
    </>
  )
}

export default Products
