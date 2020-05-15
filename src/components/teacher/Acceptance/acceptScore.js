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
  button: {
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    width:'80px',
    fontFamily: 'Microsoft JhengHei',
    color: "white",
    fontSize:14,
    backgroundColor: "#f8b62b",
    fontWeight:'bold',
},
}));


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AcceptScore( props )  {
  const classes = useStyle();
  


  const [openS, setOpenS] = React.useState(false);
  const [inputs, setInputs] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  const [score, setScore] = React.useState({
    score:'',
  })

  const handleChange = fieldname => event => {
    setInputs(2);
    event.persist();
    setScore(score => ({...score, [fieldname]: event.target.value}));
    //
  }
  
  const submitClick = () => {
    setOpenS(true);
    console.log(props.stdid);
    console.log(props.hwid);
    console.log(parseInt(score.score));
    
    fetch('/teacher/updateScore',{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          std_id: props.stdid,
          accept_hw_id: props.hwid,
          accept_score: parseInt(score.score),
          // accept_done: 1
      })
  })

  };

  const submitClose = (event, reason) => {

    handleClose(true);
    setOpenS(false);
    setInputs(1);
    window.location.reload();
  };

  const nosubmitClose = (event, reason) => {

    handleClose(true);
    setOpenS(false);
    setInputs(1);
    // window.location.reload();
  };
  
  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }


  return (
    <div>
      <Button 
      onClick = {handleClickOpen}
      variant = "contained" 
      className={classes.button}
    >
    驗收
  </Button>
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            驗收評分
          </Typography>

           {/* 之後要接學號 */}  
          <Typography className={classes.typoHeading} variant="h8">
            學號：{props.stdid}
          </Typography>

          <Typography className={classes.typo} variant="body1">
            分數：
          </Typography>
          <Typography className={classes.typo} variant="body1">
          <Input
          id="score"
          value={score.score}
          onChange={handleChange('score')} 
          style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}}
          rowsMin={5}
          />
          </Typography>
        </div>

      </DialogContent>
      <DialogActions>
        <Button onClick={nosubmitClose} color="primary" autoFocus>關閉視窗</Button>
        <Button disabled={inputs===2 ? false : true} onClick={submitClick} color="primary" autoFocus>儲存</Button>
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose} >
        <Alert onClose={submitClose} severity="success">
          已儲存！
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
    </div>
    
  );
};