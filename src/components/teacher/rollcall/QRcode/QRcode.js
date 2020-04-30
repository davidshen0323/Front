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
  
  const params = useParams();
  // console.log(params);
  // const csid = params.cs_id;
  console.log(params.cs_id);
  
  const rand = Math.random();
  const test = rand.toString();
  
  const handleClickOpen = () => {
    setOpen(true);
      console.log(test);
      // console.log('QRcode點名');
    
      fetch('/teacher/rollcall/addrollcall',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              
              // rc_inputsource:inputs.way,
              qrcode: test,
              cs_id: params.cs_id,
              rc_inputsource: 'QRcode點名'
              
          })
      })
      
  
  };

  const handleClose = () => {
    setOpen(false);
    fetch('/teacher/rollcall/updateQRcode',{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          
          // rc_inputsource:inputs.way,
          qrcode: '',
          // cs_id: params.cs_id,
          // rc_inputsource: 'QRcode點名'
          
      })
  })
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
      <Button onClick={handleClickOpen} >
       <ComButton title="QRcode" url="https://image.flaticon.com/icons/svg/2313/2313039.svg" />
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
        <QRCode value ={test} size={300}/>
      </Typography>
        
        {/* <QRcodeMade /> */}
    </Grid>    

      
        </Grid>
      </Backdrop>

        
      </Dialog>
    </div>
  );
}
