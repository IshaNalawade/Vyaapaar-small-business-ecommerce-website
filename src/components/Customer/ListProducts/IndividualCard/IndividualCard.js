import {  Typography,Grid,Card,IconButton,makeStyles,Box } from '@material-ui/core'
import React from 'react'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import "./IndividualCard.css"
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import {Alert,Button} from '@mui/material';
import Stripe from '../SearchedProducts/Stripe/Stripe';
import {useState} from 'react';


function IndividualCard({products,user}) {

  const [theArray, setTheArray] = useState([]);
  const [show, setShow] = useState(false);
  const [seller_mail,setSeller_mail] = useState("");
    const [totalPrice,setTotalPrice]=useState(0)
    const handleClose = () => setShow(false);

    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    const sum = 12131
  const handleShow =  (newElement,mail) =>{ 
    console.log(newElement.price)
    setSeller_mail(mail)
    

    setTheArray(old=>[...old,newElement]);
    setTotalPrice(totalPrice + parseInt(newElement.price));
   
    setTimeout(()=>{
     setShow(true);
     console.log(totalPrice)
    },1000)
     };

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
    const classes = useStyles();
    // var array = [1, 2, 3, 4, 5];
    // var sum = array.reduce(function(a, b){
    //     return a + b;
    // }, 0);

    return (<>
              {
                products.map((prod)=>(
                  <Box sx={{ flexGrow: 1 , p:'2rem'}}>
                    {/* {console.log(products.email)} */}
                  <Grid container spacing={1}>
                <div className="label">  <h3>{prod.name}</h3> </div>
                    <Grid item xs={12} md={12}>
                    
                    <Grid container spacing={3}>
                       
                        {
                    prod.product.map((product)=>(<>
                 
                  <Grid item xs={3} md={3}>
                        <Card key={product._id} className={classes.root2}>
               
                              <img width="304px" height="200px" src={product[0].imgUrl} alt=""/>
                            
                            <CardContent>
                                  <Typography gutterBottom variant="h5" component="h2">
                                  {product[0].productName}
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                  {product[0].productType}
                                  </Typography>
                                  <Typography variant="body2" color="textSecondary" component="p">
                                    Rs.{product[0].price}
                                    <div style={{display:'flex',float:'right',position:'relative',left:20}}>
                                      {/* {console.log(prod.email)} */}
                                    <IconButton > 
                                        <AddShoppingCartIcon style={{fill : 'black'}} onClick={()=>{handleShow(product[0],prod.email)}}/>
                                    </IconButton>
                                </div>
                                  </Typography>
                                </CardContent>
                        
                          </Card>
                          </Grid>

                    </>  ))
                    }

                     
                    </Grid>
                   
                    
    
                   
                    </Grid>
                  </Grid>
                  </Box>
                ))}











                    <Link to="/dashboard/customer/searched-products">
                    <h5 style={{textAlign:'center'}}>Search the products you want.</h5>
                    </Link>
                    <Offcanvas show={show} onHide={handleClose} placement="end" >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Shopping Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         {
           theArray.map((item)=>(
             <div style={{display:'flex',alignItems:'center',
             justifyContent:'space-between',borderBottom:'1px solid black'
             ,padding:'0.5rem'
             }} key={item._id}>
                <div style={{display:'flex',alignItems:'center',justifyContent:'left'}}>
               
                <div>
                  <img width="50px" height="50px" src={item.imgUrl} alt=""/>
                </div>
                <div>
                  <h6>{item.productName}</h6>
                </div>

                </div>

                
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                  
                <div>
                  Rs.{item.price}
                </div>
                  <div> <Button onClick={incrementCounter}>+</Button></div>
                <div> {counter} </div>
                <div><Button onClick={decrementCounter}>-</Button></div>
                </div>


            </div>
          ) )
         }
         <hr></hr>
         
         <h3>Total Bill: Rs. {totalPrice}</h3>
         
         <Stripe total={totalPrice} seller = {seller_mail} user={user} products = {theArray} />
        </Offcanvas.Body>
      </Offcanvas>
         
           
      

 </>)
}

export default IndividualCard
