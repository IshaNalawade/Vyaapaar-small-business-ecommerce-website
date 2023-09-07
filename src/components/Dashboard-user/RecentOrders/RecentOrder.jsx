import React, { useEffect, useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { CardActionArea } from '@material-ui/core';
import { ImportantDevices } from '@material-ui/icons';
import { getImg } from '../../../API';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function RecentOrder() {
  const classes = useStyles();
  const theme = useTheme();
  const [img,setImg]=useState([])
  useEffect(()=>{
    const fetchData = async () => {
      fetch("http://localhost:5000/api/user/getImg", {
        method: "GET",
        credentials: "include",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setImg(data);
        });
    };
fetchData();        
},[])
  return (<>
    
     {
       img.map((img,key)=>(
       
       <>
       <Card className={classes.root}>
      <CardMedia
        key={img._id}
        className={classes.cover}
        component="img"
        image={img.imgUrl}
        title="Live from space album cover"
      />

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography variant="subtitle1" color="textSecondary">
            Mac Miller
          </Typography>
          <p>
              DESCRIPTION
          </p>
        </CardContent>
      </div>
      </Card>
       </>
       ))
     }
        

  </>);
}