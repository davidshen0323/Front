import React from "react"
import { makeStyles } from '@material-ui/core/styles';

/*------------ STYLE ------------*/
const useStyles = makeStyles((theme) => ({
    inputName:{
        paddingLeft: 50,
        paddingTop: 25,
    }
  }));
  /*------------------------------*/

export default function InputName(props) {
    const classes = useStyles();
        return(
            <div className={classes.inputName}>
              {props.inputName}
            </div>
        )
    }
