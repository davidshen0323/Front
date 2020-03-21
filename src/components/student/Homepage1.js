import React, {useState,useEffect} from 'react';
import MyMenu from '../Menu';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField, Typography,TableBody, TableCell , TableRow } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
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
      padding: theme.spacing(6),
      marginTop: 50,
      textAlign: 'center',
      backgroundColor: 'lightgray',
      border: '2px',
      borderStyle: 'solid',
      borderColor: 'yellow',
      width: '100%',
    },

    paperleft: {
      backgroundColor: 'white',
    },

    textField: {
      marginLeft: theme.spacing(10),
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(10),
      width: 'auto',
    },

    button1: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(15),
    },
    
    card: {
      marginLeft: theme.spacing(10),
      marginTop: theme.spacing(3),
      maxWidth: '80%',
    },
   
    classbutton: {
      width: 500,
    },
  }));

export default function Homepage1() {

  const [Sclass, setClass] = useState([]);//Sclass 

  const classes = useStyles();

  const classList = ['cs_id','cs_name','teacher_name'];

  useEffect(() => {
    async function fetchData() {
        const result = await axios.get(`/HomePage1_s/one/406401628`);
        setClass(result.data);
        // console.log(result.data);
    }
    fetchData();
}, []);

  return (
    <div className={classes.root}>
    <MyMenu />
    
    <Grid container spacing={3}>

        <Grid item md={4}>
        <Paper className={classes.photo}>photo</Paper>
        {/* <Typography className={classes.words}>沈大為</Typography> */}
        </Grid>

        <Grid item md={8}>
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
        
        <Grid item xs={4}>
        <ButtonGroup 
          orientation="vertical"
          className={classes.button1}
        >
        <Button>我的課程</Button>
        <Button>個人資料管理</Button>
        </ButtonGroup>
        </Grid>  

        <Grid item xs={8}>
          {/* <Paper>
            {Sclass.map((classs,index) => (
              <Grid key ={index}>
              {
              classList.map( (list, i) => i === 0 ?
              <Grid key={i}>
              {classs[list]}
              <Grid>
                {classs[list]}
              </Grid>
              </Grid>:
              <Grid key={i}>{classs[list]}</Grid>
              )
              }
              </Grid>
            ))
          }
        </Paper> */}
        <TableBody>
            {Sclass.map((classs,index) => (
                <Paper className={classes.paperclass} >
              <TableRow key = {index}>
                {/* <TableCell>{index+1}</TableCell> */}
                {
                  classList.map( (list, i) =>  i === 0 ?
                  <TableCell key={i} component="th" scope="row" align="center">
                    {/* {classs[list]} */}
                    
        
            
            {classs[list]}
            
            
          
                   </TableCell>:
                  <TableCell key={i} align="left">{classs[list]}</TableCell>
                  )
                }
              </TableRow>
              </Paper> 
            ))}
            </TableBody> 
          </Grid>
          


            
        {/* // <Paper className={classes.paper}>
        // <Grid container wrap="nowrap" spacing={2}>
        //   <Grid item>
        //   <Typography>photo</Typography>
        //   </Grid>
        //   <Grid item xs>
        //   <Typography>wordsaaaaaaaaaaaaaaaaaaaaaaaaaaaaagggggggggggggggggggggggaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Typography>
        //   </Grid>
        //   </Grid>
        // </Paper>
        // </Grid>  

      //   <Grid item xs={4} spacing={1}>
      //   <Paper className={classes.paperleft}>
          
      //   </Paper>
      //   </Grid>  

      //   <Grid item xs={8} spacing={1} >
      //   <Paper className={classes.paperclass} >
      //   <Grid container wrap="nowrap" spacing={2} >
          
      //     <Grid item xs>
      //       <Typography>Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.</Typography>
      //     </Grid>
      //   </Grid>
      // </Paper>
      //   </Grid>  
        
      //   <Grid item xs={4} spacing={1}>
      //   <Paper className={classes.paperleft}></Paper>
      //   </Grid>  

      //   <Grid item xs={8} spacing={3}>
      //   <Paper className={classes.paperclass}>
      //   <Grid container wrap="nowrap" spacing={2}>
      //     <Grid item>
      //       <Avatar>D</Avatar>
      //     </Grid>
      //     <Grid item xs>
      //       <Typography>Truncation should be conditionally applicable on this long line of text as this is a much longer line than what the container can support.</Typography>
      //     </Grid>
      //   </Grid>
      // </Paper>
      //   </Grid>
          */}
      </Grid>
    </div>
    
  )

}