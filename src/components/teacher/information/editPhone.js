import React from "react";
import {Dialog, Button, DialogActions, DialogContent, Typography, Input} from "@material-ui/core";
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

export default function EditPhone({ open, handleClose })  {
  const classes = useStyle();
  


  const [openS, setOpenS] = React.useState(false);
  const [inputs, setInputs] = React.useState(1);

  const submitClick = () => {
  
    setOpenS(true);
  };

  const submitClose = () => {
    handleClose(true);
    setOpenS(false);
    setInputs(1);
  };
    
  

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            修改電話號碼
          </Typography>

           {/* 之後要接Phone */}  
          <Typography className={classes.typo} variant="h8" >
            目前電話號碼：0912345678
          </Typography>

          <Typography className={classes.typo} variant="h8">
            新的電話號碼：<Input onChange={()=> setInputs(2)}  style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
          </Typography>
          <Typography className={classes.typo} variant="body1">
            
          </Typography>
        </div>

        
      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="primary" autoFous>關閉視窗</Button>
        <Button disabled={inputs===2 ? false : true} onClick={submitClick} color="primary" autoFous>儲存</Button>
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose}>
        <Alert onClose={submitClose} severity="success">
          已修改完成！
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
    
  );
};