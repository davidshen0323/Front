import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';

/*---drawer---*/
import clsx from 'clsx';
import { useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import homepage1 from './student/Homepage1';

const drawerWidth = 200;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  School: {
    minWidth: 100,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  title: {
    flexGrow: 1,

  },
  list: {
   marginLeft: 20,
   marginRight: 20,
  },
  
}));


export default function MyLogoutMenu() {

  const [Sclass, setClass] = useState([]);

  const classList = ['cs_id','cs_name'];

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

//   useEffect(() => {
//     async function fetchData() {
//         const result = await axios.get(`/class/all/10811000DMG741D7411023900`);
//         setClass(result.data);
//       //   console.log(result.data);
//     }
//     fetchData();
// }, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          >
            <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
                <MenuIcon />
              </IconButton>
              <Typography className={classes.School} color="inherit">輔仁大學</Typography>
          <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
          
          <Typography className={classes.list}>請先登入以使用功能</Typography>
        
       
      </Drawer>
      
              {/* <Grid container direction="row" justify="space-between">
                <Grid item> */}
                  {/* <Button component={Link} to='/Homepage1' color="inherit">輔仁大學</Button> */}
                  {/* <Button  component={Link} to='/acceptance' color="inherit">排隊驗收</Button> */}
                  {/* <Button  component={Link} to='/question' color="inherit">排隊問題</Button> */}
                  {/* <label>{Sclass[0]}</label> */}
                {/* </Grid>
                <Grid item> */}
                  {/* <Button component={Link} to='/homepage1' color="inherit">登入</Button>
                  <Button component={Link} to='/register' color="inherit">註冊</Button> */}
                  {/* <Button  component={Link} to='/rollcall' color="inherit">點名</Button> */}
                  {/* <Typography className={classes.title} align="right" variant="body1">登出</Typography> */}
                {/* </Grid>
              </Grid> */}
              </Toolbar>
          </AppBar>
    </div>    
  )

}