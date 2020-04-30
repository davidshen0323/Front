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

export default function EditEmail({ open, handleClose })  {
  const classes = useStyle();
  


  const [openS, setOpenS] = React.useState(false);
  const [inputs, setInputs] = React.useState(1);
  const [email, setEmail] = React.useState({
    email: '',
  })

  const submitClick = () => {
  
    setOpenS(true);
    
    fetch('',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          std_mail: email.email,
      })
  })
  // .then(res => {
      
  //     async function fetchres(){
  //     const test = await res.text();  //接收後端傳來的訊息
  //     if (test === "This account has already exist!") //帳號已註冊過
  //     {
  //         alert("已註冊過!");
  //         post = false;
  //         console.log(1);
  //         return post;
  //     }
  //     else if(test === "request failed. Email format error!") //信箱不包含@
  //     {
  //         alert("信箱格式有誤! 請輸入有效信箱!");
  //         post = false;
  //         console.log(2);
  //         return post;
  //     }
  //     else if(inputs.user.length !== 9) //學號長度不等於9
  //     {
  //         alert("學號長度有誤! 請再次確認!");
  //         post = false;
  //         console.log(3);
  //         return post;
  //     }
  //     else
  //     {
  //         alert("註冊成功!");
  //         post = true;
  //         console.log(0);
  //         history.push("/login");
  //         return post;                        
  //     }
      
  // } fetchres() })


  };

  const handleChange = fieldname => event => {
    setInputs(2);
    event.persist();
    setEmail(email => ({...email, [fieldname]: event.target.value}));
    
}
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
            修改Email
          </Typography>

           {/* 之後要接Email */}  
          <Typography className={classes.typo} variant="h8">
            目前Email：406401628@mail.fju.edu.tw
          </Typography>

          <Typography className={classes.typo} variant="h8" id="email">
            新的Email：<Input onChange={handleChange('email')}  style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
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