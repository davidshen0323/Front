import React from 'react';
// import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Grid, Typography} from '@material-ui/core/';
import logo from '../../img/Rollsup.jpeg';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: 68, //會讓menu跟下面東西的距離改變
    
  },

  menuButton: {
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
}
}));


export default function LoginMenu() {

  const classes = useStyles();

  // const [value, setValue] = React.useState("value");

  return (
    <div className={classes.root}>
        
        <AppBar
          position="fixed"
          
          >
            <Toolbar className={classes.toolbar}>
            

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

                  
                <Button className={classes.menuButton} type="submit" variant="outline" >登出</Button>
              </form>
              </Grid>
                
              </Grid>
              </Toolbar>
          </AppBar>

    </div>    
  )

}