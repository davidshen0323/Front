import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Backdrop from '@material-ui/core/Backdrop';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import IconButton from '@material-ui/core/IconButton';
import ComButton from "../ComButton";
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import QRCode from 'qrcode.react';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Gps() {
  const classes = useStyles();
  const rand = Math.random();
  const test = rand.toString();
  const [open, setOpen] = React.useState(false);

  // const params = useParams();
  //       console.log(params);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  const [inputs, setInputs] = React.useState({
    rc_id:'',
    rc_inputsource:'',
    //qrcode:'',
    //宣告要接值的變數
  });

  const handleChange = user => event => {
    event.persist();
    setInputs(inputs => ({...inputs, [user]: event.target.value}));
    //不知道怎麼解釋哈哈哈哈
}

let post; //宣告一個布林值變數
//    let history = useHistory(); //傳值跳頁的方法
    const handleSubmit = () =>
    {
            {
                fetch('/teacher/rollcall/addrollcall',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        //rc_id:
                        rc_inputsource:inputs.way
                        //qrcode:inputs.qrcode
                        
                    })
                })
                .then(res => {
                    async function fetchres(){
                    const test = await res.text();  //接收後端傳來的訊息
                    if (test === "This account has already exist!") //帳號已註冊過
                    {
                        alert("已註冊過!");
                        post = false;
                        console.log(1);
                        return post;
                    }
                    else if(test === "request failed. Email format error!") //信箱不包含@
                    {
                        alert("信箱格式有誤! 請輸入有效信箱!");
                        post = false;
                        console.log(2);
                        return post;
                    }
                    
                    else
                    {
                        alert("註冊成功!");
                        post = true;
                        console.log(0);
                        //history.push("/login");
                        return post;                        
                    }
                    
                } fetchres() })
                // .then(res => console.log(post))
                .then(res => console.log(res))
                .catch(err => console.log(`Error with message: ${err}`))
            }
            

            

            
            
        }


  return (
    <div>
      <Button  onClick={handleClickOpen} >
       <ComButton title="GPS" url="https://image.flaticon.com/icons/svg/2572/2572792.svg" className={classes.button}/>
      </Button>
      
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
      <Backdrop className={classes.backdrop} open >
      <AppBar >
          <Toolbar>
            <Grid item xs={12} sm={12}></Grid>
    
    <IconButton  color="inherit" onClick={handleClose}>
      <CloseIcon />
    </IconButton>  
    </Toolbar>
    </AppBar>

      
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >

    <Grid item  xs={12}>
      <Typography>
        <QRCode value ={test} size={300}/>
      </Typography>
        
        {/* <QRcodeMade /> */}
    </Grid>    

      
        </Grid>
      </Backdrop>

        
      </Dialog>
    </div>
  );
}
