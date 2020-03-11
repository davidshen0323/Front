import React from 'react';
import MyMenu from '../../Menu';
import { makeStyles } from '@material-ui/core/styles';
import  TopBlock  from "../TopBlock";
import {HashRouter} from "react-router-dom";
import "./rollcall.css";
import "../Form.css";
import  InputTasksForm from './InputTasksForm';

/*------------ STYLE ------------*/

/*--------------------------------*/
export default function Rollcall() {
   
    //render() {
        return (
            // <div>
            // <MyMenu/>
            // <br/><br/>
            // <center><label><h1>專題</h1></label> </center>
            // <HashRouter>
            //     <TopBlock />
            //     <br/>
                <InputTasksForm />
            /* </HashRouter> */
            
            // <br></br>
            // </div>
        )
    }
//}
//export default (Rollcall); 
