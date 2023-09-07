import React from 'react'
import banner from "./vyaapaar.com.png"
import "./Banner.css"
import {Box,Button,Grid} from '@mui/material';
import discount from "./discount.svg"
function Banner() {
    return (<>
           {/* <img 
      style={{width:'100%'}}
        src="https://wallpaperaccess.com/full/2593108.png"
        /> */}
            {/* <img className="banner__img" src={banner} alt=""/> */}
            {/* <Box  sx={{ flexGrow: 1 }}>
      <Grid container  flexDirection="row-reverse" alignItems="center" spacing={2}>

        <Grid style={{textAlign:'left'}} item xs={12} md={5}>
            
        </Grid>
        
        <Grid style={{paddingLeft:'10rem'}}  item xs={12} md={6}>
            
            <Grid  item xs={12} md={5}>
            <Grid container alignItems="center" spacing={2}>
            <Grid  item xs={12} md={12}>
            <div  className="introduction__text">
                    <h1 style={{color:'#000'}}>
                   WELCOME
                    </h1>
            </div>
            </Grid>
            <Grid style={{textAlign:'left'}} item xs={12} md={12}>
            <ul>
                <li> Browse through a wide range of products!</li>
                <li>Get the best products from shops around you! </li>
                <li> Chat with us to clear your doubts!</li>
                <li>Easy payment methods! </li>
       
            </ul>
            </Grid>
    
            <Grid style={{textAlign:'left'}} item xs={12} md={10}>
            <div   className="introduction__btns">

    
                
                </div>
            </Grid>
        </Grid>
    
    
    
        
            </Grid> 
            </Grid>
            <Grid item xs={0} md={1}>
            </Grid>
        </Grid>-
        </Box> */}
         <div >
        <Box style={{marginTop:'8rem'}}  sx={{ flexGrow: 1 }}>
      <Grid flexDirection="row-reverse" container  alignItems="center" spacing={2}>
        <Grid item xs={12} md={6}>
     
        <div id="home" className="introduction__img" >
                {/* <Player>
            <source  src={gif} />
            </Player> */}
     <div><img width="150%" height="150%" src={discount} alt=""/></div>
            
            </div>
       
        </Grid>
        <Grid className="p1__bg" style={{display:'flex',justifyContent:'space-evenly'}} item xs={12} md={6}>
       
        <div  className="introduction__text">
                <h1 style={{color:'white',width:'100%'}} >
                Welcome to Vyaapaar
                </h1>
           
            <div  className="introduction__btns">
            <Box sx={{ flexGrow: 1 }}>
          <Grid justifyContent="space-between"  container spacing={2}>
           <Grid item xs={12} md={12}>
           {/* <ul >
                <li style={{color:'white'}}> Browse through a wide range of products!</li>
                <li style={{color:'white'}}>Get the best products from shops around you! </li>
                <li style={{color:'white'}}> Chat with us to clear your doubts!</li>
                <li style={{color:'white'}}>Easy payment methods! </li>
       
            </ul> */}
            <h3>WE SERVE HAPPINESS!</h3>

            </Grid>

            </Grid>
            </Box>
                

               

            </div>
            
            </div>
          
        </Grid>
        </Grid>
    </Box>
</div>

    </>)
}

export default Banner
