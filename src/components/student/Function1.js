import React, { Component, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import MyMenu from '../Menu';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Button from "@material-ui/core/Button";
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import { TextField, TableBody, TableCell , TableRow } from '@material-ui/core';

import AddQA from "./addQA";




const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      root: {
        // display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
      },

      content: {
        margin:10,
        justifyContent: 'center',
      },
      
      image: {
        height: '150px',
        width: '150px',
      },


      card: {
        width: 300,
        height: 300,
        marginTop: 80,
        marginBottom: 80,
        marginLeft: 'auto',
        marginRight: 'auto',
        // borderColor: 'red',
        // borderWidth: '3pt',
        // borderStyle: 'dotted',
      },

      cardaction: {
        width:'100%',
        height: '100%',
      },

      classbutton: {
        width: '100%',
      },

      ButtonBase: {
      //   justify: 'center',
      //   marginLeft: 500,
      },
    }));

    // class Homepage2 extends Component {
    //   render() {
    //     const { params } = this.props.match;
    //     return <div>
    //       <h4>class</h4>
    //       <p>This is Class {params.cs_id}.</p>
    //       {params.cs_id ? <b>ID: {params.cs_id}</b> : <i>ID is optional.</i>}
    //     </div>
    //   }
    // }
     
    // export default Homepage2;

    export default function Function1() {

        const classes = useStyles();

        
        
        const [openAddQA, closeAddQA] = React.useState(false);
        const onCloseAddQA = () => {
          closeAddQA(openAddQA ? false : true);

        };
        const params = useParams();
        console.log(params);
        
        return (

          
          <div className={classes.root}>
            <MyMenu />
            <br></br><br></br><br></br><br></br>
            <p>This is class {params.cs_id}</p>
            
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >

            <Grid item xs={12} sm={6} md={4} lg={4}>  
            <Card className={classes.card}>
            <CardActionArea className={classes.cardaction}>
              <ButtonBase
               component={Link}
               to={`/rollcall/${params.cs_id}`}
              >
              <CardContent>
              <CardMedia
              component="img"
              alt="點名"
              // height="140"
              image="https://image.flaticon.com/icons/svg/1828/1828867.svg"
              title="點名"
              className={classes.image}
              />
                 {/* <Typography>
                  點名
                </Typography> */}
              </CardContent>
            <CardActions>
              
                <Typography>點名</Typography>
            
            </CardActions>
              </ButtonBase>
              </CardActionArea>
        </Card>
        </Grid>
        
        <Grid item xs={12} sm={6} md={4} lg={4}>  
        <Card className={classes.card}>
            <CardActionArea className={classes.cardaction}>
              <ButtonBase
              component={Link}
              to ='/homepage2'
              
              >
              <CardContent>
              <CardMedia
              component="img"
              alt="請假審核"
              // height="140"
              image="https://image.flaticon.com/icons/svg/1828/1828610.svg"
              title="請假審核"
              className={classes.image}
              />
              </CardContent>
            <CardActions>
                <Typography>請假審核</Typography>
            </CardActions>
              </ButtonBase>
              </CardActionArea>
        </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>  
        <Card className={classes.card}>
            <CardActionArea className={classes.cardaction}>
              <ButtonBase
              component={Link}
              to ='/homepage2'
              // className={classes.ButtonBase}
              >
                <CardContent>
              <CardMedia
              component="img"
              alt="班級名單"
              // height="140"
              image="https://image.flaticon.com/icons/svg/2312/2312129.svg"
              title="班級名單"
              className={classes.image}
              />
                
              </CardContent>
            <CardActions>
              
                <Typography>班級名單</Typography>
              
            </CardActions>
              </ButtonBase>
              </CardActionArea>
        </Card>

        </Grid>

        
        <Grid item xs={12} sm={6} md={4} lg={4}>

        <Card className={classes.card}>
            <CardActionArea className={classes.cardaction}>
              <ButtonBase
              component={Link}
              to ='/homepage2'
              
              >
                <CardContent>
              <CardMedia
              component="img"
              alt="課堂考試"
              // height="140"
              image="https://image.flaticon.com/icons/svg/2311/2311893.svg"
              title="課堂考試"
              className={classes.image}
              />
                
              </CardContent>
            <CardActions>

                <Typography>課堂考試</Typography>
            
            </CardActions>
              </ButtonBase>
              </CardActionArea>
        </Card>

        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>  
        <Card className={classes.card}>
            <CardActionArea className={classes.cardaction}>

              <ButtonBase 

              //  component={Link}
              //  to={`/questions/${params.cs_id}`}

              onClick={() => closeAddQA(true)}
              >
                <CardContent>
              <CardMedia
              component="img"
              alt="發問Q&A"
             
              image="https://image.flaticon.com/icons/svg/1828/1828789.svg"
              title="發問Q&A"
              className={classes.image}
              />
                
              </CardContent>
            <CardActions>
                <Typography>發問Q&A</Typography>
              
            </CardActions>
              </ButtonBase>
              </CardActionArea>
        </Card>
        
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={4}>  
        <Card className={classes.card}>
            <CardActionArea className={classes.cardaction}>
            <ButtonBase 
            component={Link}
            to={`/selectHW/${params.cs_id}`}>
              {/* <ButtonBase
              component={Link}
          */}
                <CardContent>
              <CardMedia
              component="img"
              alt="課堂驗收"
              // height="140"
              image="https://image.flaticon.com/icons/svg/2312/2312099.svg"
              title="課堂驗收"
              className={classes.image}
              >
                   
            
               </CardMedia>
              </CardContent>
            <CardActions>
              
                <Typography>課堂驗收</Typography>
           
            </CardActions>
              </ButtonBase>
              {/* </Link> */}
              </CardActionArea>
        </Card>
        </Grid>
      </Grid>
      <AddQA open={openAddQA} handleClose={onCloseAddQA}/>

    </div>
        );
      }
        

        
    
