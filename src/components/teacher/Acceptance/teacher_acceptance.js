import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, TableContainer,Box, Typography, Tab, AppBar, Tabs} from "@material-ui/core";

import MyMenu from '../MenuT';
import { useParams} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import AcceptScore from "./acceptScore";
import PropTypes from 'prop-types';
import EditScore from './EditScore';
import {brown} from '@material-ui/core/colors';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import { IconButton } from '@material-ui/core';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}


export default function TAcceptanceList() {

  /*------------ STATE ------------*/
  const [acceptances, setAcceptances] = useState([]);

  /*------------ STYLE ------------*/
  const useStyles = makeStyles({
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 450,
    },
    // backbut: {
    //   width: 100,
    //   margin:'auto',
    //   marginTop: 20,
    //   fontFamily: 'Microsoft JhengHei',
    //   backgroundColor: '#E0E0E0',
    // },
    button: {
      width: 100,
      margin:'auto',
      marginTop: 20,
      // marginLeft: 10,
      marginBottom: 10,
      fontFamily: 'Microsoft JhengHei',
      color: "white",
      backgroundColor: "#f8b62b",
      fontWeight:'bold',
    },
    div:{
      height:'100vh',
      background: 'linear-gradient(0deg,#ffffff  0%,#fff8e5 30%,#fff2d1 50%,  #ffe1c4 100%)',
    },
  });
  const classes = useStyles();

  /*=========== Create Table HEAD ===========*/
  const acceptanceList = [ 'std_id', 'accept_time', 'accept_done' ]
  const acceptanceDoneList = [ 'std_id', 'accept_time', 'accept_score','accept_score' ]
  

  const params = useParams();
  const csid = params.cs_id;
  const hwname = params.hw_name;
  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  useEffect(() => {
      async function fetchData() {
          const result = await axios.get(`/teacher/acceptance/hw/${csid}/${hwname}`);
          setAcceptances(result.data);
        //   console.log(result.data);
      }
      fetchData();
  }, []);

   console.log(acceptances);

  // let history = useHistory(); //傳值跳頁的方法
  
  return (
    <div className={classes.div}>
  
      <MyMenu/>

      {/* <Box border={1} mx="auto" width="60%" borderRadius={16} boxShadow={3} bgcolor="#FFF" color="background.paper"> */}
      <AppBar position="static" color="default">
                <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                >
                <LinkTab label="未完成" href="/drafts" {...a11yProps(0)} />
                <LinkTab label="已完成" href="/trash" {...a11yProps(1)} />
            
                </Tabs>
            </AppBar>
      <TabPanel value={value} index={0}>
      <Paper>
      <TableContainer>
        <Table className={classes.table} size="small">

            {/*===== TableHead =====*/}
            <TableHead>
                <TableRow>
                  <TableCell component="th" scope="row" align="center">學號</TableCell>
                  <TableCell component="th" scope="row" align="center">時間</TableCell>
                  {/* <TableCell component="th" scope="row" align="center">狀態</TableCell> */}
                  <TableCell component="th" scope="row" align="center">處理</TableCell>
                </TableRow>
            </TableHead>

            {/*===== TableBody =====*/}
            <TableBody>
                {acceptances.map((acceptance,index) => acceptance["accept_done"] === false ? (
                    <TableRow key={index}>
                      {/* <TableCell ></TableCell> */}
                    {
                        acceptanceList.map( (list, i) => i < 2 ?
                            <TableCell key={i} component="th" scope="row" align="center">
                               {acceptance[list]}
                            </TableCell>
                            :
                            <TableCell key={i} align="center">
                             <AcceptScore
                             stdid={acceptance['std_id']}
                             hwid={acceptance['accept_hw_id']}
                            //  time={acceptance["accept_time"]}
                            //  done={acceptance["accept_done"]}
                             />

                            {/* <IconButton  variant="outlined"  style={{color:brown[500]}} 
                             //onClick={(e)=>deletstudent(e,student.std_id)}
                             >
                              <DeleteOutlineIcon/>
                            </IconButton> */}
                             
                            </TableCell>
                         )
                    }
                    
                    </TableRow>
                    
                )
                :
                <div></div>
               
                )}
            </TableBody>

        </Table>
        </TableContainer>
        </Paper>
        </TabPanel>


        <TabPanel value={value} index={1}>
     <Paper>
     <TableContainer>
        <Table className={classes.table} size='small'>

            {/*===== TableHead =====*/}
            <TableHead>
                <TableRow>
                  <TableCell component="th" scope="row" align="center">學號</TableCell>
                  <TableCell component="th" scope="row" align="center">時間</TableCell>
                  <TableCell component="th" scope="row" align="center">分數</TableCell>
                  <TableCell component="th" scope="row" align="center">處理</TableCell>
                  
                </TableRow>
            </TableHead>

            {/*===== TableBody =====*/}
            <TableBody>
                {acceptances.map((acceptance,index) => acceptance["accept_done"] === true ? (
                    <TableRow key={index}>
                      {/* <TableCell align="center"></TableCell> */}
                      
                    {
                        
                        acceptanceDoneList.map( (list, i) => i < 3 ?
                            <TableCell key={i} component="th" scope="row" align="center" >
                               {acceptance[list]}
                            </TableCell>
                            :
                            <TableCell key={i} align="center">
                             <EditScore
                             stdid={acceptance['std_id']}
                             hwid={acceptance['accept_hw_id']}
                            //  time={acceptance["accept_time"]}
                            //  done={acceptance["accept_done"]}
                             />
                            
                             
                            </TableCell>
                              
                         )
                    }
                    
                    </TableRow>
                    
                )
                :
                <div></div>
               
                )}
            </TableBody>

        </Table>
        </TableContainer>
        </Paper>
        </TabPanel>
    </div>
  );
}
