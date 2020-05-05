import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Backdrop from '@material-ui/core/Backdrop';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import ComButton from "../../../ComButton";
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {useParams} from "react-router-dom";
import { usePosition } from 'use-position';
import axios from 'axios';
import {useState,useEffect} from 'react';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  gpslogo:{
    width: '150px',
    height:'150px',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GPS() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [gps,setGps] = React.useState([]);

  const params = useParams();
  //console.log(params.cs_id);


  const watch = true;
      const {
        latitude,
        longitude,
        // error,
      } = usePosition(watch);


      // const [rcid, setRcid] = React.useState(0)

      const handleSubmit = () => {
        console.log("rcid",gps.rc_id)
    fetch('/student/rollcall/GPSRollcall',{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          rc_id: gps.rc_id,
          gps_point: longitude + ","  + latitude
      })
  })
  .then(res => {
                    
    async function fetchres(){
    const rq = await res.text();  //接收後端傳來的訊息
    if (rq === 'request failed. This rollcall was closed by teacher!')
    {
        alert("點名失敗! 老師已關閉點名!");
        console.log(1);
        
    }
    else if(rq === 'request failed. GPS point distance too far!') 
    {
        alert("點名失敗! 您不再範圍內!");
        console.log(2);
        // setQrcode(null);   
    }
    else if(rq === 'request successful! the GPS rollcall record has already added!') 
    {
        alert("點名成功!");
        console.log(3);
        // setQrcode(null);   
    }
    
    
} fetchres() })

  }


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


useEffect(() => {
  async function fetchData() {
      const result = await axios.get(`/student/rollcall/allGPSRollcall/${params.cs_id}`);
      
      console.log(result.data);
 
      setGps(result.data);
  }
  fetchData();
 }, []);


  return (
    <div>
      <Button  onClick={handleClickOpen} >
       <ComButton title="GPS" url="https://image.flaticon.com/icons/svg/2807/2807144.svg" className={classes.button}/>
      </Button>
      
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <Backdrop className={classes.backdrop} open >
      <AppBar >
          <Toolbar>
            <Grid item xs={12} sm={12}></Grid>
    
    <IconButton  color="inherit" onClick={handleClose}>
      <CloseIcon />
    </IconButton>  
    </Toolbar>
    </AppBar>

      
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >

    <Grid item  xs={12}>
      <LocationOnIcon color='disabled' className={classes.gpslogo}/>
      <Typography>
      <Button onClick={handleSubmit}  style={{fontFamily:'Microsoft JhengHei', fontWeight:'bold'}} variant="contained" color="primary" alignItems="center">
    我要點名!
</Button>
      </Typography>
        
    </Grid>    

      
        </Grid>
      </Backdrop>

        
      </Dialog>
    </div>
  );
}


