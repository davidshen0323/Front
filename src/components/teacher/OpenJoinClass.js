import React from "react";
import {Dialog, Button, DialogActions, DialogContent, Typography, TextareaAutosize} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import QRCode from 'qrcode.react';


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
}));

export default function OpenJoinClass ({ open, handleClose, props })  {
  const classes = useStyle();
  

  const submitClose = (event, reason) => {    
    handleClose(true);
  };
  
  

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            開放加入課程
          </Typography>

          <Typography className={classes.typo} variant="body1">
            代碼：1234
          </Typography>
          <Typography className={classes.typo} variant="body1">
            QRcode：
          </Typography>
          <QRCode value="1234" size={250}/>
        </div>

      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="primary">關閉視窗</Button>
      </DialogActions>
    </Dialog>
  );
};