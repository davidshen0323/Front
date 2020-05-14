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
  imageSrc: {
    //position: 'absolute',
    maxHeight:'200px',
    maxWidth:'200px',
    display:'block',
    margin:theme.spacing(2),
  },
  button: {
    width: '150px',
    margin:'auto',
    marginTop: 20,
    // marginLeft: 10,
    marginBottom: 10,
    margin: theme.spacing(1),
    fontFamily: 'Microsoft JhengHei',
    color: "white",
    fontSize:16,
    backgroundColor: "#f8b62b",
    fontWeight:'bold',
  },
  appBar: {
    backgroundColor:'#fff8e1',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GPS() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [gps,setGps] = React.useState([]);
  
  useEffect(() => {
    async function fetchData() {
        const result = await axios.get(`/student/rollcall/allGPSRollcall/${params.cs_id}`);
        
        console.log(result.data);
        // if(result.data['rc_end'] === 0)
        // {
        setGps(result.data);
        // }
    }
    fetchData();
   }, []);

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
        
        console.log(gps)
        gps.map( (gpslist, index) => gpslist["rc_end"] === 0 ?
        
      fetch('/student/rollcall/GPSRollcall',{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          rc_id: gpslist['rc_id'],
          gps_point: latitude + ","  + longitude
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
      
      :
      <div></div>
      )
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <Button  onClick={handleClickOpen} >
       <ComButton title="GPS" url="https://image.flaticon.com/icons/svg/2807/2807144.svg" className={classes.button}/>
      </Button>
      
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <Backdrop className={classes.backdrop} open >
      <AppBar className={classes.appBar}>
          <Toolbar>
            <Grid item xs={12} sm={12}></Grid>
    
    <IconButton  color="#582707" onClick={handleClose}>
      <CloseIcon />
    </IconButton>  
    </Toolbar>
    </AppBar>

      
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
      >
<Grid item xs={12}>
        <img
                className={classes.imageSrc}
                alt="complex"
                src="https://image.flaticon.com/icons/svg/1321/1321793.svg"
          />
        </Grid>
    <Grid item  xs={12}>
      <Button onClick={handleSubmit}   className={classes.button}>
    我要點名!
</Button>
        
    </Grid>    

      
        </Grid>
      </Backdrop>

        
      </Dialog>
    </div>
  );
}


