import React ,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { dataType } from '../store/cartSlice';
import { Switch,Badge,AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
interface RootState {
  cart: dataType[];
}
interface NavBarProp{
  darkMode:boolean;
  setDarkMode:React.Dispatch<React.SetStateAction<boolean>>;

}
const NavBar:React.FC<NavBarProp>= ({darkMode,setDarkMode}) => {
  
 
  const counter = useSelector((state: RootState) => state.cart);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>

          <Box component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
            <Typography variant="h6" component="div">
              Home
            </Typography>
          </Box>

          <Button size='large' color="secondary" variant='contained' sx={{ margin: 2 }} > <Link to='/cart'>Cart</Link> </Button>

          <Badge badgeContent={counter.length} color="secondary" >
            🛒
          </Badge>

          <Switch color='secondary' onClick={() => {
            setDarkMode(!darkMode);
            console.log("Navbar ", darkMode)
          }} />

        </Toolbar>

      </AppBar>

    </Box>

  )
}

export default NavBar
