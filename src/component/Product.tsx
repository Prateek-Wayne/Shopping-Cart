import React, { useEffect, useState } from 'react'
import {useDispatch} from 'react-redux';
import {add} from '../store/cartSlice';
import { dataType } from '../store/cartSlice';
import './component.css';
const Product = () => {
    //dispatcher
    const dispatch=useDispatch();
    
    //useState
    const [dataProduct,setProductData]=useState<dataType[]>([]);
    const [loading,setLoading] =useState<boolean>(true);
    //fetching...
    const fetchData =async ()=>{
        const res=await fetch('https://dummyjson.com/products');
        const data= await res.json();
        setProductData(data.products);
        setLoading(false);
        console.log(data.products);
    }

    //useEffect...
    useEffect(()=>{
        fetchData();
    },[]);
    //addHandler
    const addHandler=(i:dataType)=>{
        dispatch(add(i));

    }
    //coditon for Loading...
    if(loading){
        return (<h1>Loading....</h1>)
        ;
    }
  return (
    <div className='ProductWrapper'>
        {   
            dataProduct.map((i:dataType,index:number)=>{
                    return(
                        <div key={index} className='Product'>
                            <img src={i.images[0]} alt='#' />
                            <code>{i.title}</code>
                            <button  onClick={()=>{
                                addHandler(i);
                            }}>Add me</button>
                        </div>
                    )
            })  
        }
    </div>
  )
}

export default Product
