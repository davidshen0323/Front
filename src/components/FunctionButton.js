import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    //minWidth:375,
    width: '50%',
  },
  
}));

export default function FunctionButton(props) {
  const classes = useStyles();
  
  return (
   
      <div className={classes.root}>

        <CardContent>
              <CardMedia
              component="img"
              alt={props.title}
              // height="140"
              image={props.url}
              title={props.title}
              className={classes.image}
              />
        </CardContent>
        <CardActions>
              
                <Typography className={classes.Cardtext}>{props.title}</Typography>
            
            </CardActions>
    </div>
  );
}
