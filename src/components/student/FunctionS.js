// @ts-ignore
import React, { Component, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import MyMenu from './MenuS';
import { makeStyles } from '@material-ui/core/styles';
// @ts-ignore
import Grid from '@material-ui/core/Grid';
// @ts-ignore
import axios from 'axios';
// @ts-ignore
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

// @ts-ignore
const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
      },
      root: {
        flexWrap: 'wrap',
        height:'100hv',
        minWidth: 375,
        width: '100%',
        background: 'linear-gradient(0deg,#ffffff  0%,#fff8e5 30%,#fff2d1 50%,  #ffe1c4 100%)',
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
        marginTop: 30,
        marginBottom: 20,
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

      Cardtext: {
        fontFamily: 'Microsoft JhengHei',
        fontWeight: 'bold',
      }
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

    export default function FunctionS() {

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
            {/* <br></br><br></br><br></br><br></br> */}
            {/* <p>This is class {params.cs_id}</p> */}
            
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

               // @ts-ignore
               to={`/rollcallRD/${params.cs_id}`}

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
              </CardContent>
            <CardActions>
              
                <Typography className={classes.Cardtext}>點名</Typography>
            
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

              // @ts-ignore
              to ={`/LeaveBlockS/${params.cs_id}`}

              >
              <CardContent>
              <CardMedia
              component="img"

              alt="請假申請"
              // height="140"
              image="https://image.flaticon.com/icons/svg/1828/1828610.svg"
              title="請假申請"

              className={classes.image}
              />
              </CardContent>
            <CardActions>

                <Typography className={classes.Cardtext}>請假申請</Typography>

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

              // @ts-ignore
              to ={`/members/${params.cs_id}`}

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
              
                <Typography className={classes.Cardtext}>班級名單</Typography>
              
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
              // @ts-ignore
              to={`/ViewAnnouncements/${params.cs_id}`}
              >
                <CardContent>
              <CardMedia
              component="img"

              alt="公告"
              // height="140"
              image="https://image.flaticon.com/icons/svg/1827/1827489.svg"
              title="公告"

              className={classes.image}
              />
                
              </CardContent>
            <CardActions>


                <Typography className={classes.Cardtext}>公告</Typography>

            
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
              // @ts-ignore
              to={`/QAlist_S/${params.cs_id}`}
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
                <Typography className={classes.Cardtext}>發問Q&A</Typography>
              
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
            // @ts-ignore
            to={`/selectHW_S/${params.cs_id}`}>
              {/* <ButtonBase
              component={Link}
          */}
                <CardContent>
              <CardMedia
              component="img"
              alt="課堂舉手"
              // height="140"
              image="https://image.flaticon.com/icons/svg/2107/2107558.svg"
              title="課堂舉手"
              className={classes.image}
              >
                   
            
               </CardMedia>
              </CardContent>
            <CardActions>
              
                <Typography className={classes.Cardtext}>課堂舉手</Typography>
           
            </CardActions>
              </ButtonBase>
              {/* </Link> */}
              </CardActionArea>
        </Card>
        </Grid>
      </Grid>
      {/* <AddQA open={openAddQA} handleClose={onCloseAddQA}/> */}

    </div>
        );
      }
        

        
    
