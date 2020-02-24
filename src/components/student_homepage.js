import React from 'react';
import MyMenu from './Menu';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

export default function FormDialog() {
  

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState('female');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <div>
      <MyMenu/>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        提問
      
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">提問</DialogTitle>
        <DialogContent>
          <DialogContentText>
          資訊系統專題
          </DialogContentText>
        <FormControl component="fieldset">
          <FormLabel component="legend">請選擇提問方式</FormLabel>
           <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
             <FormControlLabel
                value="end"
                control={<Radio color="primary" />}
                label="匿名"
                labelPlacement="end"
              />
            </RadioGroup>
            <RadioGroup aria-label="position" name="position" value={value} onChange={handleChange} row>
             <FormControlLabel
                value="ccc"
                control={<Radio color="primary" />}
                label="記名"
                labelPlacement="end"
              />
            </RadioGroup>
          </FormControl>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="請輸入問題內容"
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            取消
          </Button>
          <Button onClick={handleClose} color="primary">
            確認送出
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
// import React from 'react';
// import MyMenu from './menu';
// import { Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';

// export default function homepage() {
//   return (
//     <div >
//     <MyMenu/>

//       <Button>點名</Button>
//       <Button>請假申請</Button>
//       <Button>小組名單</Button>
//       <Button>課堂考試</Button>
//       <Button>發問QA</Button>
//       <Button>課堂驗收</Button>
//     </div>
    
//   )

// }