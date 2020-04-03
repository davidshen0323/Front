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




export default function RDSB() {
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
        
          <Grid item xs={12} sm={4}>
           
         <ListItem alignItems="flex-start">
           
           <ListItemText
          primary="學號"
          secondary={
          <Typography
                component="span"
                variant="body2"
                className={classes.inline}>
              406401111
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
              李李李
          </Typography>
          }
        />
        </ListItem>
        </Grid>

        <Grid item xs={12} sm={4}>
           
           <ListItem alignItems="flex-start">
        <ListItemText
          primary="分組"
          secondary={
          <Typography
                component="span"
                variant="body2"
                className={classes.inline}>
              01
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
              資管三甲
          </Typography>
          }
        />

      </ListItem>

          </Grid>



          <Grid item sm={3}>
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
