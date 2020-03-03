import React from 'react'
import {makeStyles} from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import { AccountCircle } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
      
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15),
    marginTop: theme.spacing(3), 
    marginLeft: theme.spacing(50), 
    marginBottom:theme.spacing(3),
    variant: "middle",
    },
  }));

export default function Logo(){
   const classes = useStyles();
        return (
            <Avatar className={classes.large} variant='circle' style={{alignSelf: 'center'}}>
                <AccountCircle />
            </Avatar>
        )
    }

