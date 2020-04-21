import React from "react";
import {Dialog, Button, DialogActions, DialogContent, Typography, Radio, RadioGroup, TextareaAutosize, FormControlLabel, Input} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";


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


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AcceptScore({ open, handleClose })  {
  const classes = useStyle();
  
  

  const [openS, setOpenS] = React.useState(false);
  const [inputs, setInputs] = React.useState(1);

  const submitClick = () => {
  
    setOpenS(true);
  };

  const submitClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    handleClose(true);
    setOpenS(false);
    setInputs(1);
  };
    
  

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            回覆問題
          </Typography>
           
          <Typography className={classes.typo} variant="h8">
            學生問題：
          </Typography>

          {/* 之後要接問題 */}  
          <Typography className={classes.typo} variant="h8">
            <TextareaAutosize disabled style={{borderRadius:10, padding:8, width:250, height:40, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5} >這裡接學生的問題~~ </TextareaAutosize>
          </Typography>

          <Typography className={classes.typo} variant="body1">
            老師回覆：
          </Typography>
          <Typography className={classes.typo} variant="body1">
            <TextareaAutosize onChange={()=> setInputs(2)} id="reply" style={{borderRadius:10, padding:8, width:250, height:40, fontSize:14, fontFamily:'微軟正黑體'}}    rowsMin={5} placeholder="請輸入回覆"/>
          </Typography>
        </div>

      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="primary" autoFous>關閉視窗</Button>
        <Button onClick={submitClick} color="primary" autoFous>標記為已於課堂上回答</Button>
        <Button disabled={inputs===2 ? false : true} onClick={submitClick} color="primary" autoFous>儲存</Button>
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose}>
        <Alert onClose={submitClose} severity="success">
          已儲存！
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
    
  );
};