import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {remove} from '../store/cartSlice';

const Cart = () => {
  const items = useSelector((state) => state.cart);
  const dispatch=useDispatch();
  const removeHandler=(i)=>{
      dispatch(remove(i));
  }

  return (
    <div>
      <h2>Cart</h2>
      <div>
        {items.map((i) => {
          return (
            <div key={i.id}>
              <img src={i.image} alt='OOps' />
              <code>{i.title}</code>
              <p>{i.price}</p>
              <button onClick={()=>{
                removeHandler(i.id);
              }}>Remove </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart
