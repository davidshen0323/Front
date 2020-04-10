import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';
import QRcodeMade from './QRcodeMade';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Grid from '@material-ui/core/Grid';

import {Link} from "react-router-dom";

import Score from '../../Score';
/*------------ STYLE ------------*/
const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },

  textField: {
    width: 150,
  },

  inputForm:{
    paddingTop:30,
},

closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[100],
  },
  qrcode:{
    width: 600,
    height: 600,
  },
}));
/*------------------------------*/

export default function QRcode() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <Backdrop className={classes.backdrop} open >
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
    <Grid item  xs={12} >
        <IconButton className={classes.closeButton} component={Link} to="/RollcallBlockT" >
          <CloseIcon />
        </IconButton>
    </Grid>
    <Grid item  xs={12}>
        <QRcodeMade className={classes.qrcode}/>
    </Grid>    

      {/* <Grid item  xs={12}>
          <div className={classes.inputForm}>
          <Score/>
          </div>
      </Grid> */}
      
        </Grid>
      </Backdrop>
    </div>
  );
}
