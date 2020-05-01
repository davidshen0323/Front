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
import RollcallRDS from './rollcallRDStable';
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
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});





export default function RDSB(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
 

  return (
    <div>
     <IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
      <AssignmentOutlinedIcon />
      </IconButton>


      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
             
        
      <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >
        <Grid item={1}>
        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton> 
        </Grid>

          <Grid item  sm={8}>
         <ListItem alignItems="flex-start">

         <ListItemText
          primary="學號"
          secondary={
          <Typography
                component="span"
                variant="body2"
                className={classes.inline}>
                {props.stdid}
          </Typography>
          }

        />

<ListItemText
          primary="姓名"
          secondary={
          <Typography
                component="span"
                variant="body2"
                className={classes.inline}>
                {props.name}
          </Typography>
          }

        />

<ListItemText
          primary="系級"
          secondary={
          <Typography
                component="span"
                variant="body2"
                className={classes.inline}>
                {props.department}
          </Typography>
          }

        />

        </ListItem>
          </Grid>


          <Grid item xs={3} >
        {/* present={props.present} absent={props.absent} otherwise={props.otherwise} */}
        
            <ListItem>
              <ListItemText
                  primary="出席"
                  secondary={
                  <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}>
                          {props.present}
                  </Typography>
                  }
                />

              <ListItemText
                  primary="請假"
                  secondary={
                  <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}>
                          {props.otherwise}
                  </Typography>
                  }
                />

              <ListItemText
                  primary="缺席"
                  secondary={
                  <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}>
                          {props.absent}
                  </Typography>
                  }
                />

        </ListItem>
        </Grid>
</Grid>
    </Toolbar>

        </AppBar>

        <List>
          <RollcallRDS stdid={props.stdid}/>
        </List>
      </Dialog>
    </div>
  );
}
