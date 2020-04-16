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
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import ComButton from "./ComButton";
import QRcode from "./QRcode/QRcode";
import Hand from "./Hand/Hand";
// import GPS from "./GPS/Gps";

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
  } from '@material-ui/pickers';
import { useParams } from "react-router-dom";

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
    },
    card: {
      width:'100%',
      height: '100%',
      margin: 5,
      //marginTop: 30,
      //marginLeft: 'auto',
      //marginRight: 'auto',
    },
    cardaction: {
      width:'100%',
      height: '100%',
    },
    classbutton: {
      width: '100%',
    },
  }));
/*------------------------------*/

export default function RollcallForm(){
        const classes = useStyles();

        const params = useParams();
        const csid = params.cs_id;

        console.log(csid);

        return (
          <div className={classes.root}>
          <Grid     container
                     direction="row"
                     justify="center"
                     alignItems="center"
                     spacing={1}
           >

              <Grid item  xs={12} sm={4}>
              <Card className={classes.card}>
                <CardActionArea className={classes.cardaction}>
                {/* <GPS/> */}
                </CardActionArea>
              </Card>
              </Grid>

              <Grid item  xs={12} sm={4}>
              <Card className={classes.card}>
                <CardActionArea className={classes.cardaction}>
                <QRcode/>
                </CardActionArea>
              </Card>
              </Grid>

              <Grid item  xs={12} sm={4}>
              <Card className={classes.card}>
                <CardActionArea className={classes.cardaction}>
                <Hand/>
                </CardActionArea>
              </Card>
              </Grid>
          </Grid>
          </div>

        )
    }
