import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import {useState,useEffect} from 'react';
import axios from 'axios';

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

  const [Sclass, setClass] = useState([]);

  const classList = ['cs_id'];
  const className = ['cs_name'];

  useEffect(() => {
    async function fetchData() {
        const result = await axios.get(`/class/all/10811000DMG741D7411023900`);
        setClass(result.data);
      //   console.log(result.data);
    }
    fetchData();
}, []);

  const classes = useStyles();
  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
              </IconButton>
              
              <Button component={Link} to='/Homepage1' color="inherit">輔仁大學</Button>
              {/* <Button  component={Link} to='/acceptance' color="inherit">排隊驗收</Button> */}
              {/* <Button  component={Link} to='/question' color="inherit">排隊問題</Button> */}
              <label>{Sclass[0]}</label>
              <Button component={Link} to='/Homepage1' color="inherit">登出</Button>
              {/* <Typography className={classes.title} align="right" variant="body1">登出</Typography> */}
              
            </Toolbar>
        </AppBar>
    </div>    
  )

}