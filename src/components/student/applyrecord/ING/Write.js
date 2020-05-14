import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import  {Typography, TextareaAutosize} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
}));
/*------------------------------*/




export default function Write(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [inputs, setInputs] = React.useState(
      {content:props.content,}
    );
  
    const handleChange = fieldname => event => {
      event.persist();
      setInputs(inputs => ({...inputs, [fieldname]: event.target.value}));
      
  }


  const handleClickOpen = () => {
    setOpen(true);
    console.log(props.time)
    console.log(props.applytime);
    console.log(props.type)
    console.log(props.content)
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () =>{
    setOpen(false);
    
    console.log(inputs.content);
    fetch('/student/takeleave/UpdateContent',{
      method: 'PUT',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        rc_id:props.id,
        tl_content:inputs.content,
      })
  })
  };

  return (
    <div className={classes.root}>
      <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
        <CreateIcon />
      </IconButton>

      <Dialog onClose={handleClose}  open={open} variant="inline" fullWidth maxWidth="sm">
        <DialogTitle  edge="start"onClose={handleClose}>
        
        <ListItem alignItems="flex-start">
          
        <ListItem>
          <Typography className={classes.inputName} >
            點名時間:
        </Typography>
            <Typography
                  className={classes.inline}>
                    {props.time}
            </Typography>
          </ListItem>  


             <ListItem>
          <Typography className={classes.inputName} >
            申請時間:
        </Typography>
            <Typography
                  
                  className={classes.inline}>
                    {props.applytime}
            </Typography>
          </ListItem>  
          
          </ListItem>
        </DialogTitle>

        <DialogContent dividers>
        <Grid container spacing={1}  
        direction="column"  
        justify="center"  
        alignItems="flex-start"
        >

            <Grid item xs={12} row> 
              
                <div>
                <Typography className={classes.inputName} variant="body1">
                    請假類別：
                
                <FormControl variant="outlined" className={classes.formControl} size="small">
                    {/* <InputLabel>假別</InputLabel> */}
                    <Select
                    native
                    value={props.type}
                    // onChange={handleChange('typeid')}
                   disabled
                    >
                    <option value="" />
                    <option value={4}>病假</option>
                    <option value={5}>事假</option>
                    <option value={6}>喪假</option>
                    <option value={7}>公假</option>
                    </Select>
                </FormControl>
                </Typography>
                </div>
            </Grid>  

            <Grid item xs={12}>
                
                <div >
                <Typography className={classes.inputName} variant="body2">
                    請假事由：
                </Typography>

                <Typography className={classes.inputName} variant="body2">
                    <TextareaAutosize 
                    //onChange={()=> setInputs(2)} id="question" 
                    style={{borderRadius:10, padding:8, width:550, height:50, fontSize:14, fontFamily:'微軟正黑體'}}    rowsMin={5} placeholder="請詳述請假事由"
                    value={inputs.content}
                    onChange={handleChange('content')}/>
                </Typography>     
                </div>
            </Grid>
        </Grid>
        </DialogContent>

        <DialogActions>
        <Button onClick={handleClose} color="secondary" autoFous>關閉視窗</Button>
        <Button  
        // disabled={inputs===2 ? false : true} 
        onClick={handleSubmit}
        color="primary" autoFous>確認送出</Button>
        </DialogActions>

      </Dialog>
    </div>
  );
}
