import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';



const images = [
  {
    url: "https://image.flaticon.com/icons/svg/2313/2313049.svg",
    title: '人臉辨識',
    width: '25%',
  },
  {
    url: "https://image.flaticon.com/icons/svg/2313/2313039.svg",
    title: 'QRcode',
    width: '25%',
  },
  {
    url: "https://image.flaticon.com/icons/svg/2313/2313041.svg",
    title: '藍牙定位',
    width: '25%',
  },
  {
    url: "https://image.flaticon.com/icons/svg/2311/2311961.svg",
    title: '手動點名',
    width: '25%',
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
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '10% !important', // Overrides inline-style
      height: 50,
    },
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
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 40,
    right: 40,
    top: 40,
    bottom: 40,
    backgroundSize: 'cover',
    backgroundPosition: 'center 100%',
  },
  imageBackdrop: {//最上面灰灰那部分
    position: 'absolute',
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
    backgroundColor: theme.palette.common.black,
    opacity: 0.3,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      {images.map(image => (
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
      ))}
    </div>
  );
}
