import React, { useState, useEffect } from "react";
import { remove, add } from "../store/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { dataType } from "../store/cartSlice";
import { toast } from 'react-hot-toast';
// ......................................
import { Grid, Button, Box, Paper, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
// ........................................
interface RootState {
  cart: dataType[];
}

const Cart = () => {
  // dispatcher...
  const dispatch = useDispatch();
  // useState...
  const [productData, setProductData] = useState<dataType[]>([]);
  //useSelector...
  const data = useSelector((state: RootState) => state.cart);
  //useEffect
  useEffect(() => {
    setProductData(data);
  }, [data]);
  //calculating total Price of Product...
  let totalPrice: number = 0;
  for (let i = 0; i < productData.length; i++) {
    totalPrice += productData[i].price;
  }
  //Adding myMap functionality...
  const myMap = new Map<dataType, number>();
  for (let i of productData) {
    if (myMap.has(i)) {
      myMap.set(i, myMap.get(i)! + 1);
    }
    else {
      myMap.set(i, 1);
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

    <>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh', paddingTop: '64px' }}>
        <Button variant="contained" >Total Price:{totalPrice}$ </Button>
      </Box>
      <Grid container spacing={2}>
        {Array.from(myMap).map(
          ([i, value]: [dataType, number], index: number) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} key={i.id}>
                <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: 200, minHeight: 200, height: '500px' }}>
                  <CardMedia
                    component="img"
                    image={i.images[0]}
                    alt="Paella dish"
                    sx={{ height: 300, width: 300, objectFit: 'contain', }}
                  />
                  <CardContent sx={{ alignItems: 'center' }} >
                    <Typography gutterBottom variant="h5" component="div">
                      {i.title}
                    </Typography>
                    <Typography component='div' variant="body2" color="text.secondary" sx={{ maxWidth: 500, maxHeight: 50, overflow: "scroll" }} >
                      {i.description}
                    </Typography>
                    <Button size="large" variant="contained" sx={{ borderRadius: "30%", fontSize: '10', mt: 3, mb: "-30px" }}>
                      {value}
                    </Button>
                  </CardContent>
                  <CardActions>
                    <Typography>
                      <Button variant="contained" color="secondary" size="small" sx={{ margin: 1, borderRadius: '20px' }} onClick={() => {
                        addHandler(i);
                      }}>➕</Button>
                      <Button variant="contained" color="secondary" size="small" sx={{ margin: 1, borderRadius: '20px' }} onClick={() => {
                        addRemover(i.id);
                      }}>➖</Button>
                    </Typography>
                  </CardActions>
                </Card>
              </Grid>

            );
          }
        )}
      </Grid>
    </>
  );
};

export default Cart;
