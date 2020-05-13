import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyMenu from '../MenuS';
import MMTable from './MMtableS';
import Paper from '@material-ui/core/Paper';
import { useParams } from 'react-router-dom';

/*------------ STYLE ------------*/
const useStyles = makeStyles({

  div:{
    height:'100vh',
    background: 'linear-gradient(0deg,#ffffff  0%,#fff8e5 30%,#fff2d1 50%,  #ffe1c4 100%)',
  },  
    Paper:{
        width: '90%',
        margin: 'auto', 
        marginTop:'5%',   
        marginBottom:'5%',
        boxShadow:"1px 1px 1px 1px #9E9E9E",    
    },
  });

/*--------------------------------*/
export default function Member() {
    const classes = useStyles();
    const params = useParams();
    // const csid = params.cs_id;
        return (
          <div className={classes.div}>
                <MyMenu/>
          <br/>
                <Paper className={classes.Paper}>
                  <MMTable
                    csid={params.cs_id}
                  />
                </Paper>
             </div>

        )
    }
