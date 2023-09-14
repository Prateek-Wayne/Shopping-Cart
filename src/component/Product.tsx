import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';
import { dataType } from '../store/cartSlice';
import { toast } from 'react-hot-toast';

import { Box,Grid,Button, Card, CardActions, CardContent, CardMedia, Typography,CircularProgress,Rating } from '@mui/material';

const Product = () => {
    //dispatcher
    const dispatch = useDispatch();

    //useState
    const [dataProduct, setProductData] = useState<dataType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    //fetching...
    const fetchData = async () => {
        try {
            const res = await fetch('https://dummyjson.com/products');
            const data = await res.json();
            setProductData(data.products);
            setLoading(false);
            console.log(data.products);
            
        } catch (error) {
            setLoading(true);
        }
    }

    //useEffect...
    useEffect(() => {
        fetchData();
    }, []);
    //addHandler
    const addHandler = (i: dataType) => {
        dispatch(add(i));
        toast.success("Item Added")

    }
    //coditon for Loading...
    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
            <CircularProgress size={100} />
        </Box>
        )
    }
    return (
        <Grid container spacing={2}>
  {dataProduct.map((i: dataType, index: number) => {
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} key={i.id}>
        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minWidth: 200, minHeight: 200 ,height:'500px' }}>
          <CardMedia
            component="img"
            image={i.images[0]}
            alt="Paella dish"
            sx={{ height: 200, width: 200, objectFit: 'contain' }}
          />
          <CardContent sx={{ alignItems: 'center' }} >
            <Typography gutterBottom variant="h5" component="div">
              {i.title}
            </Typography>
            <Typography>
            <Rating name="read-only" value={i.rating} readOnly />
            </Typography>
            <Button variant="contained" color="info" size='large' sx={{ marginTop:'10px'}} >{i.price}</Button>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary" sx={{marginTop:'-8px'}} onClick={() => {
              addHandler(i);
            }}>Add me</Button>
          </CardActions>
        </Card>
      </Grid>
    )
  })}
</Grid>

    )
}
//temp
export default Product;
