import React from "react";
import {TextField, Dialog, Button, DialogActions, DialogContent, Typography, Input} from "@material-ui/core";
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

export default function EditPassword({ open, handleClose })  {
  const classes = useStyle();

  const [openS, setOpenS] = React.useState(false);
  
  const [inputs, setInputs] = React.useState({
    pwd:'',
    newpwd:'',
    repeatpwd:'',
    //宣告要接值的變數
});
    const handleChange = fieldname => event => {
        event.persist();
        setInputs(inputs => ({...inputs, [fieldname]: event.target.value}));
        //不知道怎麼解釋哈哈哈哈
    }
  

  const submitClick = () => {
  
    setOpenS(true);

    fetch('/teacher/resetPassword',{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          old_teacher_password: inputs.pwd,
          teacher_password: inputs.newpwd,
          
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

  const submitClose = () => {
    handleClose(true);
    setOpenS(false);
    inputs.pwd='';
    inputs.newpwd='';
    inputs.repeatpwd='';
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            更改密碼
          </Typography>

           {/* 之後要接密碼(? */}  
          <Typography className={classes.typo} variant="h8">
            請輸入目前密碼：<TextField type="password" value={inputs.pwd} onChange={handleChange('pwd')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
          </Typography>

          <Typography className={classes.typo} variant="h8">
            請輸入新密碼：<TextField type="password" value={inputs.newpwd} onChange={handleChange('newpwd')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
          </Typography>
          
          <Typography className={classes.typo} variant="h8">
            確認新密碼：<TextField type="password" value={inputs.repeatpwd} onChange={handleChange('repeatpwd')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
          </Typography>
          <Typography className={classes.typo} variant="body1">
            
          </Typography>
        </div>

        
      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="primary" autoFocus>關閉視窗</Button>
        <Button disabled={inputs.pwd!==''&&inputs.pwd!==inputs.newpwd&&inputs.newpwd===inputs.repeatpwd ? false : true} onClick={submitClick} color="primary" autoFocus>儲存</Button>
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose}>
        <Alert onClose={submitClose} severity="success">
          已變更密碼！
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
    
  );
};