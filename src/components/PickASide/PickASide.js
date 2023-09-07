import React from 'react'
import "./PickASide.css"
import svg from  "./option.svg"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import disc from "./discord (8).png"
import instagram from "./instagram (7).png"
import {Box,Grid} from '@mui/material';
import Roadmap from './Roadmap/Roadmap';
import sanju from "./nnew1331.jpg"



function PickASide({user}) {
    return (<>
  
        <div>
        <Box  sx={{ flexGrow: 1,padding:'5rem' }}>
      <Grid container  flexDirection="row-reverse" alignItems="center" spacing={2}>
        <Grid style={{textAlign:'right'}}  item xs={12} md={3}>
        <div className="side__option">
                    <div>
                    <h2 style={{color:'white'}} >Buyer</h2>
                    <hr></hr>
                    </div>
                    <div>
                        <ul style={{textAlign:'left'}}>
                        <li  style={{color:'white'}}>
                        Browse through a wide range of products!



                        </li>
                        <li  style={{color:'white'}}>
                        Get the best products from shops around you!
          
                        </li>
                        <li  style={{color:'white'}}>

                        Chat with us to clear your doubts!
                        </li>
                        <li  style={{color:'white'}}>


                        Easy payment methods!
                         </li>
                        </ul>
                    </div>
                    <div>
                      
                        <Button
                        style={{backgroundColor:'rgb(131,0,0)',color:'white'}}
                         component={Link} to={{
                            pathname:'/sign-up-page',
                            state: { person: "buyer" }
                            }} variant="contained" >Continue</Button>
              
            
                    </div>
                  
                </div>
        </Grid>
        <Grid style={{textAlign:'right'}}  item xs={12} md={6}>
        <div>
                <img width="100%" height="100%"  src={svg} alt=""/>
            </div>
          
        </Grid>
        <Grid style={{textAlign:'right'}}  item xs={12} md={3}>
        <div className="side__option">
            <div>
                    <h2  style={{color:'white'}}>Seller</h2>
                    <hr></hr>
                    </div>
                    <ul style={{textAlign:'left'}}>
                        <li  style={{color:'white'}}>
                        Get notified when someone buys from you

                        </li>
                        <li  style={{color:'white'}}>
        
                        Get the average rating of similar businesses around you 
          
                        </li>
                        <li  style={{color:'white'}}>

                        Predict your rating
                        </li>
                        </ul>
                    <div>
                   
                    <Button 
                     style={{backgroundColor:'rgb(131,0,0)',color:'white'}}
                    component={Link} to={{
                            pathname:'/sign-up-page',
                            state: { person: "seller" }
                            }} variant="contained" >Continue</Button>
             
                    </div>
            </div>
        </Grid>
         <Grid item xs={12} md={12}>
         <h2 className="about">Roadmap</h2>
         <Roadmap/>
        </Grid>
        <Grid item xs={12} md={12}>
            
        <div>
            <h2 className="about">About Us</h2>
            <Grid style={{textAlign:'center',color:'white'}} container justifyContent="space-between"  alignItems="center" spacing={2}>
            <Grid style={{textAlign:'center'}}  item xs={12} md={4}>
                <Box sx={{ flexGrow: 1 }}>
                <Grid style={{textAlign:'center'}} container justifyContent="space-between"  alignItems="center" spacing={2}>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <img  style={{width:'300px',height:'300px' }} src='https://cdn.discordapp.com/attachments/854765906059722762/899746745108545546/unknown.png' alt=""/>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <h1>SANJU</h1>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                   <h2> CEO</h2>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <img src={disc} alt=""/> &nbsp;  <img src={instagram} alt=""/>
                </Grid>
                </Grid>
               
                </Box>


        </Grid>

        <Grid style={{textAlign:'center'}}  item xs={12} md={4}>
                <Box sx={{ flexGrow: 1 }}>
                <Grid style={{textAlign:'center'}} container justifyContent="space-between"  alignItems="center" spacing={2}>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <img  style={{width:'300px',height:'300px'}} src='https://cdn.discordapp.com/attachments/854765906059722762/899743421508513832/profile.jpg' alt=""/>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <h1>ISHA</h1>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                   <h2> CEO</h2>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <img src={disc} alt=""/> &nbsp;  <img src={instagram} alt=""/>
                </Grid>
                </Grid>
               
                </Box>


        </Grid>

        <Grid style={{textAlign:'center'}}  item xs={12} md={4}>
                <Box sx={{ flexGrow: 1 }}>
                <Grid style={{textAlign:'center'}} container justifyContent="space-between"  alignItems="center" spacing={2}>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <img  style={{width:'300px',height:'300px'}} src='https://media-exp1.licdn.com/dms/image/C5603AQGajRBQftAReg/profile-displayphoto-shrink_800_800/0/1614345713690?e=1640217600&v=beta&t=OOyPCDtY9cjXksNhPzsmLtKWKyaMrIO2G25Fd8vRd_Y' alt=""/>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <h1>JAY</h1>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                   <h2> CEO</h2>
                </Grid>
                <Grid style={{textAlign:'center'}}  item xs={12} md={12}>
                    <img src={disc} alt=""/> &nbsp;  <img src={instagram} alt=""/>
                </Grid>
                </Grid>
               
                </Box>


        </Grid>
        </Grid>
        </div>
        </Grid>


        </Grid>
      </Box>


        </div>


        
    </>)
}

export default PickASide
