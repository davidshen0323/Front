import React from "react";
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import BookMark from './BookMark';

/*------------ STYLE ------------*/
const useStyles = makeStyles({

    TopBlock:{
        background: '#4A90E2',
        height: '40px',
        textAlign: 'center',
        marginTop: '40px',
        marginBottom: '24px',
    }
  });
/*------------------------------*/

export default function TopBlock(){
        const classes = useStyles();
        return(
            <div className={classes.TopBlock}>
            <BookMark to="/" name="點名"/>
            <BookMark component={Link} to="/rollcallrecord" name="點名紀錄"/>
            <BookMark component={Link} to="/leavemanage" name="假單管理"/>
            <BookMark to="/班級名單" name="班級名單"/>
            </div>
        )
    }

//export {TopBlock}