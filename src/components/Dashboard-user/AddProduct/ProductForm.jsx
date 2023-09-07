import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Paper,Button } from '@material-ui/core';
import { addProductForm } from '../../../API';
import { useForm } from 'react-hook-form';
import SaveIcon from '@material-ui/icons/Save'
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  button: {
    margin: theme.spacing(1),
  },
  alert: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));


function ProductForm() {
    const classes = useStyles();
    const [alert,setAlert]=useState(false)
    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = async (data) => 
    {

        console.log(data.imgUrl);
       fetch('http://localhost:5000/api/user/addProduct',{
        method:'POST',
        headers:{
            "Accept":"application/json",
            "Content-Type":"application/json",
          
        },
        body:JSON.stringify(data)
})

        setAlert(true);
        

    }

    return (
        <div>
                <form onSubmit={handleSubmit(onSubmit)}  noValidate autoComplete="off">
                <div className={classes.root}>
              <Grid container spacing={1} >
                            <Grid item xs={6} >
                            <div className={classes.paper}>
                            <TextField 
                             autoComplete="off"
                             {...register("productName", {
                               required: "Required",
                             })}
                             name="productName"
                             id="productName" label="Product Name" variant="outlined" />
                            </div>
                            </Grid>
                            <Grid item xs={6}>
                            <div className={classes.paper}>
                            <TextField 
                            autoComplete="off"
                            {...register("productType", {
                              required: "Required",
                            })}
                            name="productType"
                             id="productType" label="Type" variant="outlined" />
                            </div>
                            </Grid>
                            <Grid item xs={6}>
                            <div className={classes.paper}>
                            <TextField 
                            autoComplete="off"
                            {...register("price", {
                              required: "Required",
                            })}
                            name="price"
                            id="price" label="Price (Rs.)" variant="outlined" />
                            </div>
                            </Grid>
                            <Grid item xs={6}>
                            <div className={classes.paper}>
                            <TextField 
                            autoComplete="off"
                            {...register("imgUrl", {
                              required: "Required",
                            })}
                            name="imgUrl"
                            id="imgUrl" label="Enter URL" variant="outlined"></TextField>

                             {errors.message && errors.message.message}
                            </div>
                            </Grid>
                            <Grid item xs={12}>
                            <div className={classes.paper}>
                            <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    size="large"
                                    className={classes.button}
                                    startIcon={<SaveIcon />}
                                >
                                    Save
                                </Button>
                                </div>
                            </Grid>
                    </Grid>
    </div>

                </form>
                {
                    alert ?
                    (
                        <>
                        <div className={classes.root}>
                              <Alert variant="filled" severity="success">
                              Product is being reviewed and will be added soon!
                            </Alert>
                            </div>
                        </>
                    ):null
                }
        </div>
    )
}

export default ProductForm
