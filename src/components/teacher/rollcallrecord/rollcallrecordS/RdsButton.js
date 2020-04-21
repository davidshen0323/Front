import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import RollcallRDS from './rollcallRDStable';
import STable from '../rollcallrecordS/stable';
import RollcallRDSTT from './RollcallRDSTT';
import Grid from '@material-ui/core/Grid';
import {useState,useEffect} from 'react';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  inputForm: {
    paddingLeft: 65,
    paddingTop: 10,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});





export default function RDSB() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [rollcallrecordtitle, setRollcallrecordtitle] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   /*=========== Create Table HEAD ===========*/
 const rollcallrecordList = [ 'std_id', 'std_name', 'std_department']
 
 useEffect(() => {
  async function fetchData() {
      const result = await axios.get(`/teacher/rollcall/studentList/10811000DMG741D7411023900`);
      
      console.log(result.data);
 
      setRollcallrecordtitle(result.data);
  }
  fetchData();
 }, []);

  return (
    <div>
     <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
      <AssignmentOutlinedIcon />
      </IconButton>


      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>  
        
      <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
        
          <Grid item xs={12} sm={8}>

         <ListItem>
            <RollcallRDSTT/>
        </ListItem>
          </Grid>



          <Grid item sm={2}>
          <ListItem>
              <STable/>
            </ListItem>
          </Grid>
        </Grid>

    </Toolbar>

        </AppBar>

        <List>
          <RollcallRDS/>
        </List>
      </Dialog>
    </div>
  );
}
