import React from "react";
import { InputName } from "./InputName";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Buttons from './Buttons';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import {Save,Delete} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
/*------------ STYLE ------------*/
const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    margin: {
      margin: theme.spacing(1),
    },
    textField: {
      width: 150,
    },
    Paper:{
        width: '100%',
        margin: 'auto',
        marginBottom: theme.spacing(2),
        //backgroundColor: '#F2F2F2',
        
    },
    Button:{
        width:'50%',
    },
    inputForm:{
            paddingLeft:65,
            paddingTop:10,
    }
  }));
/*------------------------------*/

export default function RollcallForm(){
        const classes = useStyles();
        const [selectedDate, setSelectedDate] = React.useState(new Date('2020-3-20T21:11:54'));
        const handleDateChange = date => {
            setSelectedDate(date);
        };
        return (
           <div>
           {/* <Paper className={classes.Paper}> */}
           
            <Grid container   
            direction="row"  
            justify="center"  
            alignItems="flex-start"
            >
                    <div >
                        <Buttons/>
                    </div>
            </Grid>    
           {/* </Paper> */}
         </div>
        )
    }
