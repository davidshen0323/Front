import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import MemberTable from './membertable';
import MMTableS from './MMtableS';
import Paper from '@material-ui/core/Paper';
import MyMenu from '../MenuS';

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
export default function Member() {
    const classes = useStyles();
        return (

            <div >

        <MyMenu/>
          <br/><br/><br/>
            <center><label><h1>專題</h1></label> </center>

                <Paper className={classes.Paper}>
                  <MMTableS />
                </Paper>
             </div>

        )
    }
