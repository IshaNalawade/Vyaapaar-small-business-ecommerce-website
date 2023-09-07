import React, { useState } from 'react'
import useStyles from "./styles"
import {CardActions, makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import { Card, CardContent,
  CardActionArea,CardMedia,
  Grid,Typography,IconButton,
  TextField,Container,
  Button
 } from '@mui/material'
 import { useDispatch, useSelector } from 'react-redux';
import {  selectcart } from '../../../redux/cartSlice';


export default function Cart() {
  console.log('cart')
  const cart = useSelector(selectcart)
  console.log(cart.cart)
const classes=useStyles();
    const EmptyCart=()=>(
        <Typography variant="subtitle1">You have no items in your shopping cart,
        <Link className={classes.link} to="/">start adding some</Link>!
      </Typography>
    )
    const FilledCart=()=>(
        <>
        <Grid container spacing={3} >
        {/* {
            cartItems.map((product)=>(
                <>
                

        <Grid  item xs={3}>
        <Card key={product._id} className={classes.root2}>
      <CardActionArea>
        <CardMedia
        component="img"
          className={classes.media}
          image={product.imgUrl}
         
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {product.productName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {product.productType}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Rs.{product.price}
           
            <div style={{display:'flex',float:'right',position:'relative',left:20}}>
            <IconButton>
                <DeleteIcon/>
            </IconButton>
        </div>
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button type="button" size="small">-</Button>
          <Typography>&nbsp;7&nbsp;</Typography>
          <Button type="button" size="small">+</Button>
        </div>
        <Button variant="contained" type="button" color="secondary">Remove</Button>
      </CardActions>
      </CardActionArea>
 

    </Card>
        
      

              

</Grid>
                </>
            ))
        } */}
        </Grid>
        <div className={classes.cardDetails} >
           <Typography variant="h4" >
        Subtotal:
           </Typography>
           <div>
               <Button className={classes.emptyButton}
               size="large"
               variant="contained"
               color="secondary"
                type="button"
               
                >Empty Cart</Button>
            <Button className={classes.checkoutButton}
               size="large"
               type="button"
               variant="contained"
               color="primary"
               

                >Checkout</Button>
           </div>
        </div>
        </>
    )
    // if (!itemsPrice.reduce((a, b) => a + b, 0)) return 'Loading';
    return (
       	<Container>
        <div className={classes.toolbar} />
        <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
        { 1===1 ? <FilledCart/>  : <EmptyCart/> }
      </Container>
    )
}
