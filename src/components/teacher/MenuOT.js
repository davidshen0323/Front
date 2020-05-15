import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Grid, Typography} from '@material-ui/core/';
import logo from '../../img/Rollsup.jpeg';
import clsx from 'clsx';
import {useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import {Link, useParams} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    //marginBottom: 68, //會讓menu跟下面東西的距離改變
    
  },

  logoutButton: {
    marginRight: theme.spacing(2),
    fontFamily: 'Microsoft JhengHei',
    fontWeight: 'bold',
    fontSize:18,
    color: "#582707",
    backgroundColor: "#fffaea",
    
  },
  School: {
    minWidth: 100,
    fontFamily: 'Microsoft JhengHei',
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 30
    
  },
  
  Nav: {
    margin: `${theme.spacing(1)}px auto`,
    // flexGrow: 1,
  },
  
  list: {
    marginLeft: 20,
    marginRight: 20,
   },


   toolbar: {
     backgroundColor: '#fffaea',
  
   },

   navbutton: {
    backgroundColor: "#fffaea",
   },

   navbuttext: {
    color: "white",
    fontFamily: 'Microsoft JhengHei',
    fontWeight: 'bold',
   },
 
   arrow: {
     color:'white',
   },

   button: {
    margin: theme.spacing(1),
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    width:'200px',
    fontSize:18,
    fontFamily: 'Microsoft JhengHei',
    color: "#582707",
    backgroundColor: "#fffaea",
    fontWeight:'bold',
    borderStyle: 'none'
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
  color: "#582707",
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
  // necessary for content to be below app bar
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
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function LoginMenu() {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const params = useParams();
        console.log(params);

  return (
    <div className={classes.root}>
        
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          >
            <Toolbar className={classes.toolbar}>
            <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

              {/* <Typography className={classes.School} color="inherit" variant="h6">輔仁大學</Typography> */}
              
              <img src={logo} width="200px"></img>
              {/* <Button 
                variant="outlined"
                className={classes.button}
                href="/homepaget"
                >
                我的課程
              </Button> */}

                

              {/* <Button 
                variant="text"
                className={classes.button}
                href="/TInformation"
                >
                基本資料
                </Button> */}
              

              <Grid container
               direction="row" 
               justify="flex-end"
               className={classes.Nav}
              // wrap="nowrap"
              spacing={2}
              >
              <Grid item>   
              <form action="/logout" method="POST">

                  
                <Button className={classes.logoutButton} type="submit" variant="outline" >登出</Button>
              </form>
              </Grid>
                
              </Grid>
              </Toolbar>
          </AppBar>

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

        <List>
        <ListItemLink href="/homepaget">
        <ListItemIcon>
            <HomeIcon />
        </ListItemIcon>
          <ListItemText primary="首頁" />
        </ListItemLink>
        
        <ListItemLink href="/TInformation">
        <ListItemIcon>
            <PermContactCalendarIcon />
        </ListItemIcon>
          <ListItemText primary="基本資料" />
        </ListItemLink>


        </List>
      

      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       
      </main>

    </div>    
  )

}