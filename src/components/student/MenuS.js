import React from 'react';
import clsx from 'clsx';

import PropTypes from 'prop-types';

import logo from '../../img/Rollsup.jpeg';
import { useParams} from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import AppsIcon from '@material-ui/icons/Apps';

import ListIcon from '@material-ui/icons/List';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import GroupIcon from '@material-ui/icons/Group';
import { useTheme } from '@material-ui/core/styles';
import PanToolIcon from '@material-ui/icons/PanTool';
import { makeStyles } from '@material-ui/core/styles';

import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import {Typography, ListItem, IconButton, Divider, Drawer, AppBar, Toolbar, Button, Grid} from '@material-ui/core/';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.text.secondary,
    '&:hover > $content': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:focus > $content, &$selected > $content': {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: 'var(--tree-view-color)',
    },
    '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
      backgroundColor: 'transparent',
    },
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
// content: {
//   flexGrow: 1,
//   padding: theme.spacing(3),
//   transition: theme.transitions.create('margin', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   marginLeft: -drawerWidth,
// },
contentShift: {
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.enteringScreen,
  }),
  marginLeft: 0,
},
content: {
  color: theme.palette.text.secondary,
  borderTopRightRadius: theme.spacing(2),
  borderBottomRightRadius: theme.spacing(2),
  paddingRight: theme.spacing(1),
  padding:10,
  fontWeight: theme.typography.fontWeightMedium,
  '$expanded > &': {
    fontWeight: theme.typography.fontWeightRegular,
  },
},
group: {
  marginLeft: 0,
  '& $content': {
    paddingLeft: theme.spacing(2),
  },
},
expanded: {},
selected: {},
label: {
  fontWeight: 'inherit',
  color: 'inherit',
},
labelRoot: {
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0.5, 0),
},
labelIcon: {
  marginRight: theme.spacing(1),
},
labelText: {
  fontWeight: 'inherit',
  flexGrow: 1,
},
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

function StyledTreeItem(props) {
  const classes = useStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType.isRequired,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

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

  const f1 = () => {
    window.location.href=`/homepages`
  }
  const f2 = () => {
    window.location.href=`/functions/${params["cs_id"]}`
  }
  const f3 = () => {
    window.location.href=`/rollcallRD/${params["cs_id"]}`
  }
  const f4 = () => {
    window.location.href=`/LeaveBlockS/${params["cs_id"]}`
  }
  const f5 = () => {
    window.location.href=`/members/${params["cs_id"]}`
  }
  const f6 = () => {
    window.location.href=`/ViewAnnouncements/${params["cs_id"]}`
  }
  const f7 = () => {
    window.location.href=`/QAlist_S/${params["cs_id"]}`
  }
  const f8 = () => {
    window.location.href=`/selectHW_S/${params["cs_id"]}`
  }
  const f9 = () => {
    window.location.href=`/SInformation`
  }
  // 登出
  // const f10 = () => {
  //   action="/logout", method="POST"
  // }
  

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

        <TreeView
      className={classes.root}
      defaultExpanded={['11']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      <StyledTreeItem nodeId="1" labelText="我的課程" labelIcon={HomeIcon}>
        {/* <StyledTreeItem nodeId="2" labelText="功能" labelIcon={AppsIcon}> */}
          <StyledTreeItem
            onClick={f1}
            nodeId="2"
            labelText="課程列表"
            labelIcon={ListIcon}
            color="#1a73e8"
            bgColor="#e8f0fe"
          />

          <StyledTreeItem
            onClick={f2}
            nodeId="3"
            labelText="功能列表"
            labelIcon={AppsIcon}
            color="#1a73e8"
            bgColor="#e8f0fe"
          />
                   <Divider />

          <StyledTreeItem
            onClick={f3}
            nodeId="4"
            labelText="點名"
            labelIcon={AccessTimeIcon}
            color="#1a73e8"
            bgColor="#e8f0fe"
          />
          <StyledTreeItem
            onClick={f4}
            nodeId="5"
            labelText="請假申請"
            labelIcon={AssignmentIcon}
            color="#e3742f"
            bgColor="#fcefe3"
          />
          <StyledTreeItem
            onClick={f5}
            nodeId="6"
            labelText="班級名單"
            labelIcon={GroupIcon}
            color="#a250f5"
            bgColor="#f3e8fd"
          />
          <StyledTreeItem
            onClick={f6}
            nodeId="7"
            labelText="公告"
            labelIcon={NotificationsActiveIcon}
            color="#3c8039"
            bgColor="#e6f4ea"
          />
          <StyledTreeItem
            onClick={f7}
            nodeId="8"
            labelText="發問Q&A"
            labelIcon={HelpOutlineIcon}
            color="#3c8039"
            bgColor="#e6f4ea"
          />
          <StyledTreeItem
            onClick={f8}
            nodeId="9"
            labelText="課堂舉手"
            labelIcon={PanToolIcon}
            color="#3c8039"
            bgColor="#e6f4ea"
          />
        </StyledTreeItem>
        <Divider />

      {/* </StyledTreeItem> */}
      <StyledTreeItem onClick={f9} nodeId="10" labelText="基本資料" labelIcon={PermContactCalendarIcon} />
      <Divider />
      <form action="/logout" method="POST">
        <Button className={classes.logoutButton} type="submit" variant="outline" >登出</Button>
      </form>
      {/* <StyledTreeItem nodeId="11" labelText="登出" labelIcon={ExitToAppIcon} /> */}
      <Divider />

    </TreeView>

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