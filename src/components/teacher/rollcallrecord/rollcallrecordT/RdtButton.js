import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import RollcallRDT from './rollcallRDTtable';
import TTable from '../rollcallrecordT/ttable';
import Grid from '@material-ui/core/Grid';
import {useState,useEffect} from 'react';
import axios from 'axios';
import {useLocation} from "react-router-dom";


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const RCID = props =>{
  const location=useLocation();

useEffect(()=> {
  console.log(location.pathname);
  console.log(location.state.detail);
},[location]);
};


export default function RDTB() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
 /*------------ STATE ------------*/
 const [students, setStudent] = React.useState([]);
 
 /*=========== Create Table HEAD ===========*/
const studentList = [ 'record_time','rc_inputsource']

useEffect(() => {
 async function fetchData() {
     const result = await axios.get(`/teacher/rollcall/oneRollcall/1`);
     console.log(result.data);
     
     setStudent(result.data);
 }
 fetchData();
}, []);

  const [rollcallrecord,setRollcallrecord] = useState(localStorage.getItem('rollcallrecord'));
 
 const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <input value={rollcallrecord}/>
    




     <IconButton variant="outlined" color="primary" onClick={handleClickOpen} >
      <AssignmentOutlinedIcon />
      </IconButton>


      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} >
              <CloseIcon />
            </IconButton>  
        
      <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
        
            
        <ListItem alignItems="flex-start">
          
        <ListItemText
          primary="日期與時間"
          secondary={
          <Typography
                component="span"
                variant="body2"
                className={classes.inline}>
              	{/* {rollcallrecord.record_time} */}
          </Typography>
          }

        />
           
        <ListItemText
          primary="來源"
          secondary={
          <Typography
                component="span"
                variant="body2"
                className={classes.inline}>
              {/* {rollcallrecord.rc_inputsource} */}
          </Typography>
          }
        />
        </ListItem>

        </Grid>



        {/* <Grid item sm={3}>
            <ListItem>
              <TTable/>
            </ListItem>
        </Grid> */}

    </Toolbar>

    </AppBar>
        <List>
          <RollcallRDT/>
        </List>
    </Dialog>
    </div>
  );
}
