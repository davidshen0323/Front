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
  const [phone, setPhone] = React.useState({
    tphone: '',
  })

  const submitClick = () => {
  
    setOpenS(true);
    
    fetch('/teacher/resetPhone',{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          teacher_phone: phone.tphone,
          // teacher_id: tid.tcherid,
      })
  })
  .then(res => {
      
      async function fetchres(){
      const test = await res.text();  //接收後端傳來的訊息
      if (test === "phone格式不正確，請輸入10位數字的電話號碼") //帳號已註冊過
      {
          alert("phone格式不正確，請輸入10位數字的電話號碼");
          console.log(1);
      }
      else
      {
          alert("更改成功!");
          console.log(0);
          window.location.reload();        
      }
      
  } fetchres() })

  };

  const submitClose = () => {
    handleClose(true);
    setOpenS(false);
    setInputs(1);
  };
   
  const handleChange = fieldname => event => {
    setInputs(2);
    event.persist();
    setPhone(phone => ({...phone, [fieldname]: event.target.value}));
    
}
  

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            修改電話號碼
          </Typography>

           {/* 之後要接Phone  
          <Typography className={classes.typo} variant="h8" >
            目前電話號碼：0912345678
          </Typography> */}

          <Typography className={classes.typo} variant="h5">
            新的電話號碼：<Input
            id="tphone"
            onChange={handleChange('tphone')}
            value={phone.tphone}
            style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}}
            rowsMin={5}
            />
          </Typography>
          <Typography className={classes.typo} variant="body1">
            
          </Typography>
        </div>

        
      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="primary" autoFocus>關閉視窗</Button>
        <Button disabled={inputs===2 ? false : true} onClick={submitClick} color="primary" autoFocus>儲存</Button>
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose}>
        <Alert onClose={submitClose} severity="success">
          已修改完成！
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
    
  );
};