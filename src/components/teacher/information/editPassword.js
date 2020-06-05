import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/styles";
import {Snackbar, TextField, Dialog, Button, DialogActions, DialogContent, Typography} from "@material-ui/core";


const useStyle = makeStyles(theme => ({
  typo: {
    fontFamily: 'Microsoft JhengHei',
    marginLeft: 10,
    padding: 5,
    flex: 1,
    fontSize:16,
  },
  description: {
    marginLeft: 10,
    padding: 5,
    flex: 1
  },
  typoHeading: {
    fontFamily: 'Microsoft JhengHei',
    fontWeight:'bold',
    color: "#582707",
    padding: 10
  },
}));


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function EditPassword({ open, handleClose })  {
  const classes = useStyle();
  // 成功小綠綠
  const [openS, setOpenS] = React.useState(false);
  // 失敗小紅1
  const [openErr1, setOpenErr1] = React.useState(false);
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
  .then(res => {
      
      async function fetchres(){
      const test = await res.text();  //接收後端傳來的訊息
      if (test === "修改密碼失敗，請輸入正確的舊密碼") //帳號已註冊過
      {
          //alert("修改密碼失敗，請輸入正確的舊密碼!");
          setOpenErr1(true);
          console.log(1);
          
      }
      else if(test === "修改密碼成功") //修改密碼成功
      {
          //alert("修改密碼成功");
          setOpenS(true);
          setOpenErr1(false);
          window.location.reload();
          console.log(2);
      }
  } fetchres() })
  };

  const submitClose = () => {
    handleClose(true);
    setOpenS(false);
    inputs.pwd='';
    inputs.newpwd='';
    inputs.repeatpwd='';
  };
  
  const ErrClose = () => {
    setOpenS(false);
    setOpenErr1(false);
};
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            更改密碼
          </Typography>

           {/* 之後要接密碼(? */}  
          {/* <Typography className={classes.typo} variant="h8">
            請輸入目前密碼：
          </Typography> */}
          <TextField 
          label="目前密碼"
          variant="outlined"
          size="small"
          type="password" 
          value={inputs.pwd} 
          onChange={handleChange('pwd')} 
          style={{fontFamily:'微軟正黑體',marginTop:10}}/>
          
          {/* <Typography className={classes.typo} variant="h8">
            請輸入新密碼：
          </Typography> */}
          <TextField 
          label="新密碼"
          variant="outlined"
          size="small"
          type="password" 
          value={inputs.newpwd} 
          onChange={handleChange('newpwd')} 
          style={{fontFamily:'微軟正黑體',marginTop:10}}/>
         
          {/* <Typography className={classes.typo} variant="h8">
            確認新密碼：<TextField type="password" value={inputs.repeatpwd} onChange={handleChange('repeatpwd')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
          </Typography> */}
          <TextField 
          label="確認新密碼"
          variant="outlined"
          size="small"
          type="password" 
          value={inputs.repeatpwd} 
          onChange={handleChange('repeatpwd')} 
          style={{fontFamily:'微軟正黑體',marginTop:10}}/>
          {/* <Typography className={classes.typo} variant="body1">
            
          </Typography> */}
        </div>

        
      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="default" style={{fontFamily:'微軟正黑體'}} autoFocus>關閉視窗</Button>
        <Button disabled={inputs.pwd!==''&&inputs.pwd!==inputs.newpwd&&inputs.newpwd===inputs.repeatpwd ? false : true} onClick={submitClick} color="primary" style={{fontFamily:'微軟正黑體'}} autoFocus>儲存</Button>
        {/* 成功小綠框 */}
        <Snackbar open={openS} autoHideDuration={2000} onClose={submitClose} style={{marginBottom:100}}>
          <Alert severity="success">
            成功修改密碼！
          </Alert>
        </Snackbar>
        {/* 失敗小紅框1 */}
        <Snackbar open={openErr1} autoHideDuration={2000} onClose={ErrClose} style={{marginBottom:100}}>
          <Alert severity="error" >
            請再次確認舊密碼是否輸入正確！
          </Alert>
        </Snackbar>
      </DialogActions>
    </Dialog>
    
  );
};