import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


export default function MyMenu() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
              </IconButton>
              
              <Button  component={Link} to='/homepage' color="inherit">首頁</Button>
              <Button  component={Link} to='/acceptance' color="inherit">排隊驗收</Button>
              <Button  component={Link} to='/tquestion' color="inherit">t排隊問題</Button>
              <Button  component={Link} to='/tacceptance' color="inherit">t排隊驗收</Button>
              <Button  component={Link} to='/examresult' color="inherit">結果</Button>

              <Typography className={classes.title} align="right" variant="body1" >教師</Typography>
              
            </Toolbar>
        </AppBar>
    </div>    
  )

}
