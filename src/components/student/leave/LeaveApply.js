import React from "react";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import  {Typography, TextareaAutosize} from '@material-ui/core';
import { Save, Delete } from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import Leavetable from './leavetable';


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
    marginTop:100,
    width: 250,
  },
  Paper: {
    width: '100%',
    margin: 'auto',
    marginBottom: theme.spacing(2),
    //backgroundColor: '#F2F2F2',
  },
  inputForm: {
    paddingLeft: 60,
    paddingRight:10,
    paddingTop: 10,
  },
  inputForm2: {
    paddingLeft: 60,
    paddingRight:10,
    paddingTop: 25,
  },
  inputName:{
    paddingLeft: 50,
    paddingTop: 25,
    fontFamily:'微軟正黑體',
},

}));
/*------------------------------*/

function InputName(props) {
    const classes = useStyles();
        return(
            <div className={classes.inputName}>
              {props.inputName}
            </div>
        )
    };





export default function LeaveApply() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-3-20T21:11:54'));
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  const [color, setColor] = React.useState('default')
  const [alignment, setAlignment] = React.useState('0');
 
  const [inputs, setInputs] = React.useState({
    typeid:'',
    tl_content:'',    
});
 
  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const handleChange = fieldname => event => {
    event.persist();
    setInputs(inputs => ({...inputs, [fieldname]: event.target.value}));   
}

const handleSubmit = () =>{
  //      console.log(props.id);
  //      console.log(inputs.tl_content);
  //      console.log(inputs.typeid);
        fetch('/student/takeleave',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
          //    rc_id:props.id,
              tl_content:inputs.tl_content,
              tl_type_id:inputs.typeid,
          })
      })
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
            <Grid item sm={3} xs={12}>
              <InputName inputName="申請日期" />
              <div className={classes.inputForm}>
                <KeyboardDatePicker
                    disableToolbar
                    inputVariant="outlined"
                    size="small"
                    format="yyyy/MM/dd"
                    margin="normal"
                    id="date-picker-inline"
                    helperText=""
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={
                        'change date'
                    }
                />        
              </div>
            </Grid>


            <Grid item sm={2} xs={12}>
              <InputName inputName="請假類別" />
              <div className={classes.inputForm2}>
              <FormControl variant="outlined" size="small">
                    <InputLabel>假別</InputLabel>
                    <Select
                    native
                    value={inputs.typeid}
                    onChange={handleChange('typeid')}
                    inputProps={{
                        name: 'typeid',
                        id:'typeid'
                    }}
                    >
                    <option value="" />
                    <option value={4}>病假</option>
                    <option value={5}>事假</option>
                    <option value={6}>喪假</option>
                    <option value={7}>公假</option>
                    </Select>
                </FormControl>


              </div>
            </Grid>
            <Grid item sm={7} xs={12}>
              <InputName inputName="請假事由" />
              <div className={classes.inputForm2}>

              <Typography  variant="body2">
                    <TextareaAutosize 
                    style={{borderRadius:5,fontFamily:'微軟正黑體',width:230,height:35}} placeholder="請詳述請假事由"
                    value={inputs.tl_content}
                    onChange={handleChange('tl_content')}/>
                   

              
              <Button  
                // disabled={inputs===2 ? false : true} 
                onClick={handleSubmit}
                color="primary" autoFous>確認送出
              </Button>
              
              </Typography>
              </div>
            </Grid>
          </Grid>

          <Grid item sm={12} xs={12}>
            <InputName inputName="缺席紀錄" />
          <div className={classes.inputForm}>
          <Grid container
            direction="row"
            justify="flex-start"
            alignItems="center"
          >
              <Leavetable/>
              
           </Grid>
          </div>
 </Grid>
          <br />
          {/* <div>
            <Button variant="contained" color="secondary" className={classes.Button} startIcon={<Delete />}>
              取消
                    </Button>

            <Button variant="contained" color="primary" className={classes.Button} startIcon={<Save />}>
              確定
                    </Button>
          </div> */}
        </MuiPickersUtilsProvider>
      </Paper>
    </div >
  )
}
