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
    const handleChange = pwd => event => {
        event.persist();
        setInputs(inputs => ({...inputs, [pwd]: event.target.value}));
        //不知道怎麼解釋哈哈哈哈
    }
  

  const submitClick = () => {
  
    setOpenS(true);
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
            請輸入目前密碼：<TextField  type="password" value={inputs.pwd} onChange={handleChange('pwd')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
          </Typography>

          <Typography className={classes.typo} variant="h8">
            請輸入新密碼：<TextField  type="password" value={inputs.newpwd} onChange={handleChange('newpwd')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
          </Typography>
          
          <Typography className={classes.typo} variant="h8">
            確認新密碼：<TextField  type="password" value={inputs.repeatpwd} onChange={handleChange('repeatpwd')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
          </Typography>
          <Typography className={classes.typo} variant="body1">
            
          </Typography>
        </div>

        
      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="primary" autoFous>關閉視窗</Button>
        <Button disabled={inputs.pwd!==''&&inputs.pwd!==inputs.newpwd&&inputs.newpwd===inputs.repeatpwd ? false : true} onClick={submitClick} color="primary" autoFous>儲存</Button>
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose}>
        <Alert onClose={submitClose} severity="success">
          已變更密碼！
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
    
  );
};