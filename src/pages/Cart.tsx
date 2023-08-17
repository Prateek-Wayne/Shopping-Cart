import React, { useState, useEffect } from "react";
import { remove, add } from "../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { dataType } from "../store/cartSlice";
import {toast} from 'react-hot-toast';

interface RootState {
  cart: dataType[];
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
    },[data]);
    //calculating total Price of Product...
    let totalPrice:number=0;
    for(let i=0;i<productData.length;i++)
    {
        totalPrice+=productData[i].price;
    }
    //Adding myMap functionality...
    const myMap=new Map<dataType,number>();
    for(let i of productData)
    {
        if(myMap.has(i))
        {
            myMap.set(i,myMap.get(i)!+1);
        }
        else
        {
            myMap.set(i,1);
        }
    }
    //removing from cart...
    const addRemover = (index: number) => {
      dispatch(remove(index));
      toast('Removed!', {
          icon: '❌',
        });
    };
    const addHandler = (i: dataType) => {
      dispatch(add(i))
      toast.success("Item Added");
    };
  
  return (
    <div>
      <h1>Cart...</h1>
      <h2>Total:{totalPrice}</h2>
      {Array.from(myMap).map(
        ([key, value]: [dataType, number], index: number) => {
          return (
            <div key={index}>
              <span>{key.title}</span>
              <p>
                <code>{value}</code>
              </p>
              <span>
                <button
                  onClick={() => {
                    addHandler(key);
                  }}
                >
                  Add me
                </button>
                <button
                  onClick={() => {
                    addRemover(key.id);
                  }}
                >
                  Delete me
                </button>
              </span>
            </div>
          );
        }
      )}
    </div>
  );
    };

export default Cart;
