import React from "react";
import {Dialog, Button, DialogActions, DialogContent, Typography} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import NumericInput from 'react-numeric-input';
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

    handleClose(true);
    setOpenS(false);
    setInputs(1);
  };
    
  

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            驗收評分
          </Typography>

           {/* 之後要接學號 */}  
          <Typography className={classes.typoHeading} variant="h8">
            學號：406401628 
          </Typography>

          <Typography className={classes.typo} variant="body1">
            分數：
          </Typography>
          <Typography className={classes.typo} variant="body1">
          <Input id="score" onChange={handleChange('name')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}}  rowsMin={5} />
          </Typography>
        </div>

      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="primary" autoFous>關閉視窗</Button>
        <Button disabled={inputs===2 ? false : true} onClick={submitClick} color="primary" autoFous>儲存</Button>
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose} >
        <Alert onClose={submitClose} severity="success">
          已儲存！
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
    
  );
};