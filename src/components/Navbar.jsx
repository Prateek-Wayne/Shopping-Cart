import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const items=useSelector((state)=> state.cart);

  return (
    <div>
      <span>*************************************************************</span>
      <div>
        <Link to="/" style={{margin:30}} >🏠</Link>
        <Link to="/cart">🫙</Link> 

        <code> Cart Items : {items.length} </code>
      </div>
    </div>
  )
}

export default Navbar
