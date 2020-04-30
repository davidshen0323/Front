import React from 'react';
// import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core/';
import Typography from '@material-ui/core/Typography';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    marginBottom: 68, //會讓menu跟下面東西的距離改變
    
  },

  menuButton: {
    marginRight: theme.spacing(2),
    fontFamily: 'Microsoft JhengHei',
    fontWeight: 'bold',
    color: "white",
    backgroundColor: "#003060",
    
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
     backgroundColor: "#003060",
  
   },

   navbutton: {
    backgroundColor: "#003060",
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
    fontFamily: 'Microsoft JhengHei',
    color: "white",
    backgroundColor: "#003060",
    fontWeight:'bold',
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
            

              <Typography className={classes.School} color="inherit" variant="h6">輔仁大學</Typography>
              <Button 
                variant="contained"
                className={classes.button}
              >
                我的課程
              </Button>

              <Button 
                variant="contained"
                className={classes.button}
              >
                基本資料
                </Button>

              

              <Grid container
               direction="row" 
               justify="flex-end"
               className={classes.Nav}
              // wrap="nowrap"
              spacing={2}
              >
              <Grid item>   
              <form action="/logout" method="POST">

                  
                <Button className={classes.menuButton} type="submit" variant="contained" >登出</Button>
              </form>
              </Grid>
                
              </Grid>
              </Toolbar>
          </AppBar>

    </div>    
  )

}