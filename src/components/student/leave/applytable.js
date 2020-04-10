import React from "react";
//import { InputName } from "../../teacher/";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

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
    Button:{
        width:'50%',
    },
    inputForm:{
            paddingLeft:65,
            paddingTop:10,
    },
    inputName:{
        paddingleft: "50px",
        paddingtop: "25px",
    }
  }));
/*------------------------------*/

export default function Applytable(){
        const classes = useStyles();
        const [selectedDate, setSelectedDate] = React.useState(new Date('2020-4-04T21:11:54'));
        const handleDateChange = date => {
            setSelectedDate(date);
        };
        
        return (           
           <MuiPickersUtilsProvider utils={DateFnsUtils}>

            <Grid container spacing={1}  
            direction="row"  
            justify="center"  
            alignItems="flex-start"
            >

            <Grid item sm xs={12} row> 
                {/* <InputName  inputName="點名日期" /> */}

                <div className={classes.inputName} >
                請假時間
                </div>

                <div >
                <KeyboardDatePicker
                    disableToolbar
                    inputVariant="outlined"
                    size="small"
                    variant="inline"
                    format="yyyy/MM/dd"
                    margin="normal"
                    id="date-picker-inline"
                    // label="Date picker inline"
                    helperText=""
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={
                        'change date'
                    }
                />        
                </div>
            </Grid>

                <Grid item sm xs={12}>
                    <div className="inputName">
                    請假時間
                    </div>
                    <div className={classes.inputForm}>
                        {/* <input type="time" className="inputStyle inputDateTime" 
                                inputlabelprops={{shrink: true,}}/> */}
<KeyboardTimePicker
          inputVariant="outlined"
          size="small"
          margin="normal"
          id="time-picker"
          // label="Time picker"
          value={selectedDate}
          onChange={handleDateChange}
          helperText=""
          KeyboardButtonProps={
            'change time'
          }
        />

                    </div>
                </Grid>
                <Grid item sm={6} xs={12}>
                    {/* <InputName inputName="計分方式" /> */}
                    <div className={classes.inputForm}>
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

                    <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined" size="small" >
                        <InputLabel htmlFor="outlined-adornment-password">佔平時成績</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-%"
                                //value={values.weight}
                                //onChange={handleChange('weight')}
                                endAdornment={<InputAdornment position="end">分</InputAdornment>}
                                inputProps={{'aria-label': '分',}}
                                labelWidth={90}
                                />                           
                    </FormControl>
                    </RadioGroup>
                    </div>
                </Grid>
            </Grid>        
                    

                    

                <br/>
               
                </MuiPickersUtilsProvider>
        )
    }
