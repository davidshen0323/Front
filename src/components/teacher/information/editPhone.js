import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/styles";
import {Snackbar, Dialog, Button, DialogActions, DialogContent, Typography, Input} from "@material-ui/core";
import TextField from '@material-ui/core/TextField';

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

export default function EditEmail({ open, handleClose })  {
  const classes = useStyle();
  

  // 成功小綠綠
  const [openS, setOpenS] = React.useState(false);
  // 失敗小紅1
  const [openErr1, setOpenErr1] = React.useState(false);
  // 失敗小紅2
 // const [openErr2, setOpenErr2] = React.useState(false);

  const [inputs, setInputs] = React.useState(1);
  const [phone, setPhone] = React.useState({
    phone: '',
  })
  // const [tid, setTid] = React.useState({
  //   tcherid: '',
  // })

  const submitClick = () => {
  
    
    
    fetch('/teacher/resetPhone',{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          teacher_phone: phone.phone,
          // teacher_id: tid.tcherid,
      })
  })
  .then(res => {
      
      async function fetchres(){
      const test = await res.text();  //接收後端傳來的訊息
      if (test === "phone格式不正確，請輸入10位數字的電話號碼") //帳號已註冊過
      {
          //alert("email格式錯誤");
          console.log(1);
          setOpenErr1(true);
      }
      else
      {
          //alert("更改成功!");
          console.log(0);
          setOpenS(true);
          setOpenErr1(false);
          window.location.reload();        

      }
      
  } fetchres() })


  };

  const handleChange = fieldname => event => {
    setInputs(2);
    event.persist();
    setPhone(phone => ({...phone, [fieldname]: event.target.value}));
    
}
  const submitClose = () => {
    handleClose(true);
    setOpenS(false);
    setOpenErr1(false);
    setInputs(1);
    phone.phone='';
  };
    
  

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth={'xs'}>
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            修改電話號碼
          </Typography>

           {/* 之後要接Email */}  
          {/* <Typography className={classes.typo} variant="h8">
            目前Email：
            <TextareaAutosize disabled style={{borderRadius:10, padding:8, width:250, height:40, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5} >
              {props.email}
            </TextareaAutosize>
          </Typography> */}

          {/* <Typography className={classes.typo} variant="h5" id="email">
            新的Email：
          </Typography> */}
          <TextField
          label="新的電話號碼"
          variant="outlined"
          size="small"
          value={phone.phone}
          onChange={handleChange('phone')}  style={{fontFamily:'微軟正黑體'}}/>
          {/* <Typography className={classes.typo} variant="body1">
            
          </Typography> */}
        </div>

        
      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="primary"  style={{fontFamily:'微軟正黑體'}}  autoFocus>關閉視窗</Button>
        <Button disabled={inputs===2 ? false : true} onClick={submitClick} color="primary" style={{fontFamily:'微軟正黑體'}}  autoFocus>儲存</Button>
        {/* 成功小綠框 */}
        <Snackbar open={openS} autoHideDuration={2000} onClose={submitClose} style={{marginBottom:100}}>
          <Alert severity="success">
            已修改完成！
          </Alert>
        </Snackbar>
        {/* 失敗小紅框1 */}
        <Snackbar open={openErr1} style={{marginBottom:100}}>
          <Alert severity="error" onClose={submitClose}>
          電話格式不正確，請輸入10位數字的電話號碼！
          </Alert>
        </Snackbar>
        
      </DialogActions>
    </Dialog>
    
  );
};