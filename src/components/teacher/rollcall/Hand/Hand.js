import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Handtable from './Handtable';
// import TTable from '../rollcallrecordT/ttable';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import Score from '../../Score';
import DateFnsUtils from '@date-io/date-fns';
import {
  DateTimePicker,
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import InputName from "../InputName";


const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  inputForm: {
    paddingLeft: 65,
    paddingTop: 10,
  },
}));



export default function Hand() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [selectedDate, setSelectedDate] = React.useState(new Date('2020-3-20T21:11:54'));
  const handleDateChange = date => {
    setSelectedDate(date);
  };
  

  return (
    <div>
     
      {/* <Dialog fullScreen   TransitionComponent={Transition}> */}
        <AppBar className={classes.appBar}>
          <Toolbar>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
{/*         
      <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="center"
        >

<Grid item sm xs={12}>
              <InputName inputName="點名日期&時間" />
              <div className={classes.inputForm}>
                <KeyboardDateTimePicker
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

                />

              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <InputName inputName="計分方式" />
              <div className={classes.inputForm}>

                <Score />
                </div></Grid> */}



        
        {/* <Grid item xs={12} sm>
           
        <ListItem alignItems="flex-start">
           
        <ListItemText
          primary="日期與時間"
          secondary={
            <KeyboardDateTimePicker
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

          />
          }
        />

        <ListItemText
          primary="計分設定"
          secondary={
            <Score/>
          }
        />         
           
        
        </ListItem>

        </Grid> */}

        {/* <Grid item sm={3}>
            <ListItem>
              <TTable/>
            </ListItem>
        </Grid> */}

    {/* </Grid> */}
    <Grid item xs={12} sm={12}></Grid>
    
    <IconButton  color="inherit" component={Link} to="/RollcallBlockT" align="right">
      <CloseIcon />
    </IconButton>  
    </MuiPickersUtilsProvider>
    </Toolbar>

    </AppBar>
        <List>
         <Handtable/>
        </List>
    </div>
  );
}