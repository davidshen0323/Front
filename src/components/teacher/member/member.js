import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyMenu from '../MenuT';
import MMTable from './MMtable';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router-dom';

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
export default function Member() {
    const classes = useStyles();
    const params = useParams();
    // const csid = params.cs_id;
        return (

            <div >
                <MyMenu/>
          <br/><br/><br/>
            {/* <center><label><h1>專題</h1></label> </center> */}

                <Paper className={classes.Paper}>
                  <MMTable
                    csid={params.cs_id}
                  />
                </Paper>
             </div>

        )
    }
