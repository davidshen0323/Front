import React, {useState,useEffect} from 'react';
import MyMenu from '../Menu';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { TextField, Typography,TableBody, TableCell , TableRow ,Fab } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from 'axios';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ButtonBase from "@material-ui/core/ButtonBase";
import {Link} from "react-router-dom";

import function1 from "./Function1";
import JoinClass from '../student/joinClass';


const useStyles = makeStyles(theme => ({
    
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },

    root: {
      // flexGrow: 1,
      margin: 'auto',
      // backgroundColor:'#E0E0E0',
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
      padding: theme.spacing(5),
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 50,
      marginBottom: 50,
      textAlign: 'center',
      backgroundColor: 'white',
      border: '2px',
      borderStyle: 'solid',
      borderColor: 'white',
      width: '80%',
      borderRadius: '30pt',
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

    fab: {
      position: 'fixed',
      bottom: theme.spacing(5),
      right: theme.spacing(5),
    },

    cardaction: {
      maxWidth: 600,
    },
  }));

export default function HomepageS() {

  const classes = useStyles();

  const [Sclass, setClass] = React.useState([]);
  

  const classList = ['cs_id','cs_name','teacher_name'];
  
  useEffect(() => {
    async function fetchData() {
      const result  = await axios.get(`/student/HomePage1_s/one/`)
      
      setClass(result.data);
      // console.log(result.data);
      // console.log(result.data[0]['cs_id']);
      
      // const path ={result.data['cs_id']}
    }
    
    fetchData();
  }, []);

  // const handleSubmit = () => {
  //   async function getCsid(){
  //   const csid = await axios.get(`/student/HomePage1_s/one/`);
  //   setCsid(csid.data);
  //   let classid = JSON.stringify(csid.data).toString();
  //   let i;
  //   for(i=0; i < classid.length; i++)
  //   {
  //   console.log(csid.data[i]['cs_id']);
  //   }
  // }
  //   getCsid();
  // }
     {/* 加入課程 */}
     const [openJoinClass, closeJoinClass] = React.useState(false);
     const onCloseJoinClass = () => {
       closeJoinClass(openJoinClass ? false : true);
     };



  return (
    <div className={classes.root}>
    <MyMenu />
     {/* 加入課程 */}
     <Fab color="primary" aria-label="add" className={classes.fab} onClick={() => closeJoinClass(true)}>
          <AddIcon />
        </Fab>
      {/* {console.log(Sclass)} */}
    <Grid
    container
    direction="row"
    justify="center"
    // alignItems="center"
    >

          <Grid item>
            
                
                    {Sclass.map((classs,index) => (
                    // <Card className={classes.card}>
            <CardActionArea className={classes.cardaction} component={Link} to={`/function1/${classs["cs_id"]}`}>
              {/* <CardActions> */}
                        {/* {console.log(index)} */}
                      <Paper key = {index}>
                      {/* <ButtonBase> */}
                        {console.log(classs)}

                        {/* <TableCell>{index+1}</TableCell> */}
                        {
                          classList.map( (list, i) =>
                          <TableCell key={i} component="th" scope="row" align="center">
                            {classs[list]}
                          </TableCell>
                          )
                        }
                        
                        {/* </ButtonBase> */}
                      </Paper>
                        {/* </CardActions> */}
                        </CardActionArea>
                        // </Card>
                       
                      ))}     
            
          </Grid>
        
      </Grid>
      {/* 學生加入課程 */}
      <JoinClass open={openJoinClass} handleClose={onCloseJoinClass}/>
    </div>
    
  )

}
