import React from 'react';
import MyMenu from './Menu';
import { makeStyles } from '@material-ui/core/styles';
import  TopBlock  from "./TopBlock";
import {HashRouter} from "react-router-dom";
import {InputTask} from "./InputTask";
import "./rollcall.css";
import "./Form.css";
import  InputTasksForm from './InputTasksForm';

/*------------ STYLE ------------*/
const useStyles = makeStyles({

    body:{
        margin:'20px',
        marginTop:'20px',
        background: '#E1E1E1',
    }
  });

/*--------------------------------*/
export default function Rollcall() {
    const classes = useStyles();
    //render() {
        return (
            <div>
            <MyMenu/>
            <br/><br/>
            <center><label><h1>專題</h1></label> </center>
            <HashRouter>
                <TopBlock />
                <br/>
                <InputTasksForm />
            </HashRouter>
            
            <br></br>
            </div>
        )
    }
//}
//export default (Rollcall); 