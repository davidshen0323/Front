import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyMenu from '../MenuT';
import MMTable from './MMtable';
import { useParams } from 'react-router-dom';
import Addmember from './addmember';
import { Paper } from '@material-ui/core';

/*------------ STYLE ------------*/
const useStyles = makeStyles({

    div:{
      height:'100vh',
      background: 'linear-gradient(0deg,#ffffff  0%,#fff8e5 30%,#fff2d1 50%,  #ffe1c4 100%)',
    },
    Paper:{
      fontFamily: 'Microsoft JhengHei',
        width: '90%',
        margin: 'auto',     
        marginTop:50,   
    },
    typo: {
      fontFamily: 'Microsoft JhengHei',
      fontWeight:'bold'
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
            {/* <center><label><h1>專題</h1></label> </center> */}
          <Addmember csid={params.cs_id}/>
            <Paper className={classes.Paper}>
              <MMTable
                csid={params.cs_id}
              />
            </Paper>
          </div>
        )
    }
