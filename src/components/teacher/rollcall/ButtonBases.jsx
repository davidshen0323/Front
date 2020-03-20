import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const images = [
  {
    url: "https://image.flaticon.com/icons/svg/2313/2313049.svg",
    title: '人臉辨識',
    // width: '25%',
  },
  {
    url: "https://image.flaticon.com/icons/svg/2313/2313039.svg",
    title: 'QRcode',
    // width: '25%',
  },
  {
    url: "https://image.flaticon.com/icons/svg/2313/2313041.svg",
    title: '藍牙定位',
    // width: '25%',
  },
  {
    url: "https://image.flaticon.com/icons/svg/2311/2311961.svg",
    title: '手動點名',
    // width: '25%',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    width:'150px',
    height: '150px',
    // [theme.breakpoints.down('sm')]: {
    //   width: '100% !important', // Overrides inline-style
    //   height:  '250px',
    // },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.009,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},

  imageButton: {
    position: 'absolute',
    height:'100%',
    width:'100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    maxHeight:'60%',
    maxWidth:'60%',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center 100%',
    display:'block',
    margin:'auto',
  },
  imageBackdrop: {//最上面灰灰那部分
    position: 'absolute',
    height:'100%',
    width:'100%',
    margin:'auto',
    display:'block',
    backgroundColor: theme.palette.common.black,
    opacity: 0.3,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <Grid     container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
    >
              
      {images.map(image => (
       <Grid item  xs={12} sm>
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          // style={{
          //   width: image.width,
          // }}
        >
          <img
                className={classes.imageSrc}
                alt="complex"
                src={image.url}
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
            </Typography>

          </span>
        </ButtonBase>
        </Grid>
      ))}



</Grid>
    </div>
  );
}
