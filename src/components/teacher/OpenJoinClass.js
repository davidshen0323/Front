import React from "react";
import {Fab,Dialog, Button, DialogActions, DialogContent, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import {useParams} from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import QRCode from 'qrcode.react';
import { v4 as uuidv4 } from 'uuid';

const useStyle = makeStyles(theme => ({
  typo: {
    marginLeft: 10,
    padding: 5,
    flex: 1
  },
  description: {
    marginLeft: 10,
    padding: 5,
    flex: 1
  },
  typoHeading: {
    color: "blue",
    padding: 10
  },
  fab: {
    position: "fixed",
    bottom: '5%',
    right: "5%",
    opacity: '100%',
    backgroundColor:'#582707'
  },
}));


export default function OpenJoinClass ()  {
  const classes = useStyle();

  const[open,setOpen]=React.useState();
  const [uujoinID,setuujoinID] = React.useState(uuidv4);
  const joinID = uujoinID.substring(0,8);
  console.log(joinID);

  const handleClose =() =>{
    setOpen(false);
    fetch('/teacher/course/openToJoin/',{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          
          cs_id: csid,
          cs_qrcode: null,
          // cs_id: params.cs_id,
          // rc_inputsource: 'QRcode點名'
          
      })
  })
  }

  const handleClickOpen=()=>{
    setOpen(true);

    fetch('/teacher/course/openToJoin/',{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          
          cs_id: csid,
          cs_qrcode: joinID,
          // cs_id: params.cs_id,
          // rc_inputsource: 'QRcode點名'
          
      })
  })
  }
  
  const params = useParams();
  const csid = params.cs_id;

  return (
    <div>
    <Fab style={{color:'#ffffff'}} aria-label="add" className={classes.fab} onClick={handleClickOpen} >
      <AddIcon />
    </Fab>

    <Dialog open={open} onClose={handleClose} >
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            開放加入課程
          </Typography>

          <Typography className={classes.typo} variant="body1">
            代碼：{joinID}
          </Typography>
          <Typography className={classes.typo} variant="body1">
            QRcode：
          </Typography>
          <QRCode value={joinID} size={250}/>
        </div>

      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">關閉視窗</Button>
      </DialogActions>
    </Dialog>
  </div>
  );
};