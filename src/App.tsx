import React,{useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NavBar from './component/NavBar';
import store from './store/store';
import { Provider } from 'react-redux';
import {Toaster} from 'react-hot-toast';
import { Box,Container,ThemeProvider, createTheme,CssBaseline} from '@mui/material';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const darkTheme = createTheme({
    palette: {
      mode: darkMode?'dark':'light'
    },
  });
  return (
      <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container sx={{display:'flex' ,flexDirection:'column',textAlign:'center'}}>
      <Provider store={store}>
      <div>
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                ></Toaster>
        </div>
        <BrowserRouter>
          <NavBar darkMode={darkMode} setDarkMode={setDarkMode}/>
          <h2>Shopping Cart</h2>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
      </Container>
      </ThemeProvider>

  )
}

export default App
