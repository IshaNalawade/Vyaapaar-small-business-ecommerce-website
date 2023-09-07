import { makeStyles, Typography,Grid,Paper,Card,IconButton } from '@material-ui/core'
import React, { useState,useEffect } from 'react'
import BCO from '../BreadCrumbOrder/BCO'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring'; // web.cjs is required for IE 11 support
import PropTypes from 'prop-types';
import ProductForm from './ProductForm';
import { getProductForm } from '../../../API';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

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
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      paper_modal:{
        backgroundColor: theme.palette.background.paper,
        borderRadius:20,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      }
  }));
  const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
      from: { opacity: 0 },
      to: { opacity: open ? 1 : 0 },
      onStart: () => {
        if (open && onEnter) {
          onEnter();
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited();
        }
      },
    });
  
    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  });
  
  Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
  };
function Addproduct( {user,products}) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    console.log(products)
    return (
        <>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:20,marginTop:'5rem'}}>
            <div>
            <Typography variant="h5" color="textSecondary">
                Add Product
                </Typography>
            </div>
            <div>
            <Button onClick={handleOpen} variant="contained" style={{backgroundColor:"rgb(131, 0, 0)",color:'white',borderRadius:20}}>
            Add Product
            </Button>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
        <Fade in={open}>
          <div className={classes.paper_modal}>
            <ProductForm/>
          </div>
        </Fade>
      </Modal> 
            </div>
        </div>
  <hr></hr>

  <Grid style={{padding:20}}  container  spacing={3}>
    

  <Grid item xs={12} >
  <Grid container spacing={3}>
  
        { 
        products.map((email)=>(
          user.email===email.email ? 
         
          email.product.map((product)=>(
              <>
              

              <Grid item xs={3} md={3}>
                      <Card key={product._id} className={classes.root2}>
             
                            <img width="307px" height="200px" src={product[0].imgUrl} alt=""/>
                          
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
                                  <IconButton>
                                      <AddShoppingCartIcon style={{fill : 'black'}}/>
                                  </IconButton>
                              </div>
                                </Typography>
                              </CardContent>
                      
                        </Card>
                        </Grid>
              </>
          ))
          : null
        ))
       
        }
  </Grid>
  </Grid>
        

        </Grid>


   </>)
}

export default Addproduct
