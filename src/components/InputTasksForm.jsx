import React from "react";
import { InputName } from "./InputName";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ButtonBases from './ButtonBases';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import FormControl from '@material-ui/core/FormControl';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles';
import {Save,Delete} from '@material-ui/icons';
import Button from '@material-ui/core/Button';

=======
import FormHelperText from '@material-ui/core/FormHelperText';
import { makeStyles } from '@material-ui/core/styles';
import {Save,Delete} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { ButtonBase } from "@material-ui/core";
>>>>>>> 5e01c5b0362f226339f6ac86cd92feaaa9082b7c
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

export default function InputTasksForm(){
        const classes = useStyles();
        return (
            <div class="InputTasksForm">
                <div class="InputTask">
                  
                    <InputName className="fas fa-calendar-alt" inputName="點名日期" />
                    <div className="inputForm">
                        <input type="date" className="inputStyle inputDateTime" 
                                InputLabelProps={{shrink: true,}} />
                    </div>

                    <InputName className="fas fa-calendar-alt2" inputName="截止時間" />
                    <div className="inputForm">
                        <input type="time" className="inputStyle inputDateTime" 
                                InputLabelProps={{shrink: true,}}/>
                    </div>

                    <InputName className="fas fa-score" inputName="計分方式" />
                    <div className="inputForm">
                    <RadioGroup aria-label="position" name="position"   row>                    
                    
                    <FormControlLabel
                        value="noscore"
                        control={<Radio color="secondary" align="center" />}
                        label="不計分"
                        labelPlacement="end"
                    />

                    <FormControlLabel
                    value="score"
                    control={<Radio color="primary" align="center" />}
                    label="計分"
                    labelPlacement="end"
                    />

<<<<<<< HEAD
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small" >
=======
                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" >
>>>>>>> 5e01c5b0362f226339f6ac86cd92feaaa9082b7c
                        <InputLabel htmlFor="outlined-adornment-password">佔平時成績</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-%"
                                //value={values.weight}
                                //onChange={handleChange('weight')}
                                endAdornment={<InputAdornment position="end">%</InputAdornment>}
                                aria-describedby="outlined-%-helper-text"
                                inputProps={{'aria-label': '%',}}
                                labelWidth={90}
                                margin="dense"/>                           
                    </FormControl>
                    </RadioGroup>
                    </div>
                    

                    <InputName className="far fa-comment-way" inputName="點名方式" />
                    <div className="inputForm">
                        <ButtonBases/>
                    </div>

                </div>


                <div>
                    <Button variant="contained" color="secondary"  className="addButton cancelButton" startIcon={<Delete />}>
                        取消
                    </Button>
                    
                    <Button variant="contained" color="primary"   className="addButton saveButton" startIcon={<Save />}> 
                        確定
                    </Button>
                </div>
            </div>
        )
    }
//}

//export { InputTasksForm } 