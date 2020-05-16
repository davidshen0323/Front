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
import {useParams} from "react-router-dom";
import { usePosition } from 'use-position';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


/*----------------------------------------------*/
const useStyles = makeStyles(theme => ({
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
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
  imageSrc: {
    //position: 'absolute',
    maxHeight:'200px',
    maxWidth:'200px',
    display:'block',
    margin:theme.spacing(2),
  },
  appBar: {
    backgroundColor:'#fff8e1',
  },
}));
/*---------------------------------------------*/


export default function GPS() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [uujoinID,setuujoinID] = React.useState(uuidv4);
  const params = useParams();
  // console.log(params);


  const watch = true;
      const {
        latitude,
        longitude,
        // error,
      } = usePosition(watch);


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
          qrcode: uujoinID,
          // @ts-ignore
          cs_id: params.cs_id,
          rc_inputsource: 'GPS點名',
          gps_point: latitude + "," + longitude,
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
    const result = await axios.get(`/teacher/rollcall/findRCID/${uujoinID}/`)
    
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
      
      fetch('/teacher/rollcall/closedRollcall/',{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            
            rc_id: rcid,
                        
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
       <ComButton title="GPS" url="https://image.flaticon.com/icons/svg/2572/2572792.svg" className={classes.button} c/>
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
                src="https://image.flaticon.com/icons/svg/1321/1321801.svg"
          />
        </Grid>

    <Grid item  xs={12}>
      <Button onClick={handleSubmit}  className={classes.button}>
        點名
      </Button>
    </Grid>    

      
        </Grid>
      </Backdrop>

        
      </Dialog>
    </div>
  );
}


