import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';


/*------------ STYLE ------------*/
const useStyles = makeStyles((theme) => ({
  
    textField: {
      width: 150,
    },
  
  //   inputForm:{
  //     paddingTop:30,
  // },

  }));
  /*------------------------------*/

export default function Score() {
  const [selectedValue, setSelectedValue] = React.useState('0');
  const classes = useStyles();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const [inputs, setInputs] = React.useState({
    scoring:'',
    //宣告要接值的變數
});

  return (
    <div>
    <RadioGroup  name="position"   row> 
    <FormControlLabel
        value="0"
        control={<Radio color="default" align="center" />}
        checked={selectedValue === '0'}
        onChange={handleChange}
        label="不計分"
        labelPlacement="end"
    />  

    <FormControlLabel
    value="1"
    control={<Radio color="secondary" align="center" />}
    checked={selectedValue === '1'}
        onChange={handleChange}
    label="計分"
    labelPlacement="end"
    />
<br/>

    <FormControl className={clsx (classes.textField)} variant="outlined" size="small"  disabled={selectedValue==='0' ?true:false}>
    <InputLabel  color="secondary">佔平時成績</InputLabel>
        <OutlinedInput
            id="outlined-adornment-%"
            endAdornment={<InputAdornment position="end">分</InputAdornment>}
            inputProps={{'aria-label': '分',}}
            labelWidth={90}
            color="secondary"
            //value={inputs.scoring}
            />                           
</FormControl>
</RadioGroup>

    </div>
  );
}
