import React from 'react';
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
import {Link} from "react-router-dom";


// const images = [
//     {
//       url: 'https://image.flaticon.com/icons/svg/747/747376.svg',
//       title: '點名',
//       width: '80%',
//     },
//     {
//       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT72slfeqf6R4oAt8AAbPcA6mDZpUcp9GZJZj8VgNhnzFv5aWp1',
//       title: '請假審核',
//       width: '80%',
//     },
//     {
//       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR66UDYK97ylxOAQvVixVoPgCa20FEQYr_XJreCoYMi2sRDH8dl',
//       title: '班級名單',
//       width: '80%',
//     },
//     {
//       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR66UDYK97ylxOAQvVixVoPgCa20FEQYr_XJreCoYMi2sRDH8dl',
//       title: '課堂考試',
//       width: '80%',
//     },
//     {
//       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR66UDYK97ylxOAQvVixVoPgCa20FEQYr_XJreCoYMi2sRDH8dl',
//       title: '發問Q&A',
//       width: '80%',
//     },
//     {
//       url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR66UDYK97ylxOAQvVixVoPgCa20FEQYr_XJreCoYMi2sRDH8dl',
//       title: '課堂驗收',
//       width: '80%',
//     },
//   ];

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


      
      // image: {
      //   position: 'relative',
        
        
      //   [theme.breakpoints.down('xs')]: {
      //     width: '100% !important', // Overrides inline-style
      //     height: '100%',
      //   },
      //   '&:hover, &$focusVisible': {
      //     zIndex: 1,
      //     '& $imageBackdrop': {
      //       opacity: 0.15,
      //     },
      //     '& $imageMarked': {
      //       opacity: 0,
      //     },
      //     '& $imageTitle': {
      //       border: '4px solid currentColor',
      //     },
      //   },
      // },
      // focusVisible: {},
      // imageButton: {
      //   position: 'relative',
      //   left: 0,
      //   right: 0,
      //   top: 0,
      //   bottom: 0,
      //   display: 'flex',
      //   alignItems: 'center',
      //   justifyContent: 'center',
      //   color: theme.palette.common.white,
      // },
      // imageSrc: {
      //   position: 'relative',
      //   left: 0,
      //   right: 0,
      //   top: 0,
      //   bottom: 0,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center 100%',
      // },
      // imageBackdrop: {
      //   position: 'relative',
      //   left: 0,
      //   right: 0,
      //   top: 0,
      //   bottom: 0,
      //   backgroundColor: theme.palette.common.black,
      //   opacity: 0.3,
      //   transition: theme.transitions.create('opacity'),
      // },
      // imageTitle: {
      //   position: 'relative',
      //   padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
      // },
      // imageMarked: {
      //   height: 3,
      //   width: 18,
      //   backgroundColor: theme.palette.common.white,
      //   position: 'relative',
      //   bottom: -2,
      //   left: 'calc(50% - 9px)',
      //   transition: theme.transitions.create('opacity'),
      // },

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

    export default function Homepage2() {

        const classes = useStyles();

        return (
            <div className={classes.root}>
            <MyMenu />
            <br></br><br></br><br></br><br></br>
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
              to ='/homepage2'
              // className={classes.ButtonBase}
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
              {/* <Button
              component={Link}
              to ='/homepage2'
              className={classes.classbutton}
              > */}
                <Typography>點名</Typography>
              {/* </Button> */}
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
                {/* <Typography>
                  點名
                </Typography> */}
              </CardContent>
            <CardActions>
              {/* <Button
              component={Link}
              to ='/homepage2'
              className={classes.classbutton}
              > */}
                <Typography>請假審核</Typography>
              {/* </Button> */}
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
                {/* <Typography>
                  點名
                </Typography> */}
              </CardContent>
            <CardActions>
              {/* <Button
              component={Link}
              to ='/homepage2'
              className={classes.classbutton}
              > */}
                <Typography>班級名單</Typography>
              {/* </Button> */}
            </CardActions>
              </ButtonBase>
              </CardActionArea>
        </Card>

        </Grid>

        {/* <Grid container spacing={1} direction="row" justify="center" alignItems="center"> */}
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
              alt="課堂考試"
              // height="140"
              image="https://image.flaticon.com/icons/svg/2311/2311893.svg"
              title="課堂考試"
              className={classes.image}
              />
                {/* <Typography>
                  點名
                </Typography> */}
              </CardContent>
            <CardActions>
              {/* <Button
              component={Link}
              to ='/homepage2'
              className={classes.classbutton}
              > */}
                <Typography>課堂考試</Typography>
              {/* </Button> */}
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
              alt="發問Q&A"
              // height="140"
              image="https://image.flaticon.com/icons/svg/1828/1828789.svg"
              title="發問Q&A"
              className={classes.image}
              />
                {/* <Typography>
                  點名
                </Typography> */}
              </CardContent>
            <CardActions>
              {/* <Button
              component={Link}
              to ='/homepage2'
              className={classes.classbutton}
              > */}
                <Typography>發問Q&A</Typography>
              {/* </Button> */}
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
              alt="課堂驗收"
              // height="140"
              image="https://image.flaticon.com/icons/svg/2312/2312099.svg"
              title="課堂驗收"
              className={classes.image}
              />
                {/* <Typography>
                  點名
                </Typography> */}
              </CardContent>
            <CardActions>
              {/* <Button
              component={Link}
              to ='/homepage2'
              className={classes.classbutton}
              > */}
                <Typography>課堂驗收</Typography>
              {/* </Button> */}
            </CardActions>
              </ButtonBase>
              </CardActionArea>
        </Card>
        </Grid>
              {/* {images.map(image => (
                <ButtonBase
                focusRipple
                key={image.title}
                className={classes.image}
                focusVisibleClassName={classes.focusVisible}
                style={{
                  width: image.width,
                }}
                >
                <span
                className={classes.imageSrc}
                style={{
                  backgroundImage: `url(${image.url})`,
                }}
                />
                <span className={classes.imageBackdrop} />
                <span className={classes.imageButton}>
                <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
                >
                {image.title}
                <span className={classes.imageMarked} />
                </Typography>
                </span>
                </ButtonBase>
              ))} */}
              </Grid>
            </div>
          );
          
        
    }