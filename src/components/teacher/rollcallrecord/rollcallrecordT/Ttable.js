import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {useState,useEffect} from 'react';
import axios from 'axios';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';


/*----------------------------------------------*/
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
}));
/*---------------------------------------------*/


export default function Ttable( props ) {

  /*------------ STATE ------------*/
  const [attend, setAttend] = React.useState([]);
  const classes = useStyles();


  /*=========== Create Table HEAD ===========*/
  
  console.log(props.id);

  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`/teacher/rollcall/oneRollcall/Summary/${props.id}/`);
      
      console.log(result.data);
      
      setAttend(result.data);
    }
      // function fetchData() {
      //     const result = fetch('/teacher/rollcall/oneRollcall/Summary/'+props.id+'/')
          
      //     console.log(result.data);
      //     setAttend(result);

    //}
    fetchData();
  }, [props.id]);
  

//   {console.log(attend["present"])}

  return (
      <div className={classes.root}>  
        <ListItem>
              <ListItemText
                  primary="出席"
                  secondary={
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    >
                    {attend["present"]}
                  </Typography>
                  }
                />

                <ListItemText
                  primary="遠距"
                  secondary={
                  <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}>
                          {attend.long_distance}
                  </Typography>
                  }
                />

              <ListItemText
                  primary="請假"
                  secondary={
                  <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}>
                          {attend.takeleave}
                  </Typography>
                  }
                />

              <ListItemText
                  primary="缺席"
                  secondary={
                  <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}>
                          {attend.otherwise}
                  </Typography>
                  }
                />

        </ListItem>
        
    </div>
  );
}
