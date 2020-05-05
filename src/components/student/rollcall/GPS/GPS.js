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

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function GPS() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

  const params = useParams();
  console.log(params);


  const watch = true;
      const {
        latitude,
        longitude,
        // error,
      } = usePosition(watch);


      const [rcid, setRcid] = React.useState(0)

      const handleSubmit = () => {
        // setQrcode(uuidv4());
        
    fetch('/student/rollcall/GPSRollcall',{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          rc_id: params.cs_id,
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
  .then(res => {
  async function fetchData() {
    const result = await axios.get(`/teacher/rollcall/findRCID/1/`)
    setRcid(result.data[0]["rc_id"]);
  
    console.log(result.data[0]["rc_id"]);
    }
    fetchData()
})
    

  }



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
   
    
    // .then(res => {
      // console.log(rcid)
      // async function putData() {
      
      fetch('/teacher/rollcall/updateQRcode',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            
            rc_id: rcid,
            qrcode: '',
            // cs_id: params.cs_id,
            // rc_inputsource: 'QRcode點名'
            
        })
    })
  };

  
  const [inputs, setInputs] = React.useState({
    rc_id:'',
    rc_inputsource:'',
    //qrcode:'',
    //宣告要接值的變數
  });

  const handleChange = user => event => {
    event.persist();
    setInputs(inputs => ({...inputs, [user]: event.target.value}));
    //不知道怎麼解釋哈哈哈哈
}


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
      <Typography>
      <Button onClick={handleSubmit}  style={{fontFamily:'Microsoft JhengHei', fontWeight:'bold'}} variant="contained" color="primary">

點名
</Button>
      </Typography>
        
    </Grid>    

      
        </Grid>
      </Backdrop>

        
      </Dialog>
    </div>
  );
}


