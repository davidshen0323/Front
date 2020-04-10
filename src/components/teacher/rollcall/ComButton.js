import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


// const images = [
//   {
//     url: "https://image.flaticon.com/icons/svg/2313/2313049.svg",
//     title: '人臉辨識',
//   },
//   {
//     url: "https://image.flaticon.com/icons/svg/2313/2313039.svg",
//     title: 'QRcode',
//   },
//   {
//     url: "https://image.flaticon.com/icons/svg/2311/2311961.svg",
//     title: '手動點名',
//   },
// ];

const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    width:"100%",
    height:"100%",
    margin: theme.spacing(0.5),
    border: 'none',
    padding: theme.spacing(0, 1),
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);

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
    opacity: 0.09,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  
}));

export default function ComButton(props) {
  const classes = useStyles();
  
  const [alignment, setAlignment] = React.useState('0');
  
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    // <Grid item xs sm>
      <div className={classes.root}>

      {/* {images.map(image => ( */}
      
        <ButtonBase
          focusRipple
          key={props.title}
          className={classes.image}
        >
          <img
                className={classes.imageSrc}
                alt="complex"
                src={props.url}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            {props.value}
            
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {props.title}
            </Typography>

          </span>
        </ButtonBase>
        {/* </Grid> */}
       {/* ))} */}

    </div>
    // </Grid>
  );
}
