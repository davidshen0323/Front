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

export default function CreateClass({ open, handleClose })  {
  const classes = useStyle();

  const [openS, setOpenS] = React.useState(false);
  
  const [inputs, setInputs] = React.useState({
    cs_id:'',
    cs_name:'',
    //宣告要接值的變數
});
    const handleChange = cs_id => event => {
        event.persist();
        setInputs(inputs => ({...inputs, [cs_id]: event.target.value}));
        //不知道怎麼解釋哈哈哈哈
    }   

  const submitClick = () => {
    setOpenS(true);
  };

  const submitClose = () => {
    handleClose(true);
    setOpenS(false);
    inputs.cs_id='';
    inputs.cs_name='';
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            建立課程
          </Typography>

          <Typography className={classes.typo} variant="body1">
            請輸入課程名稱：<Input  value={inputs.cs_name} onChange={handleChange('cs_name')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
          </Typography>

        </div>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <Typography className={classes.typo} variant="body1">
            請輸入課程代碼：<Input value={inputs.cs_id} onChange={handleChange('cs_id')} style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}} rowsMin={5}/>
          </Typography>

        </div>
        
      </DialogContent>
      <DialogActions>
        <Button onClick={submitClose} color="primary" autoFocus>關閉視窗</Button>
        <Button disabled={inputs.cs_id===''|| inputs.cs_name==='' ? true : false} onClick={submitClick} color="primary" autoFocus>儲存</Button>
        <Snackbar open={openS} autoHideDuration={1000} onClose={submitClose}>
        <Alert onClose={submitClose} severity="success">
          已建立課程！
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
    
  );
};