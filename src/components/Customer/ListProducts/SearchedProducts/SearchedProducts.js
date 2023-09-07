import { Card, CardContent,CardActionArea,CardMedia,Grid,Typography,IconButton,TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {makeStyles } from '@material-ui/core'
import "./SearchedProducts.css"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { fetchCart } from '../../../../redux/cartSlice';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
 import Select from '@mui/material/Select';
import { Offcanvas } from 'react-bootstrap';
import {Alert,Button} from '@mui/material';
import Stripe from './Stripe/Stripe';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
    },
    root2:{
        maxWidth: 345,
    },
    media: {
        maxHeight: 140,
      },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    }
  
  }));

function SearchedProducts({products}) {
  const dispatch = useDispatch()
  const [theArray, setTheArray] = useState([]);

  const handleAddToCart=(product)=>{
      //  await addItemToCart({
      //   productName:product.productName,
      //   productType:product.productType,
      //   price:product.price,
      //   imgUrl:product.imgUrl
      //    })
   
      dispatch(fetchCart({
        cart:
        {
            productName:product.productName,
            productType:product.productType,
            price:product.price,
            imgUrl:product.imgUrl
        }
    }))
    
      
  }

    const [search, setSearch] = useState();


    const classes = useStyles();
    const filtered = products.filter((prod) => {
      return prod.productName.toLowerCase().indexOf(search) !== -1;
    });
    const [show, setShow] = useState(false);
    const [totalPrice,setTotalPrice]=useState([])
    const handleClose = () => setShow(false);
    const handleShow =  (newElement) =>{ 
   


   setTheArray(old=>[...old,newElement]);
   setTotalPrice(old=>[...old,newElement.price]);
  
   setTimeout(()=>{
    setShow(true);
    console.log(totalPrice)
   },1000)
 
    };
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    const [click,setClick]=useState(1)
    const [age, setAge] = React.useState('');
  
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const sum = 12131
    return (<>
        <div>
    
                    
                <Grid style={{padding:20}}  container  spacing={3}>
                <Grid  item xs={12} md={9}>
                <div>
            <form className="search__container">
                <div className="wrapper">
                <input onChange={e=>setSearch(e.target.value)} placeholder="Search by name"/>
                <button type="submit">Search</button>

                </div>
            </form>
        </div>
                  </Grid>
                  <Grid  item xs={12} md={3}>
                  <div className="filter__btn__dropdown" >
                    <FormControl variant="standard" sx={{ m: 1, minWidth: '100%' }}>
                      <InputLabel id="demo-simple-select-standard-label">{`Sorting by price-`}</InputLabel>
                      <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={age}
                        onChange={handleChange}
                        label={`Sorting by price-`}
                      style={{border:'none'}}
                      >
                        <MenuItem value={10}>Low to High</MenuItem>
                        <MenuItem value={20}>High to Low</MenuItem>
                
                      </Select>
                    </FormControl>

                    </div>
                  </Grid>

                  
                 <Grid item xs={12} >

    <Grid container spacing={3}>
          {
              filtered.map((product)=>(
                  <>
                  

          <Grid  item xs={12} md={3}>
          <Card key={product._id} className={classes.root2}>
        <CardActionArea>
          <CardMedia
               onClick={()=>{handleShow(product)}}
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
                  <AddShoppingCartIcon 
             
                  />
              </IconButton>
          </div>
            </Typography>/;
          </CardContent>
  
        </CardActionArea>
      </Card>               
  </Grid>
                  </>
              ))
              
          }
    </Grid>
    </Grid>
          
  
          </Grid>
         
        </div>
        
   </> )
}

export default SearchedProducts
