import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import RollcallRD from './rollcallRD';
import Paper from '@material-ui/core/Paper';
import MyMenu from '../../Menu';

/*------------ STYLE ------------*/
const useStyles = makeStyles({

    body:{
        margin:'20px',
        marginTop:'20px',
        background: '#E1E1E1',
    },
    Paper:{
        width: '90%',
        margin: 'auto',        
    },
  });

/*--------------------------------*/
export default function Rollcall() {
    const classes = useStyles();
    
        return (

                <div>

<MyMenu/>
        <br/><br/><br/>
        <center><label><h1>專題</h1></label> </center>

                <Paper className={classes.Paper}> 
                <RollcallRD/>
                </Paper>
                </div>




        )
    }
