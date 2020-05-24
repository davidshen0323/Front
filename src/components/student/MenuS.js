import React from 'react';
import clsx from 'clsx';
import logo from '../../img/Rollsup.jpeg';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';
import GroupIcon from '@material-ui/icons/Group';
import {Link, useParams} from "react-router-dom";
import { useTheme } from '@material-ui/core/styles';
import PanToolIcon from '@material-ui/icons/PanTool';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {ListItemText, ListItemIcon, ListItem, IconButton, Divider, List, Drawer, AppBar, Toolbar, Button, Grid, Collapse} from '@material-ui/core/';

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
    fontSize:17,
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
  const [open2, setOpen2] = React.useState(true);

  const handleClick = () => {
    setOpen2(!open2);
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
        <List
    component="nav"
    aria-labelledby="nested-list-subheader"
    subheader
    >
      <ListItem button>
        <ListItemLink href="/homepages">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="我的課程" />
        </ListItemLink>
      </ListItem>
      <ListItem button>
        <ListItemLink href="/SInformation">
          <ListItemIcon>
            <PermContactCalendarIcon />
          </ListItemIcon>
          <ListItemText primary="基本資料" />
        </ListItemLink>
      </ListItem>
      <ListItem button onClick={handleClick}>
      <ListItemLink component={Link} to={`/functions/${params["cs_id"]}`}>
        <ListItemIcon>
          <AppsIcon />
        </ListItemIcon>
        <ListItemText primary="功能" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItemLink>
      </ListItem>
      <Divider />
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemLink component={Link} to={`/rollcallRD/${params["cs_id"]}`}>
              <ListItemIcon>
                <AccessTimeIcon />
              </ListItemIcon>
              <ListItemText primary="點名" />
            </ListItemLink>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemLink component={Link} to={`/LeaveBlockS/${params["cs_id"]}`}>
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="請假申請" />
            </ListItemLink>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemLink component={Link} to={`/members/${params["cs_id"]}`}>
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="班級名單" />
            </ListItemLink>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemLink component={Link} to={`/ViewAnnouncements/${params["cs_id"]}`}>
              <ListItemIcon>
                <NotificationsActiveIcon />
              </ListItemIcon>
              <ListItemText primary="公告" />
            </ListItemLink>
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemLink component={Link} to={`/QAlist_S/${params["cs_id"]}`}>
              <ListItemIcon>
                <HelpOutlineIcon />
              </ListItemIcon>
              <ListItemText primary="發問Q&A" />
            </ListItemLink>
          </ListItem>
          <ListItem button className={classes.nested}>
          <ListItemLink component={Link} to={`/selectHW_S/${params["cs_id"]}`}>
            <ListItemIcon>
              <PanToolIcon />
            </ListItemIcon>
            <ListItemText primary="課堂舉手" />
            </ListItemLink>
          </ListItem>
        </List>
      </Collapse>
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