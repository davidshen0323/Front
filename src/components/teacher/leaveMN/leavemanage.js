import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import LMNTable from './leavemanagetable';
import MyMenu from '../../teacher/MenuT';
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
    //render() {
        return (
            // <div>
            // <MyMenu/>
            // <br/><br/>
            // <center><label><h1>專題</h1></label> </center>
            // <HashRouter>
            //     <TopBlock />
            //     <br/>
            //    <LeavemanageForm />
           // </HashRouter>
            
            //<br></br>
            //</div>

            // <div class="InputTasksForm">
            //     <div class="InputTask">
        <div>

        <MyMenu/>
        <br/><br/><br/>
        <center><label><h1>專題</h1></label> </center>

            <Paper className={classes.Paper}>
                <LMNTable />
            </Paper>
        </div>
            // </div>


        )
    }
