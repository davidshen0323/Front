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
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {brown} from '@material-ui/core/colors';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Orange from '@material-ui/core/colors/orange';
import Smile from '@material-ui/icons/SentimentVerySatisfied';

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
      <Typography variant="h6">{children}</Typography>
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
    title:{
        //color: "#582707",
        fontFamily: 'Microsoft JhengHei',
        fontWeight:'bold',
        fontSize:20,
        lineHeight:1,
      },
    title2:{
      fontFamily: 'Microsoft JhengHei',
      fontSize:12,
      lineHeight:1,
    },
    button:{
        width:"10%",
        height:40,
        marginLeft:10,
    },
    Avatar:{
      backgroundColor:Orange[500]
    }
}));
/*------------------------------*/




export default function ViewQAS(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const [inputs, setInputs] = React.useState({
        typeid:'',
        tl_content:'',    
    });
  
    const handleChange = fieldname => event => {
      event.persist();
      setInputs(inputs => ({...inputs, [fieldname]: event.target.value}));
      
  }

  // const handleChange = (event) => {
  // const name = event.target.name;
  // setState({
  //     ...state,
  //     [name]: event.target.value,
  // });
  // };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () =>{
    setOpen(false);
    console.log(props.id);
    console.log(inputs.tl_content);
    console.log(inputs.typeid);
    fetch('/student/takeleave',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          rc_id:props.id,
          tl_content:inputs.tl_content,
          tl_type_id:inputs.typeid,
      })
  })
  window.location.reload();
  };

  return (
    <div className={classes.root}>
      <IconButton variant="outlined" style={{color:brown[500]}} onClick={handleClickOpen}>
        <AssignmentOutlinedIcon />
      </IconButton>

      <Dialog onClose={handleClose}  open={open} variant="inline" fullWidth maxWidth="sm">
        <DialogTitle  edge="start" onClose={handleClose}>
        
        <ListItem alignItems="flex-start">
          
          <ListItemText  
           primary={
            <Typography
              className={classes.title}
              >
                {props.question}
            </Typography>
            }
            secondary={
            <Typography
              component="span"
              variant="body2"
              className={classes.title2}
              >
                {props.time}
            </Typography>
              }
                  />
        </ListItem>
        </DialogTitle>
        

        <DialogContent dividers style={{backgroundColor:'#fafafa'}}>

        <Grid container spacing={1}  
            direction="column"  
            justify="center"  
            alignItems="flex-start"
         >

            <Grid item xs={12} row> 
              
                <div>
                <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar src="https://image.flaticon.com/icons/svg/1933/1933446.svg"/>
                </ListItemAvatar>

          <ListItemText style={{marginRight:10,}}
            primary={
            //   <Typography
            //   className={classes.inline}
            //   >
            "B1"
            }
            secondary={
            // <Typography
            //       component="span"
            //       variant="body2"
            //       className={classes.inline}
            //       >
                   "04:48"
            // </Typography>
            }
  
          />

         
          <ListItemText style={{borderRadius:10,width:550,fontFamily:'微軟正黑體',backgroundColor:'#ffffff',padding:10}}>
              hello~
          </ListItemText> 
          </ListItem>
          </div>
            </Grid>  

            <Grid item xs={12} row> 
              
              <div>
              <ListItem alignItems="flex-start">
              <ListItemAvatar>
                    <Avatar className={classes.Avatar}>
                    <Smile/>
                    </Avatar>
              </ListItemAvatar>

        <ListItemText style={{marginRight:10,}}
          primary={
          //   <Typography
          //   className={classes.inline}
          //   >
          "B1"
          }
          secondary={
          // <Typography
          //       component="span"
          //       variant="body2"
          //       className={classes.inline}
          //       >
                 "04:48"
          // </Typography>
          }

        />

       
        <ListItemText style={{borderRadius:10,width:550,fontFamily:'微軟正黑體',backgroundColor:'#ffffff',padding:10}}>
            hello~
        </ListItemText> 
        </ListItem>
        </div>
          </Grid>
          </Grid>

        </DialogContent>

        <DialogActions dividers >
        <Grid container spacing={1}  
        justify="flex-start"  
        alignItems="flex-start"
        >
           <Grid item xs={12} row> 
              
              <div>
              <ListItem alignItems="flex-start">
              {/* <ListItemAvatar>
                
              </ListItemAvatar> */}


       
        <ListItemText >
        <TextField
          id="outlined-size-small"
          defaultValue="請輸入內文"
          variant="outlined"
          size="small"
          style={{backgroundColor:'#fafafa',width:470}}
        />
        
        <Button  
        className={classes.button}
        onClick={handleSubmit}
        color="default" autoFous>留言
        </Button> 
        </ListItemText> 
        </ListItem>
        </div>
          </Grid>   
        {/* <Button onClick={handleClose} color="secondary" autoFous>關閉視窗</Button>
        <Button  
        // disabled={inputs===2 ? false : true} 
        onClick={handleSubmit}
        color="primary" autoFous>確認送出</Button> */}
        </Grid>
        </DialogActions>

      </Dialog>
    </div>
  );
}
