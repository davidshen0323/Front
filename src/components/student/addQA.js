import React from "react";
import {Dialog, Button, DialogActions, DialogContent, Typography, Radio, RadioGroup, TextareaAutosize, FormControlLabel} from "@material-ui/core";
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

export default ({ open, handleClose }) => {
  const classes = useStyle();
  
  const [value, setValue] = React.useState('name');

  const handleChange = event => {
    setValue(event.target.value);
  };

  const [openS, setOpenS] = React.useState(false);

  const submitClick = () => {
    setOpenS(true);
  };

  const submitClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenS(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description">
      <DialogContent>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography className={classes.typoHeading} variant="h5">
            提問
          </Typography>

          <Typography className={classes.typo} variant="body1">
            請選擇提問方式：
          </Typography>

        <RadioGroup className={classes.typo} aria-label="position" name="position" value={value} onChange={handleChange} row>
            <FormControlLabel value="not_anonymous" control={<Radio color="primary" />} label="記名" labelPlacement="end"/>
            <FormControlLabel value="anonymous" control={<Radio color="primary" />} label="匿名" labelPlacement="end"/>
        </RadioGroup>
        </div>

        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column"}}>
          <Typography className={classes.typo} variant="body1">
            請輸入問題內容：
          </Typography>

          <Typography className={classes.typo} variant="body1">
            <TextareaAutosize style={{borderRadius:10, padding:8, width:250, height:30, fontSize:14, fontFamily:'微軟正黑體'}}    rowsMin={5} placeholder="請輸入問題"/>
          </Typography>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autoFous>取消</Button>
        <Button onClick={handleClose,submitClick} color="primary" autoFous>確認送出</Button>
        <Snackbar open={openS} autoHideDuration={3000} onClose={submitClose}>
        <Alert onClose={submitClose} severity="success">
          老師收到你的問題囉！
        </Alert>
      </Snackbar>
      </DialogActions>
    </Dialog>
  );
};
