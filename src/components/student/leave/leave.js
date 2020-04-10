import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Leavetable from './leavetable';

/*------------ STYLE ------------*/
const useStyles = makeStyles({

    body:{
        margin:'20px',
        marginTop:'20px',
        background: '#E1E1E1',
    },
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
