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
// import QRcodeMade from './QRcodeMade';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import QRCode from 'qrcode.react';
import Typography from '@material-ui/core/Typography';
import {useParams} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import { usePosition } from 'use-position';
import { GetApp } from '@material-ui/icons';
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

export default function Qrcode() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [qrcode , setQrcode] = React.useState('0');
  
  
  const params = useParams();
  
  // console.log(params.cs_id);
  
  // useEffect(() => {
    //   async function getUuidv4() {
      //   const test = uuidv4(); //qrcode亂碼
      //   setQrcode(test);
      //   }
      //   getUuidv4();
      // }, [])
      
      const watch = true;
      const {
        latitude,
        longitude,
        // error,
      } = usePosition(watch);
      
      // const test = uuidv4();
      
      
      const handleClickOpen = () => {
        setOpen(true);
        setQrcode(uuidv4());
        
      };
      
      const handleChangeQR = () => {
        
      }
      const [rcid, setRcid] = React.useState(0)
      
      const handleSubmit = () => {
        // setQrcode(uuidv4());
        
    fetch('/teacher/rollcall/addrollcall',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          
          // rc_inputsource:inputs.way,
          qrcode: qrcode,
          // @ts-ignore
          cs_id: params.cs_id,
          rc_inputsource: 'QRcode點名',
          gps_point: longitude + ","  + latitude
      })
  })
  .then(res => {
                    
    async function fetchres(){
    const rq = await res.text();  //接收後端傳來的訊息
    if (rq === 'request failed. teacher not in this class!')
    {
        alert("點名失敗! 您不是此課程的老師!");
        console.log(1);
        
    }
    else if(rq === "request successful! the rollcall has already added!") 
    {
        alert("點名成功!");
        console.log(2);
        // setQrcode(null);   
    }
    
    
} fetchres() })
  .then(res => {
  async function fetchData() {
    const result = await axios.get(`/teacher/rollcall/findRCID/${qrcode}/`)
    setRcid(result.data[0]["rc_id"]);
  
    console.log(result.data[0]["rc_id"]);
    }
    fetchData()
})
    

  }
  // const Rcid = ['rc_id'];
  
  
  const handleClose = () => {
    
    setOpen(false);
    
    
    // .then(res => {
      console.log(rcid)
      async function putData() {
      
      fetch('/teacher/rollcall/closedRollcall/',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            
            rc_id: rcid,
            
        })
    })
      .then(res => {
          setQrcode('0');
      })
    }
    putData();
     
    
  };

  
  // const [inputs, setInputs] = React.useState({
    // rc_inputsource:'',
    //qrcode:'',
    //宣告要接值的變數
  // });

//   const handleChange = user => event => {
//     event.persist();
//     setInputs(inputs => ({...inputs, [user]: event.target.value}));
//     //不知道怎麼解釋哈哈哈哈
// }


    


  return (

    <div>
      {/* {console.log(rcid)} */}
      <Button onClick={handleClickOpen} >
       <ComButton title="QRcode" url="https://image.flaticon.com/icons/svg/2313/2313039.svg" />
      </Button>
      
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <Backdrop className={classes.backdrop} open >
      <AppBar >
          <Toolbar>
            <Grid item xs={12} sm={12}></Grid>
    
    <IconButton color="inherit" onClick={handleClose}>
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
        <QRCode value={qrcode} size={300}/>
      </Typography>
        
        {/* <QRcodeMade /> */}
    </Grid>    

    <Grid>
          
      {/* disable */}
      <Button onClick={handleSubmit}  style={{fontFamily:'Microsoft JhengHei', fontWeight:'bold'}} variant="contained" color="primary">

        開始點名
      </Button>
      <Button onClick={handleSubmit} disabled style={{fontFamily:'Microsoft JhengHei', fontWeight:'bold'}} variant="contained" color="primary">

        更新QRcode
      </Button>
    </Grid>
      
        </Grid>
      </Backdrop>

        
      </Dialog>
    </div>
  );
}
