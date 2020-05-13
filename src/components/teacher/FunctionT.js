// @ts-ignore
import React, { Component, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import MyMenu from './MenuT';
import { makeStyles } from '@material-ui/core/styles';
// @ts-ignore
import axios from 'axios';
// @ts-ignore
import { v4 as uuidv4 } from 'uuid';
import OpenJoinClass from './OpenJoinClass';
import AddIcon from "@material-ui/icons/Add";
import {Fab, Grid, ButtonBase, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia} from "@material-ui/core";




// @ts-ignore
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

      Cardtext: {
        fontFamily: 'Microsoft JhengHei',
        fontWeight: 'bold',
      },
      fab: {
        position: "fixed",
        bottom: theme.spacing(5),
        right: theme.spacing(5),
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

    export default function FunctionT() {

        const classes = useStyles();

        const params = useParams();
        //console.log(params);
        
        // const [qrcode , setQrcode] = React.useState('0');
        //教師開放加入課程
        // const [openJoinClass, setOpenJoinClass] = React.useState(false);
        
        // const OpenJoinClass = () => {
          
        //   setOpenJoinClass(true);
         
        //   console.log(qrcode);
        // };
        
        // const onCloseJoinClass = () => {
          
        //   setOpenJoinClass(false);
         
        //   console.log(qrcode);
        // };
        return (

          
          <div className={classes.root}>
            <MyMenu />
            {/* <br></br><br></br><br></br><br></br> */}
            {/* <p>This is class {params.cs_id}</p> */}
            {/* 新建課程 */}
            {/* <Fab
              color="primary"
              aria-label="add"
              className={classes.fab}
              // onClick={OpenJoinClass}
            >
              <AddIcon />
            </Fab> */}
            <OpenJoinClass/>
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
               to={`/RollcallBlockT/${params.cs_id}`}
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
              to ={`/leavemanage/${params.cs_id}`}
              
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
                <Typography className={classes.Cardtext}>請假審核</Typography>
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
              to ={`/membert/${params.cs_id}`}
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
              to ={`/ViewAnnouncementt/${params.cs_id}`}
              
              >
                <CardContent>
              <CardMedia
              component="img"
              alt="公告"
              // height="140"
              image="https://image.flaticon.com/icons/svg/1827/1827388.svg"
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
               to={`/QAlist_T/${params.cs_id}`}

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
            to={`/selectHW_T/${params.cs_id}`}>
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
              
                <Typography className={classes.Cardtext}>課堂驗收</Typography>
           
            </CardActions>
              </ButtonBase>
              {/* </Link> */}
              </CardActionArea>
        </Card>
        </Grid>
      </Grid>
      {/* <QAReply open={openQAReply} handleClose={onCloseQAReply}/> */}
      
      {/* 教師開放加入課程 */}
      {/* <OpenJoinClass/> */}
    </div>
        );
      }
        

        
    
