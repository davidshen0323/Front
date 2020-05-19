import React from "react";
import InputName from "./InputName";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import ButtonBases from './ButtonBases';
import Buttons from './Buttons';
import Score from './Score';
import TextField from '@material-ui/core/TextField';

import OutlinedInput from '@material-ui/core/OutlinedInput';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import { Save, Delete } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  DateTimePicker,
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


import ComButton from "../../ComButton";
import { withStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';


/*------------ STYLE ------------*/
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(12),
  },
  textField: {
    width: 150,
  },
  Paper: {
    width: '100%',
    margin: 'auto',
    marginBottom: theme.spacing(2),
    //backgroundColor: '#F2F2F2',

  },
  Button: {
    width: '50%',
  },
  inputForm: {
    paddingLeft: 65,
    paddingTop: 10,
  },

}));
/*------------------------------*/


const StyledToggleButtonGroup = withStyles((theme) => ({
  grouped: {
    width: 150,
    height: 150,
    margin: theme.spacing(8),
    //border: 'none',
    padding: theme.spacing(0), 
    '&:not(:first-child)': {
      borderRadius: theme.shape.borderRadius,
    },
    '&:first-child': {
      borderRadius: theme.shape.borderRadius,
    },
  },
}))(ToggleButtonGroup);



export default function InputTasksForm() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-3-20T21:11:54'));
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const [color, setColor] = React.useState('default')
  const [alignment, setAlignment] = React.useState('0');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };


  const [selectedValue, setSelectedValue] = React.useState('0');
  
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setColor(event.target.checked ? 'blue' : 'default')
  };
  return (
    <div>
      <Paper className={classes.Paper}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container spacing={2}
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
            <Grid item sm xs={12}>
              <InputName inputName="點名名稱" />
              <div className={classes.inputForm}>

                <TextField variant="outlined" size="small" />

                <KeyboardDatePicker
          disableToolbar
          inputVariant="outlined"
          size="small"
          //variant="inline"
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
              <InputName inputName="點名日期&時間" />
              <div className={classes.inputForm}>
                {/* <KeyboardDateTimePicker
                  value={selectedDate}
                  inputVariant="outlined"
                  size="small"
                  variant="inline"
                  format="yyyy/MM/dd hh:mm a"
                  //margin="normal"
                  onChange={handleDateChange}
                  helperText=""
                  KeyboardButtonProps={
                    'change date time'
                  }

                /> */}
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
              <InputName inputName="計分方式" />
              <div className={classes.inputForm}>

                <Score />


                {/* <RadioGroup aria-label="position" name="position"   row>                    
                    
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
                    </RadioGroup> */}
              </div>
            </Grid>
          </Grid>

          <Grid item sm={12} xs={12}>
            <InputName inputName="點名方式" />
          <div className={classes.inputForm}>
          <Grid container spacing={2}
            direction="row"
            justify="flex-start"
            alignItems="center"
          >


{/* <FormControl component="fieldset">
      
      <RadioGroup row  name="position" defaultValue="0">
      <FormControlLabel
        value="0"
        control={<Radio color="default" align="center" />}
        checked={selectedValue === '0'}
        onChange={handleChange}
    /> 
        
        <FormControlLabel
          value="1"
          control=
          {
          <Button 
          checked={color ==='red', selectedValue === '1'} 
          align="center" 
          color="blue"
          onChange={handleChange}
          >
          hihihihi</Button>
          
          }
          />
           checked={selectedValue === '1'}
        <FormControlLabel
          value="2"
          control={<ComButton title="人臉辨識" url="https://image.flaticon.com/icons/svg/2313/2313049.svg" />}
          checked={selectedValue === '2'}
          onChange={handleChange}
        />
      </RadioGroup>
  </FormControl> */}



<Grid item sm xs={8}>
              <StyledToggleButtonGroup
                value={alignment}
                exclusive
                onChange={handleAlignment}
              >

                  <ToggleButton value="0">
                    <ComButton title="QRcode" url="https://image.flaticon.com/icons/svg/2313/2313039.svg" />
                  </ToggleButton>

                  <ToggleButton value="1">
                    <ComButton title="手動點名" url="https://image.flaticon.com/icons/svg/2311/2311961.svg" />
                  </ToggleButton>


              </StyledToggleButtonGroup>
              </Grid>


              
           </Grid>
          </div>
 </Grid>
          <br />
          <div>
            <Button variant="contained" color="secondary" className={classes.Button} startIcon={<Delete />}>
              取消
                    </Button>

            <Button variant="contained" color="primary" className={classes.Button} startIcon={<Save />}>
              確定
                    </Button>
          </div>
        </MuiPickersUtilsProvider>
      </Paper>
    </div >
  )
}
