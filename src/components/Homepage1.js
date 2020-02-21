import React, {useState,useEffect} from 'react';
import MyMenu from './Menu';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField, Typography, ButtonGroup, TableBody, TableCell , TableRow } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";
import homepage2 from "./Homepage2";

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
    
    card: {
      maxWidth: '80%',
    },
   
    classbutton: {
      width: 500,
    },
  }));

export default function Homepage1() {

  const [Sclass, setClass] = useState([]);

  const classes = useStyles();

  const classList = ['cs_id','cs_name'];

  useEffect(() => {
    async function fetchData() {
        const result = await axios.get(`/cs/all/10811000DMG741D7411023900`);
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
        <Card className={classes.card}>
          <ButtonBase
          component={Link}
          to ='/homepage2'
          >
            <CardActionArea>
              <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="data:image/jpeg;base64,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"
              title="Contemplative Reptile"
              />
              <CardContent>
                <Typography>
                  Test
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
              component={Link}
              to ='/homepage2'
              className={classes.classbutton}
              >
                <Typography>Test</Typography>
              </Button>
            </CardActions>
          </ButtonBase>
        </Card>

        {/* <Paper className={classes.paperclass}>
        <Grid container wrap="nowrap" spacing={2} component={Link} to='/homepage2'>
          <Grid item>
            <Avatar>D</Avatar>
          </Grid>
          <Grid item xs>
            <Typography>Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.</Typography>
          </Grid>
        </Grid>
      </Paper> */}
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
            <TableBody>
            {Sclass.map((cs,index) => (
              <TableRow key = {index}>
                <TableCell>{index+1}</TableCell>
                {
                  classList.map( (list, i) =>  i === 0 ?
                  <TableCell key={i} component="th" scope="row" align="center">
                    {cs[list]}
                  </TableCell>:
                  <TableCell key={i} align="left">{cs[list]}</TableCell>
                  )
                }
              </TableRow>
            ))}
            </TableBody>
            {/* <Typography>Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.</Typography> */}
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