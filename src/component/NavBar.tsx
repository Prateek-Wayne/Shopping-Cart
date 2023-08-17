import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import '../App.css'
import  {dataType}  from '../store/cartSlice';
 
interface RootState {
    cart: dataType[];
  }
  
const NavBar = () => {

    const counter = useSelector((state: RootState) => state.cart);

  return (
    <div className='NavbarWrapper'>
    <div className='Navbar' >
      <Link to='/' ><a href='/'>🏠</a></Link>
      <Link to='/cart' ><a href='/cart'>🛍️</a></Link>
      <code className='Code'>{counter.length}</code>
    </div>
    </div>
  )
}

export default NavBar
