import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ButtonBases from '../rollcall/ButtonBases';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import {Save,Delete} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import RollcallrecordTable from "./rollcallrecordtable";

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
  }));
/*------------------------------*/

export default function RollcallrecordForm(){
        const classes = useStyles();
        return (
            <div class="InputTasksForm">
                <div class="InputTask">
                  
                <RollcallrecordTable />



                </div>
{/* 

                <div>
                    <Button variant="contained" color="secondary"  className="addButton cancelButton" startIcon={<Delete />}>
                        取消
                    </Button>
                    
                    <Button variant="contained" color="primary"   className="addButton saveButton" startIcon={<Save />}> 
                        確定
                    </Button>
                </div> */}
            </div>
        )
    }
//}

//export { InputTasksForm } 