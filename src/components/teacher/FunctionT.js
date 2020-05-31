import React from 'react';
import MyMenu from './MenuT';
import bell from '../../img/bell.jpg'
import leave from '../../img/leave.jpg'
import classs from '../../img/class.jpg'
import hands from '../../img/hands.jpg'
import OpenJoinClass from './OpenJoinClass';
import rollcall from '../../img/rollcall.jpg'
import question from '../../img/question.jpg'
import {Link, useParams} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {Grid, ButtonBase, Typography, Card, CardActionArea, CardActions, CardContent, CardMedia} from "@material-ui/core";

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
      image: {
        height: '150px',
        width: '150px',
      },


      card: {
        width: "100%",
        maxWidth:250,
        height: "100%",
        maxHeight:300,
        // marginTop: 10,
        // marginBottom: 10,
        zIndex:-1,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 10,
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
       
        return (

          
          <div className={classes.root}>
            <MyMenu />
            <OpenJoinClass/>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={2}
            >

            <Grid item xs={6} sm={6} md={4} lg={4}>  
            <Card className={classes.card}>
            <CardActionArea className={classes.cardaction}>
              <ButtonBase
               component={Link}
               // @ts-ignore
               to={`/RollcallBlockT/${params.cs_id}`}
               style={{
                 display:"flex",
                 flexDirection:"column",
                 justifyContent:"center"}}
              >
              <CardContent>
              <CardMedia
              component="img"
              alt="點名"
              // height="140"
              image={rollcall}
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
        
        <Grid item xs={6} sm={6} md={4} lg={4}>  
        <Card className={classes.card}>
            <CardActionArea className={classes.cardaction}>
              <ButtonBase
              component={Link}
              // @ts-ignore
              to ={`/leavemanage/${params.cs_id}`}
               style={{
                 display:"flex",
                 flexDirection:"column",
                 justifyContent:"center"}}
              >
              <CardContent>
              <CardMedia
              component="img"
              alt="請假審核"
              // height="140"
              image={leave}
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

        <Grid item xs={6} sm={6} md={4} lg={4}>  
        <Card className={classes.card}>
            <CardActionArea className={classes.cardaction}>
              <ButtonBase
              component={Link}
              // @ts-ignore
              to ={`/membert/${params.cs_id}`}
              style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center"}}
              >
                <CardContent>
              <CardMedia
              component="img"
              alt="課程資訊"
              // height="140"
              image={classs}
              title="課程資訊"
              className={classes.image}
              />
                
              </CardContent>
            <CardActions>
              
                <Typography className={classes.Cardtext}>課程資訊</Typography>
              
            </CardActions>
              </ButtonBase>
              </CardActionArea>
        </Card>

        </Grid>

        
        <Grid item xs={6} sm={6} md={4} lg={4}>

        <Card className={classes.card}>
            <CardActionArea className={classes.cardaction}>
              <ButtonBase
              component={Link}
              // @ts-ignore
              to ={`/ViewAnnouncementt/${params.cs_id}`}
              style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center"}}
              >
                <CardContent>
              <CardMedia
              component="img"
              alt="公告"
              // height="140"
              image={bell}
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

        <Grid item xs={6} sm={6} md={4} lg={4}>  
        <Card className={classes.card}>
            <CardActionArea className={classes.cardaction}>

              <ButtonBase 

               component={Link}
               // @ts-ignore
               to={`/QAlist_T/${params.cs_id}`}
               style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center"}}
              >
                <CardContent>
              <CardMedia
              component="img"
              alt="發問Q&A"
             
              image={question}
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

        <Grid item xs={6} sm={6} md={4} lg={4}>  
        <Card className={classes.card}>
            <CardActionArea className={classes.cardaction}>
            <ButtonBase 
            component={Link}
            // @ts-ignore
            to={`/selectHW_T/${params.cs_id}`}
            style={{
                 display:"flex",
                 flexDirection:"column",
                 justifyContent:"center"}}>
              {/* <ButtonBase
              component={Link}
          */}
                <CardContent>
              <CardMedia
              component="img"
              alt="課堂舉手"
              // height="140"

              image={hands}

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
      {/* <QAReply open={openQAReply} handleClose={onCloseQAReply}/> */}
      
      {/* 教師開放加入課程 */}
      {/* <OpenJoinClass/> */}
    </div>
        );
      }
        

        
    
