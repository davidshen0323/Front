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




export default function RDTB() {
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
           
        <ListItem alignItems="flex-start">
           
        <ListItemText
          primary="日期與時間"
          secondary={
          <Typography
                component="span"
                variant="body2"
                className={classes.inline}>
              	2019.11.05 11:05
          </Typography>
          }
        />

        <ListItemText
          primary="計分設定"
          secondary={
          <Typography
                component="span"
                variant="body2"
                className={classes.inline}>
                計分
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
              人臉辨識
          </Typography>
          }
        />
        </ListItem>

        </Grid>



        <Grid item sm={3}>
            <ListItem>
              <TTable/>
            </ListItem>
        </Grid>
    </Grid>
    </Toolbar>

    </AppBar>
        <List>
          <RollcallRDT/>
        </List>
    </Dialog>
    </div>
  );
}
