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

export default function AddAccept({ open, handleClose })  {
  const classes = useStyle();
  
  const [value, setValue] = React.useState('name');

  const handleChange = event => {
    setValue(event.target.value);
  };

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
            開啟作業驗收
          </Typography>

          <Typography className={classes.typo} variant="body1">
            請輸入作業名稱：
          </Typography>

        <RadioGroup className={classes.typo} aria-label="position" name="position"  value={value } onChange={handleChange} row>
            <Input onChange={()=> setInputs(2)} id="question" style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
        </RadioGroup>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <Typography className={classes.typo} variant="body1">
            請輸入作業內容：
          </Typography>

          <Typography className={classes.typo} variant="body1">
            <TextareaAutosize id="question" style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}}    rowsMin={5} placeholder="請輸入作業內容"/>
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFous>關閉視窗</Button>
        <Button disabled={inputs===2 ? false : true} onClick={submitClick} color="primary" autoFous>確認送出</Button>
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose}>
        <Alert onClose={submitClose} severity="success">
          已新增作業！
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
    
  );
};