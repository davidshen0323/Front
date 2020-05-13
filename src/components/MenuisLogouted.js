import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from '../../src/img/Rollsup.jpeg';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
 
  School: {
    minWidth: 100,
    fontFamily: 'Microsoft JhengHei',
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 30
  },
  
  title: {
    flexGrow: 1,

  },
  list: {
   marginLeft: 20,
   marginRight: 20,
   fontFamily: 'Microsoft JhengHei',
   fontWeight: 'bold',
  },

  toolbar: {
    backgroundColor: '#fffaea',
    
  },

  arrow: {
    color:'white',
  }
  
}));


export default function MyLogoutMenu() {

  const classes = useStyles();
  return (
    <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="fixed"
          >
            <Toolbar className={classes.toolbar}>
            {/* <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            > */}
                {/* <MenuIcon /> */}
              {/* </IconButton> */}
              
              {/* <Typography className={classes.School} color="inherit">輔仁大學</Typography> */}
             
              <img src={logo} width="200px"></img>
          {/* <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton className={classes.arrow} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
          
          <Typography className={classes.list}>請先登入以使用功能</Typography>
        
       
      </Drawer> */}
      
              </Toolbar>
          </AppBar>
    </div>    
  )

}
