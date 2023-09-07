import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./OrdersCard.css";
import AlarmIcon from '@material-ui/icons/Alarm';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Grid, IconButton,Paper, Box } from '@material-ui/core';
import {  Line } from "react-chartjs-2"
import LoopIcon from '@material-ui/icons/Loop';
import RecentOrder from '../RecentOrders/RecentOrder';
import BCO from "../BreadCrumbOrder/BCO"
import TableOrder from '../TableOrder/TableOrder';
import analytics from "./analytics.svg"
import cart from "./cart.svg"
import { CardMedia } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function OrdersCard({user}) {
  const theme = useTheme();
  const classes = useStyles();
  return (<>

  <Grid  container style={{padding:'4rem',marginTop:'2rem'}}  spacing={3}>
  <Grid  item xs={12} md={6} >
  <Card style={{ display: 'flex' }}>
  <Grid  container spacing={3}>

    <Grid style={{textAlign:'center'}} item xs={12} md={6} >
      <div>
        <CardContent style={{marginTop:'2rem'}}>
          <Typography component="div" variant="h4">
            Analytics
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            <br></br>
          <Link to="/dashboard/user/analytics">
           <Button variant="contained" style={{backgroundColor:'rgb(131,0,0)',borderRadius:20}} >Continue</Button>
           </Link>
          </Typography>
        </CardContent>
      </div>
      </Grid>
      <Grid item xs={12} md={6} >
      <img width="100%" height="100%" src={analytics} alt=""/>
      </Grid>
      


  </Grid>
  </Card>
  </Grid>
  <Grid item xs={12} md={6} >
  <Card style={{ display: 'flex' }}>
  <Grid  container spacing={3}>

    <Grid style={{textAlign:'center'}} item xs={12} md={6} >
      <div>
        <CardContent style={{marginTop:'2rem'}}>
          <Typography component="div" variant="h4">
            Add Product
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
          <br></br>
          <Link to="/dashboard/user/add-product">
           <Button variant="contained" style={{backgroundColor:'rgb(131,0,0)',borderRadius:20}} >Continue</Button>
           </Link>
          </Typography>
        </CardContent>
      </div>
      </Grid>
      <Grid item xs={12} md={6} >
      <img width="100%" height="100%" src={cart} alt=""/>
      </Grid>
      


  </Grid>
  </Card>
  </Grid>

        
        <Grid item xs={12} >
        <TableOrder user={user} />
        </Grid>
        </Grid>

  </>);
}
