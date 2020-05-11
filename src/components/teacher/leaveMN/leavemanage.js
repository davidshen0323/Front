import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LMNTable from './LMNTable';
import Leavemanagetable from './leavemanagetable';
import MyMenu from '../../teacher/MenuT';
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
export default function Leavemanage() {
    const classes = useStyles();
    const params = useParams();
        return (
        <div>

        <MyMenu/>
        <br/>
            <Paper className={classes.Paper}>
                {/* <LMNTable /> */}
                <Leavemanagetable csid={params.cs_id}/>
            </Paper>
        </div>


        )
    }
