import React from "react";
import {Dialog, Button, DialogActions, DialogContent, Typography, Radio, RadioGroup, TextareaAutosize, FormControlLabel, TextField, FormControl, Paper} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
// import { QuestionAnswer } from "@material-ui/icons";
import {useParams} from "react-router-dom";

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

export default function AddQA ({ open, handleClose })  {
  const classes = useStyle();
  
  
  
  const [openS, setOpenS] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    ques:'',
  });
  
  
  const handleChange = fieldname => event => {
    event.persist();
    setInputs(inputs => ({...inputs, [fieldname]: event.target.value}));
    
}
  
  const params = useParams();
  const csid = params.cs_id;



  const handleSubmit = () => {
    
    

    fetch('/student/question',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
    },
      body: JSON.stringify({
          q_content: inputs.ques,
          cs_id: csid
      })
  })
    setOpenS(true);
  };

  

  const submitClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    handleClose(true);
    setOpenS(false);
  };
    
 

  return (
    

    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            提問
          </Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <Typography className={classes.typo} variant="body1">
            請輸入問題內容：
          </Typography>

          <Typography className={classes.typo} variant="body1">
            <TextareaAutosize
             id="ques"
             name="ques"
             value={inputs.ques}
             onChange={handleChange('ques')}
             style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}}
             rowsMin={5}
             placeholder="請輸入問題"
             />
             
             
    
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="primary">關閉視窗</Button>
        <Button 
        disabled={inputs.ques === '' ? true : false} 
        onClick={handleSubmit} 
        color="primary"
        >
          確認送出
          </Button>
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose}>
        <Alert onClose={submitClose} severity="success">
          老師收到你的問題囉！
          
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
      
  );
}