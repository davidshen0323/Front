import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import STable from '../rollcallrecordS/stable';
import Grid from '@material-ui/core/Grid';
import {useState,useEffect} from 'react';
import axios from 'axios';

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





export default function RollcallRDSTT() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [rollcallrecordtitle, setRollcallrecordtitle] = useState([]);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

   /*=========== Create Table HEAD ===========*/
 const rollcallrecordList = [ 'std_id', 'std_name', 'std_department']
 
 useEffect(() => {
  async function fetchData() {
      const result = await axios.get(`/teacher/rollcall/studentList/10811000DMG741D7411023900`);
      
      console.log(result.data);
 
      setRollcallrecordtitle(result.data);
  }
  fetchData();
 }, []);

  return (
    <div>
     <Grid container 
            direction="row"
            justify="center"
            alignItems="flex-start"
          >
        <Grid item sm={8}>
            
              {/* <InputName inputName="點名名稱" />
              <div className={classes.inputForm}> */}

          <ListItem alignItems="flex-start">
           
         {/*  <ListItemText
          primary="學號"
          secondary= */}
          {
            rollcallrecordList.map( (list, i) => 
          <Typography
                key={i}
                component="span"
                variant="body2"
                className={classes.inline}>
              {rollcallrecordtitle[list]}
              
          </Typography>
          
            )
          }{console.log(rollcallrecordList)}
        {/* /> */}

        <ListItemText
          primary="姓名"
          secondary={
          <Typography
                component="span"
                variant="body2"
                className={classes.inline}>
              李李李
          </Typography>
          }
        />
        

        </ListItem>



          {/* <Grid item sm={2}>
          <ListItem>
              <STable/>
            </ListItem>
          </Grid> </div>*/}
        </Grid>
 
      </Grid>
    </div>
  );
}
