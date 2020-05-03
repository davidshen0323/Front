import React from "react";
import {Typography, TextareaAutosize} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
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
        marginLeft: 10,
        padding: 5,
        flex: 1
      },
  }));
/*------------------------------*/

export default function Applytable(){
        const classes = useStyles();
        const [state, setState] = React.useState({
            age: '',
            name: 'hai'
          });
        
        const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
        };


        return (           
          <div>

        <Grid container spacing={1}  
        direction="column"  
        justify="center"  
        alignItems="flex-start"
        >

            <Grid item xs={12} row> 
              
                <div>
                <Typography className={classes.inputName} variant="body1">
                    請假類別：
                
                <FormControl variant="outlined" className={classes.formControl} size="small">
                    <InputLabel>假別</InputLabel>
                    <Select
                    native
                    value={state.age}
                    onChange={handleChange}
                    label="Age"
                    inputProps={{
                        name: 'age',
                    }}
                    >
                    <option value="" />
                    <option value={1}>病假</option>
                    <option value={2}>公假</option>
                    <option value={3}>事假</option>
                    <option value={4}>喪假</option>
                    </Select>
                </FormControl>
                </Typography>
                </div>
            </Grid>  

            <Grid item xs={12}>
                
                <div >
                <Typography className={classes.inputName} variant="body2">
                    請假事由：
                </Typography>

                <Typography className={classes.inputName} variant="body2">
                    <TextareaAutosize 
                    //onChange={()=> setInputs(2)} id="question" 
                    style={{borderRadius:10, padding:8, width:350, height:50, fontSize:14, fontFamily:'微軟正黑體'}}    rowsMin={5} placeholder="請詳述請假事由"/>
                </Typography>     
                </div>
            </Grid>
        </Grid>
        </div>
        );
    }
