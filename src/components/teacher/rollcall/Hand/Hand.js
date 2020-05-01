import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Handtable from './Handtable';
// import TTable from '../rollcallrecordT/ttable';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ComButton from "../../../ComButton";
import {useParams} from "react-router-dom";
import { cs } from 'date-fns/locale';


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


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function Hand() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const params = useParams();
  // console.log(params);
  // const csid = params.cs_id;
  console.log(params.cs_id);

  const handleClickOpen = () => {
    setOpen(true);
    
      fetch('/teacher/rollcall/addrollcall',{
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              qrcode:"12345",
              gps_point:"25.015369,121.427966",
              // rc_inputsource:inputs.way,
              cs_id: params.cs_id,
              rc_inputsource: '手動點名'
              
          })
      })
      
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [rcid, setRcid] = React.useState({
    rcid:'',
  })
  const Rcid = ['rc_id'];


  return (
    <div>
     <Button  onClick={handleClickOpen} >
     <ComButton title="手動點名" url="https://image.flaticon.com/icons/svg/2311/2311961.svg" />
      </Button>
      
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
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
    
    <IconButton  color="inherit"  onClick={handleClose}>
      <CloseIcon />
    </IconButton>  
    </Toolbar>

    </AppBar>
        <List>
         <Handtable/>
        </List>
        </Dialog>    
    </div>
  );
}
