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
import QRCode from 'qrcode.react';
import Typography from '@material-ui/core/Typography';
import {useParams} from "react-router-dom";
import QrReader from 'react-qr-reader'
import MuiAlert from "@material-ui/lab/Alert";
import {useState} from  "react";
import Snackbar from "@material-ui/core/Snackbar";
import {DialogActions} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


export default function Qrcode() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [change, setChange] = React.useState(0);  
  // 成功小綠綠
  const [openS, setOpenS] = React.useState(false);
  // 失敗小紅1
  const [openErr1, setOpenErr1] = React.useState(false);
  // 失敗小紅1
  const [openErr2, setOpenErr2] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    cs_id:'',
  
    //宣告要接值的變數
});
  // const params = useParams();
  // console.log(params);
  // const csid = params.cs_id;
  // console.log(params.cs_id);
   
  
  //QRcode
   const [scan, setScan] = useState();

   function handleScan (scan) {
     if(scan){
       setScan(scan);
       setChange(1);
     }
   }
   const ErrClose = () => {
    setOpenS(false);
    setOpenErr1(false);
    
  };  
   function handleError (err) {
     console.error(err);
   }
  const handleClickOpen = () => {
    setOpen(true);  
    setScan("");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = cs_id => event => {
    event.persist();
    setInputs(inputs => ({...inputs, [cs_id]: event.target.value}));
    //不知道怎麼解釋哈哈哈哈
    setChange(1);
}   

const submitClick = () => {
console.log(scan)
fetch('/student/rollcall/QRcodeRollcall/'+scan+'/',{
  method: 'PUT',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({})
})
.then(res => {
                    
  async function fetchres(){
  const rq = await res.text();  //接收後端傳來的訊息
  if (rq === "request failed. This rollcall was closed by teacher!")
  {
      //alert("點名失敗! 老師已關閉點名!");
      setOpenErr1(true);
      console.log(1);
      
  }
  else if(rq === "request successful! the QRcode rollcall record has already added!") 
  {
      //alert("點名成功!");
      setOpenS(true);
      console.log(2);
      // setQrcode(null);   
    }
    else
    {
        //alert("QRcode不存在!");
        setOpenErr2(true);
        console.log(2);
        // setQrcode(null);   
      }
    
    
  } })
    
  
    }


  return (
    <div>
      <Button onClick={handleClickOpen} >
       <ComButton title="QRcode" url="https://image.flaticon.com/icons/svg/1827/1827680.svg" />
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
      <QrReader
        // ref={qr}
        facingMode="environment"
        delay={300}
        style={{width:250}}
        onError={handleError}
        onScan={handleScan}
      />
      </Typography>
        
        {/* <QRcodeMade /> */}
    </Grid>    

      
       
        <DialogActions>
        <Button disabled={change===0 ? true : false} onClick={submitClick} color="primary" >我要點名!</Button>
        {/* 成功小綠框 */}
        <Snackbar open={openS} autoHideDuration={2000} onClose={ErrClose} style={{marginBottom:100}}>
            <Alert severity="success">
              點名成功！
            </Alert>
        </Snackbar>
        {/* 失敗小紅框1 */}
        <Snackbar open={openErr1} autoHideDuration={2000} onClose={ErrClose} style={{marginBottom:100}}>
            <Alert severity="error">
              點名失敗！老師已關閉點名！
            </Alert>
        </Snackbar>
        {/* 失敗小紅框2 */}
        <Snackbar open={openErr2} autoHideDuration={2000} onClose={ErrClose} style={{marginBottom:100}}>
            <Alert severity="error">
              QRcode不存在！
            </Alert>
        </Snackbar>
      </DialogActions>
 </Grid>
      </Backdrop>

        
      </Dialog>
    </div>
  );
}
