import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './component/NavBar';
import store from './store/store';
import { Provider } from 'react-redux';
const App = () => {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <h2>Shopping Cart</h2>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  )
}

export default App
