import React from "react";
//import Link from "@material-ui/core/Link";
import {Snackbar, Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, List} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import {useHistory, Link} from "react-router-dom";
import MuiAlert from "@material-ui/lab/Alert";

/*------------ STYLE ------------*/
const useStyles = makeStyles(theme =>({
    
    Link: {
        fontSize:'14px',
        paddingLeft:theme.spacing(20),
        fontFamily: 'Microsoft JhengHei',
        
      },   
    block:{
        margin:theme.spacing(1),
        fontFamily: 'Microsoft JhengHei',
    },
    block2:{
        width:'460px',
        margin:theme.spacing(1),
        fontFamily: 'Microsoft JhengHei',
    }
}
));
/*--------------------------------*/
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function ForgetPw() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // 成功小綠綠
  const [openS, setOpenS] = React.useState(false);
  // 失敗小紅1
  const [openErr1, setOpenErr1] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    id:'',
    phone:'',
    mail:''
    //宣告要接值的變數
});


const handleChange = fieldname => event => {
  event.persist();
  setInputs(inputs => ({...inputs, [fieldname]: event.target.value}));
  //
}

  let put; //宣告一個布林值變數
  let history = useHistory(); //傳值跳頁的方法


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const ErrClose = () => {
    setOpenS(false);
    setOpenErr1(false);
    
  };  
  const handleSubmit = () =>
  
   {
    // if(inputs.user.length > 0
    //    && inputs.phone.length > 0
    //    && inputs.mail.length > 0 )
    //    {
      console.log(inputs.id)
      console.log(inputs.mail);
      console.log(inputs.phone);
        fetch('/sendStudentEmailWithNewPassword/',{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                std_id: inputs.id,
                std_mail: inputs.mail,
                std_phone: inputs.phone,
            })
        })
        .then(res => {

            async function fetchres(){
            const test = await res.text();
            if(test ==="request failed. Email or Phone Number has round!")
            {
                //alert("請重新確認及填寫資料!");
                setOpenErr1(true);
                        put = false;
                        console.log(1);
                        return put;
            }
            else
            {
                //alert("填寫成功!");
                setOpenS(true);
                put = true;
                console.log(0);
                history.push("/login");
                return put;                        
            }
        } fetchres() })
        .then(res => console.log(res))
        .catch(err => console.log(`Error with message: ${err}`))
       
      //  else
      //       {
      //            alert("請再次確認2!!")
      //       }    
        
      //  }
  setOpen(false);}
      
  return (
    <div >
      <Typography className={classes.Link}>
        <Link href="#" onClick={handleClickOpen}>
          忘記密碼?
        </Link>
      </Typography>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">忘記密碼嗎 ( ･д･ )?</DialogTitle>
        <DialogContent>
          <DialogContentText>
           請填寫以下資料以便我們找回您的密碼
          </DialogContentText>


          <List >
          <TextField
          autoFocus
          id="id"
          label="學號"
          variant="outlined"
          size="small"
          className={classes.block}
          value={inputs.id}
          onChange={handleChange('id')}
        />
        <TextField
          id="phone"
          label="手機"
          variant="outlined"
          size="small"
          className={classes.block}
          value={inputs.phone}
          onChange={handleChange('phone')}
        />
          </List>
          <TextField
            id="mail"
            variant="outlined"
            size="small"
            label="Email Address"
            type="email"
            fullWidth
            className={classes.block2}
            value={inputs.mail}
          onChange={handleChange('mail')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            取消
          </Button>
          <Button onClick={handleSubmit} color="primary">
            確認送出
          </Button>
          {/* {console.log(inputs.user)} */}
        </DialogActions>
      </Dialog>
      {/* 成功小綠框 */}
      <Snackbar open={openS} autoHideDuration={2000} onClose={handleSubmit} style={{marginBottom:100}}>
          <Alert severity="success">
            填寫成功！
          </Alert>
      </Snackbar>
      {/* 失敗小紅框1 */}
      <Snackbar open={openErr1} autoHideDuration={2000} onClose={ErrClose} style={{marginBottom:100}}>
          <Alert severity="error">
            請重新確認及填寫資料！
          </Alert>
      </Snackbar>
    </div>
  );
}
