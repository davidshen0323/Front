import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import List from '@material-ui/core/List';
import {makeStyles} from '@material-ui/core/styles';
import {useHistory} from "react-router-dom";

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

export default function ForgetPw() {
    const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [inputs, setInputs] = React.useState({
    user:'',
    phone:'',
    mail:''
    //宣告要接值的變數
});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    if(inputs.user.length > 0
       && inputs.phone.length > 0
       && inputs.mail.length > 0 )
       {
        fetch('/student_re',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                std_id: inputs.user,
                std_phone: inputs.phone,
                std_mail: inputs.mail
            })
        })
        .then(res => {
            async function fetchres(){
            const test = await res.text();
            if(test ==="request failed. Email or Phone Number has round!")
            {
                alert("請重新確認及填寫資料!");
                        post = false;
                        console.log(1);
                        return post;
            }
            else
            {
                alert("填寫成功!");
                post = true;
                console.log(0);
                history.push("/login");
                return post;                        
            }
        } fetchres() })
        .then(res => console.log(res))
        .catch(err => console.log(`Error with message: ${err}`))
       }
       else
            {
                alert("請再次確認!!")
            }    
        
       }
  

  let post; //宣告一個布林值變數
  let history = useHistory(); //傳值跳頁的方法


  const handleChange = fieldname => event => {
    event.persist();
    setInputs(inputs => ({...inputs, [fieldname]: event.target.value}));
    //
}

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
          id="outlined-password-input"
          label="學號"
          variant="outlined"
          size="small"
          className={classes.block}
          value={inputs.user}
          onChange={handleChange('user')}
        />
        <TextField
          id="outlined-password-input"
          label="手機"
          variant="outlined"
          size="small"
          className={classes.block}
          value={inputs.phone}
          onChange={handleChange('phone')}
        />
          </List>
          <TextField
            variant="outlined"
            size="small"
            label="Email Address"
            type="email"
            fullWidth
            className={classes.block2}
            value={inputs.email}
          onChange={handleChange('email')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            取消
          </Button>
          <Button onClick={handleSubmit} color="primary">
            確認送出
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
