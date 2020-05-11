import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Leavetable from './leavetable';

/*------------ STYLE ------------*/
const useStyles = makeStyles({

    Paper:{
        width: '100%',
        margin: 'auto',        
    },
  });

/*--------------------------------*/
export default function Leave() {
    const classes = useStyles();
        return (

            <div >
                <Paper className={classes.Paper}>
                  <Leavetable />
                </Paper>
             </div>

        )
    }
