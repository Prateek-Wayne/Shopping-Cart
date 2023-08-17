import React, { useState ,useEffect} from 'react'
import {remove} from '../store/cartSlice';
import { useSelector ,useDispatch} from 'react-redux';
import { dataType } from '../store/cartSlice';

interface RootState{
    cart:dataType[]
}

const Cart = () => {
    // dispatcher...
    const dispatch=useDispatch();
    // useState...
    const [productData,setProductData]=useState<dataType[]>([]);
    //useSelector...
    const data=useSelector((state:RootState)=>state.cart);
    //useEffect
    useEffect(()=>{
        setProductData(data);
        console.log(data);
    },[data]);
    //calculating total Price of Product...
    let totalPrice:number=0;
    for(let i=0;i<productData.length;i++)
    {
        totalPrice+=productData[i].price;
    }
    //removing from cart...
    const addRemover=(index:number)=>{
        dispatch(remove(index));
    }
  return (
    <div>
        <h1>Cart...</h1>
        <h2>Total:{totalPrice}</h2>
        {
             productData.map((i:dataType,index:number)=>{
                return(
                    <div key={index}>
                        <span>{i.title}</span>
                        <button  onClick={()=>{
                            addRemover(i.id);
                        }}>Delete  me</button>
                    </div>
                )
        }) 
        }
      
    </div>
  )
}

export default Cart
