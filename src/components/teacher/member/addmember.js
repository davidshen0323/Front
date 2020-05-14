import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import  {Typography, TextareaAutosize, TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {brown} from '@material-ui/core/colors';
import {Fab} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h3">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);


/*------------ STYLE ------------*/
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    fab: {
        position: "fixed",
        bottom: theme.spacing(5),
        right: theme.spacing(5),
        backgroundColor:brown[500]
      },
      typoHeading: {
        color: "#582707",
        padding: 10,
        fontFamily: 'Microsoft JhengHei',
      },
      TextField:{
          width:'275px',
      },
      text:{
        height:'60px',
      }
}));
/*------------------------------*/




export default function Apply(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [inputs, setInputs] = React.useState({
        std_id: '',  
    });
  

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = fieldname => event => {
    event.persist();
    setInputs(inputs => ({...inputs, [fieldname]: event.target.value }));
  }

  const handleSubmit = () =>{
    setOpen(false);
    console.log("stdid",inputs.std_id);
    console.log("csid",props.csid);
    fetch('/teacher/Addstudent',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          std_id:inputs.std_id,
          cs_id:props.csid,
      })
  })
  window.location.reload();
  };

  return (
    <div className={classes.root}>
     <Fab aria-label="add" style={{color:'#ffffff'}} className={classes.fab} onClick={handleClickOpen} >
      <AddIcon />
    </Fab>
      <Dialog onClose={handleClose}  open={open} variant="inline" fullWidth maxWidth="xs">
        <DialogTitle  edge="start"onClose={handleClose}>
    
            <Typography className={classes.typoHeading} variant="h5">
                新增學生
            </Typography>
        </DialogTitle>

        <DialogContent className={classes.text}>
        
        {/* <Grid container spacing={1}  
        direction="column"  
        justify="center"  
        alignItems="flex-start"
        >

            <Grid item xs={12} row>  */}
              
                {/* <div> */}
                {/* <Typography className={classes.inputName} variant="body1">
                    學生學號：
                 */}
                {/* <FormControl variant="outlined" size="small"> */}
                <TextField 
                id="std_id"
                label="學生學號"
                name="stdid"
                value={inputs.stdid}
                onChange={handleChange('std_id')}
                size="small"
                variant="outlined"
                className={classes.TextField}
            />
                {/* </FormControl> */}
                {/* </Typography> */}
                {/* </div> */}
            {/* </Grid>   */}

            {/* <Grid item xs={12}>
                
                <div >
                <Typography className={classes.inputName} variant="body2">
                    請假事由：
                </Typography>

                
                </div>
            </Grid> */}
        {/* </Grid> */}
        </DialogContent>

        <DialogActions>
        <Button onClick={handleClose} color="secondary" autoFous>關閉視窗</Button>
        <Button  
        onClick={handleSubmit}
        color="primary" autoFous>確認送出</Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}
