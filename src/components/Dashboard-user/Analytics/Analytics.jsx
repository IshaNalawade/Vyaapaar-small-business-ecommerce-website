import React,{useState,useCallback,useRef} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Line } from 'react-chartjs-2';
import MapComponent from './MapComponent';
import MapGL,{Marker,NavigationControl,GeolocateControl } from 'react-map-gl';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';    
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Geocoder from 'react-map-gl-geocoder'
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  root_form:{
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
    paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function Analytics() {
  const classes = useStyles();
  const [viewport, setViewport] = React.useState({
    latitude: 21.084488,
    longitude: 72.6430332,
    zoom: 8,

});
const [userLoc,setUserLoc]=useState([]);
const percentage = 68;
const [category, setCategory] = React.useState('');
const handleChange = (event) => {
  setCategory(event.target.value);
};
const [cuisine, setCuisine] = React.useState('');
const handleChangeCusine = (event) => {
  setCuisine(event.target.value);
};

const [avgCost,setAvgCost]=useState('')
const [booking,setBooking]=useState('')
const [deliv,setDeliv]=useState('')
const [range,setRange]=useState('')
const [rating,setRating]=useState('')

const [predict,setPredict]=useState('')
const handleCalculate=async()=>{
 
 fetch('http://localhost:5000/api/ml/rating',{
    method:'POST',
    credentials: "include",
    mode: "cors",
    headers:{
        "Accept":"application/json",
        "Content-Type":"application/json",
       
    },
    body:JSON.stringify(
      {
        "cusine":cuisine,
        "x":userLoc[1],
        "y":userLoc[0]
      }
    ),
  })
  .then(res=>res.json())
  .then((data) => {
    setRating(data);
 
  });

  }

const handleCalculate2=async()=>{
 
   fetch('http://localhost:5000/api/ml/predict',{
      method:'POST',
      credentials: "include",
      mode: "cors",
      headers:{
          "Accept":"application/json",
          "Content-Type":"application/json",
         
      },
      body:JSON.stringify(
        {
          "cost":avgCost,
          "book":booking,
          "delivery":deliv,
          "prange":range
        }
      ),
    })
    .then(res=>res.json())
    .then((data) => {
      setPredict(data);
      console.log(data)
    });
  
    }
const geolocateControlStyle= {
  right: 15,
  top: 10
};

const geocoderContainerRef = useRef();
const mapRef = useRef();
const handleViewportChange = useCallback(
  (newViewport) => setViewport(newViewport),
  []
);

// if you are happy with Geocoder default settings, you can just use handleViewportChange directly
const handleGeocoderViewportChange = useCallback(
  (newViewport) => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return handleViewportChange({
      ...newViewport,
      ...geocoderDefaultOverrides
    });
  },
  [handleViewportChange]
);
const MAPBOX_TOKEN =
  "pk.eyJ1IjoiamF5bmFydXRvIiwiYSI6ImNrcGY3MDFybzA4emQydnFvaHA1emY1cXAifQ.sHf7OSLjvHC6caHHVXTgQw";



  return (<>
    <div className={classes.root} style={{marginTop:'6rem'}}>
      <Grid  style={{padding:'1rem'}} container spacing={3}>
      <Grid item xs={12} md={6}>

          <Grid container spacing={3}>
          <Grid item xs={12} md={12}>
          <Paper className={classes.paper}>
          <div className={classes.root}>
      <Grid  style={{alignItems:'center',justifyContent:'center'}} container spacing={3}>
       <Grid item xs={12} md={12}>
         <h2>Average Rating</h2>
        </Grid>
      <Grid item xs={12} md={6}>
        {
          userLoc ?
          (
            <TextField value={userLoc[0]} id="standard-basic1" disabled />
          ):
          (
            <TextField id="standard-basic" label="Longitude" />
          )
        }
     
        </Grid>
        <Grid item xs={12} md={6}>
        {
          userLoc ?
          (
            <TextField value={userLoc[1]} id="standard-basic2" disabled />
          ):
          (
            <TextField id="standard-basic" label="Latitude" />
          )
        }
        </Grid>
        <Grid item xs={12} md={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          onChange={handleChange}
        >
          <MenuItem value={10}>Food Products</MenuItem>
          <MenuItem value={20}>Clothes & Accessories</MenuItem>
          <MenuItem value={30}>Skin Care</MenuItem>
          <MenuItem value={40}>Services</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField placeholder="Cuisine" value={cuisine} onChange={handleChangeCusine} ></TextField>
        </Grid>

        <Grid item xs={12} md={6}>
       {rating ? rating : <div>Please wait for few seconds after clicking</div>}
        </Grid>
        <Grid item xs={12} md={6}>
        <Button onClick={handleCalculate} variant="contained" style={{backgroundColor:'rgb(131,0,0)',color:'white'}}>
          Calculate
        </Button>
          </Grid>
       
        </Grid>
        </div>
 

  
          </Paper>
        </Grid>
      

        <Grid item xs={12} md={12}>
          <Paper className={classes.paper}>
          <div className={classes.root}>
      <Grid  style={{alignItems:'center',justifyContent:'center'}} container spacing={3}>
      <Grid item xs={12} md={12}>
         <h2>Predict Rating</h2>
        </Grid>
      <Grid item xs={12} md={6}>

            <TextField value={avgCost} placeholder="Average Cost" onChange={e => setAvgCost(e.target.value)}/>
          
     
        </Grid>
        <Grid item xs={12} md={6}>
     
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label2">Online Booking</InputLabel>
        <Select
          labelId="demo-simple-select-label2"
          id="demo-simple-select2"
          value={booking}
          onChange={e=>setBooking(e.target.value)}
        >
          <MenuItem value={1}>Yes</MenuItem>
          <MenuItem value={0}>No</MenuItem>

        </Select>
      </FormControl>

        </Grid>
        <Grid item xs={12} md={6}>
        <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Online Delivery</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={deliv}
          onChange={e=>setDeliv(e.target.value)}
        >
          <MenuItem value={1}>Yes</MenuItem>
          <MenuItem value={0}>No</MenuItem>

        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
        <TextField placeholder="Price Range" value={range} onChange={e=>setRange(e.target.value)} ></TextField>
        </Grid>

        <Grid item xs={12} md={6}>
        {predict ? predict : <div>Please wait for few seconds after clicking</div>}
  
        </Grid>
        <Grid item xs={12} md={6}>
        <Button variant="contained" onClick={handleCalculate2} style={{backgroundColor:'rgb(131,0,0)',color:'white'}}>
          Calculate
        </Button>
          </Grid>
       
        </Grid>
        </div>
 

  
          </Paper>
        </Grid>
      
        </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper style={{height:'100%'}} className={classes.paper}>
        
                  <MapGL
                    ref={mapRef}
                    {...viewport}
                    width="100%"
                    mapStyle="mapbox://styles/jaynaruto/ckpf7miyr0l2917vxppvlz8sd"
                    height="100%"
                    onViewportChange={handleViewportChange}
                    mapboxApiAccessToken={MAPBOX_TOKEN}
                    onDblClick={(coords)=>setUserLoc(coords.lngLat)}
                  >
                    <div
                    ref={geocoderContainerRef}
                    style={{ position: "relative", top: 10, left:10, zIndex: 1}}
                  />
                    <div
                                                      style={{
                                                          position: "absolute",
                                                          top: 0,
                                                          right: 20,
                                                          padding: "10px",
                                                        
                                                      }}
                                                      >
                                                        <GeolocateControl
                                                          style={geolocateControlStyle}
                                                          positionOptions={{enableHighAccuracy: true}}
                                                          trackUserLocation={true}
                                                          auto
                                                        />
                                                           <Geocoder
                                                           
                                                              mapRef={mapRef}
                                                              containerRef={geocoderContainerRef}
                                                              onViewportChange={handleGeocoderViewportChange}
                                                              mapboxApiAccessToken='pk.eyJ1IjoiamF5bmFydXRvIiwiYSI6ImNrcGY3MDFybzA4emQydnFvaHA1emY1cXAifQ.sHf7OSLjvHC6caHHVXTgQw'
                                                              position="top-left"
                                                            />
                                                      <NavigationControl />
                                                      </div>
                  </MapGL>
          </Paper>
        </Grid>
      </Grid>
    </div>
 </> );
}