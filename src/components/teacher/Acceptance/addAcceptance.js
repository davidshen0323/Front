import React from "react";
import {Dialog, Button, DialogActions, DialogContent, Typography, Radio, RadioGroup, TextareaAutosize, FormControlLabel, Input} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useParams } from "react-router-dom";
import { add } from "date-fns";


const useStyle = makeStyles(theme => ({
  typo: {
    marginLeft: 10,
    padding: 5,
    flex: 1,
    fontFamily: 'Microsoft JhengHei',
    fontWeight:'bold'
  },
  description: {
    marginLeft: 10,
    padding: 5,
    flex: 1
  },
  typoHeading: {
    color: "blue",
    padding: 10,
    fontFamily: 'Microsoft JhengHei',
    fontWeight:'bold'
  },
  button: {
    fontFamily: 'Microsoft JhengHei',
    fontWeight:'bold'
  },
}));


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AddAccept({ open, handleClose })  {
  const classes = useStyle();
  const params = useParams();
  const csid = params.cs_id

  // const [value, setValue] = React.useState('name');

  // const handleChange = event => {
  //   setValue(event.target.value);
  // };

  const [openS, setOpenS] = React.useState(false);
  const [inputs, setInputs] = React.useState(1);
  const [addHw, setAddHw] = React.useState({
      name: '',
      content: '',
  });

  const submitClick = () => {
  
    setOpenS(true);
    fetch('/teacher/acceptance/homework',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          hw_name: addHw.name,
          hw_content: addHw.content,
          hw_cs_id: csid 
      })
  })
  .then(res => {
      
      async function fetchres(){
      const test = await res.text();  //接收後端傳來的訊息
      if (test === "作業內容不得為空") //帳號已註冊過
      {
          alert("作業內容不得為空");
          console.log(1);
      }
      else if(test === "這堂課已有此作業，請更改作業名稱") //信箱不包含@
      {
          alert("這堂課已有此作業，請更改作業名稱");
          console.log(2);
      }
      else
      {
          alert("新增作業成功");        
          console.log(0);                           
      }
  } fetchres()}
  )};

  const submitClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    handleClose(true);
    setOpenS(false);
    setInputs(1);
  };
    
  const handleChange = fieldname => event => {
    event.persist();
    setAddHw(addHw => ({...addHw, [fieldname]: event.target.value}));
    setInputs(2)
}

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            開啟作業驗收
          </Typography>

          <Typography className={classes.typo} variant="body1">
            請輸入作業名稱：

        {/* <RadioGroup 
        className={classes.typo} 
        aria-label="position" 
        name="position" 
        // value={addHw.name} 
        // onChange={handleChange('qname')}
        row
        > */}
            
            <Input
            id="name"
            onChange={handleChange('name')}
            value={addHw.name}
            style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} 
            rowsMin={5}
            />
        {/* </RadioGroup> */}
            </Typography>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <Typography className={classes.typo} variant="body1" >
            請輸入作業內容：
          </Typography>

          <Typography className={classes.typo} variant="body1">
            <TextareaAutosize 
            id="content" 
            value={addHw.content}
            onChange={handleChange('content')}
            style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}}    
            rowsMin={5} 
            placeholder="請輸入作業內容"
            />
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFocus className={classes.button}>關閉視窗</Button>
        <Button disabled={inputs===2 ? false : true} onClick={submitClick} color="primary" autoFocus className={classes.button}>確認送出</Button>
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose}>
        <Alert onClose={submitClose} severity="success">
          已新增作業！
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
    
  );
};