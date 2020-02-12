import React, {useState,useEffect} from 'react';
import MyMenu from './Menu';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField, Typography, ButtonGroup } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
    
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },

    root: {
      flexGrow: 1,
    },
    photo: {
      padding: theme.spacing(10),
      textAlign: 'center',
      height: 100,
      width: 100,
      marginTop: 50,
      marginLeft: 50,
      marginRight: 10,
      color: theme.palette.text.secondary,
    },
    paperclass: {
      padding: theme.spacing(7),
      marginTop: 50,
      textAlign: 'center',
      backgroundColor: 'lightgray',
      border: '2px',
      borderStyle: 'solid',
      borderColor: 'darkblue',
    },

    paperleft: {
      backgroundColor: 'white',
    },

    textField: {
      marginLeft: theme.spacing(10),
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(10),
      width: 700,
    },

    button1: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(15),
    },
    
   
  }));

export default function Homepage1() {

  const [Sclass, setClass] = useState([]);

  const classes = useStyles();

  const classList = ['cs_id'];
  const className = ['cs_name'];

  useEffect(() => {
    async function fetchData() {
        const result = await axios.get(`/class/all`);
        setClass(result.data);
      //   console.log(result.data);
    }
    fetchData();
}, []);

  return (
    <div className={classes.root}>
    <MyMenu />
    
    <Grid container spacing={3}>

        <Grid item xs={4}>
        <Paper className={classes.photo}>photo</Paper>
        {/* <Typography className={classes.words}>沈大為</Typography> */}
        </Grid>

        <Grid item xs={8}>
        <TextField className={classes.textField} defaultValue='請輸入課程名稱'></TextField>
        <Paper className={classes.paperclass}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>D</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.</Typography>
          </Grid>
        </Grid>
      </Paper>
        </Grid>  
        
        <Grid item xs={4} spacing={1}>
        <ButtonGroup 
          orientation="vertical"
          className={classes.button1}
        >
        <Button>我的課程</Button>
        <Button>個人資料管理</Button>
        </ButtonGroup>
        </Grid>  

        <Grid item xs={8} spacing={1}>
        <Paper className={classes.paperclass}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>D</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.</Typography>
          </Grid>
        </Grid>
      </Paper>
        {/* <Paper className={classes.paper}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
          <Typography>photo</Typography>
          </Grid>
          <Grid item xs>
          <Typography>wordsaaaaaaaaaaaaaaaaaaaaaaaaaaaaagggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
          </Grid>
          </Grid>
        </Paper> */}
        </Grid>  

        <Grid item xs={4} spacing={1}>
        <Paper className={classes.paperleft}>
          
        </Paper>
        </Grid>  

        <Grid item xs={8} spacing={1}>
        <Paper className={classes.paperclass}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>D</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.</Typography>
          </Grid>
        </Grid>
      </Paper>
        </Grid>  
        
        <Grid item xs={4} spacing={1}>
        <Paper className={classes.paperleft}></Paper>
        </Grid>  

        <Grid item xs={8} spacing={3}>
        <Paper className={classes.paperclass}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar>D</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.</Typography>
          </Grid>
        </Grid>
      </Paper>
        </Grid>  
      </Grid>
    </div>
    
  )

}