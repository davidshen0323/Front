import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';

import {Table, TableBody, TableCell, TableHead, TableRow, Box, Grid, Typography, Tabs, Tab, Appbar} from "@material-ui/core";
import MyMenu from '../MenuT';
import { useParams} from 'react-router-dom';

import {useHistory} from "react-router-dom";
import AcceptScore from "./acceptScore";
import PropTypes from 'prop-types';
import EditScore from './EditScore';


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
      backgroundColor: "#003060",
      fontWeight:'bold',
    },
  });
  const classes = useStyles();

  /*=========== Create Table HEAD ===========*/
  const acceptanceList = [ 'std_id', 'accept_time', 'accept_score', 'accept_done' ]
  

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
    <div>
  
      <MyMenu/>

      {/* <Box border={1} mx="auto" width="60%" borderRadius={16} boxShadow={3} bgcolor="#FFF" color="background.paper"> */}
      <AppBar position="static" color="default">
                <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                >
                <LinkTab label="未驗收" href="/drafts" {...a11yProps(0)} />
                <LinkTab label="已驗收" href="/trash" {...a11yProps(1)} />
            
                </Tabs>
            </AppBar>
      <TabPanel value={value} index={0}>
      <Box border={1} mx="auto" width="80%" borderRadius={16} boxShadow={3} bgcolor="#FFF" color="background.paper">

        <Table className={classes.table}>

            {/*===== TableHead =====*/}
            <TableHead>
                <TableRow>
                  <TableCell align="center">排序</TableCell>
                  <TableCell align="center">學號</TableCell>
                  <TableCell align="center">時間</TableCell>
                  <TableCell align="center">分數</TableCell>
                  
                </TableRow>
            </TableHead>

            {/*===== TableBody =====*/}
            <TableBody>
                {acceptances.map((acceptance,index) => acceptance["accept_done"] === false ? (
                    <TableRow key={index}>
                      <TableCell align="center">{index+1} </TableCell>
                      
                    {
                        
                        acceptanceList.map( (list, i) => i < 3 ?
                            <TableCell key={i} component="th" scope="row" align="center" >
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
                             
                            </TableCell>
                              
                        //     {/* {acceptanceList.map( (list, i) => acceptance[list][4] === true ?
                        //     <TableCell>
                        //       <p>已驗收過</p>
                        //     </TableCell>
                        //     :
                        //     <TableCell>
                        //       <p>尚未驗收</p>
                        //     </TableCell>
                        //     ) */}
                        //       </TableCell> 
                         )
                    }
                    
                    </TableRow>
                    
                )
                :
                <div></div>
               
                )}
            </TableBody>

        </Table>
        </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
      <Box border={1} mx="auto" width="80%" borderRadius={16} boxShadow={3} bgcolor="#FFF" color="background.paper">

        <Table className={classes.table}>

            {/*===== TableHead =====*/}
            <TableHead>
                <TableRow>
                  <TableCell align="center">排序</TableCell>
                  <TableCell align="center">學號</TableCell>
                  <TableCell align="center">時間</TableCell>
                  <TableCell align="center">分數</TableCell>
                  
                </TableRow>
            </TableHead>

            {/*===== TableBody =====*/}
            <TableBody>
                {acceptances.map((acceptance,index) => acceptance["accept_done"] === true ? (
                    <TableRow key={index}>
                      <TableCell align="center">{index+1} </TableCell>
                      
                    {
                        
                        acceptanceList.map( (list, i) => i < 3 ?
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
                              
                        //     {/* {acceptanceList.map( (list, i) => acceptance[list][4] === true ?
                        //     <TableCell>
                        //       <p>已驗收過</p>
                        //     </TableCell>
                        //     :
                        //     <TableCell>
                        //       <p>尚未驗收</p>
                        //     </TableCell>
                        //     ) */}
                        //       </TableCell> 
                         )
                    }
                    
                    </TableRow>
                    
                )
                :
                <div></div>
               
                )}
            </TableBody>

        </Table>
        </Box>
        </TabPanel>
        {/* <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
        > */}
{/*           
          
          <Button 
          onClick={handleSubmit}
          className={classes.button}
          >
            我要驗收
          </Button>
          
          
           */}
          {/* <Button
          onClick={handledelete}
          className={classes.button}
          >  
            取消驗收
          </Button> */}
{/* 
          <Button
      className={classes.button}
      component={Link}
      to={`/selectHW_T/${params.cs_id}`}
      >
      返回
      </Button>
           */}


        {/* </Grid> */}
        </div>
       
)
}




// import React, {Component} from 'react';
// import TableCell from '@material-ui/core/TableCell';
// import TableRow from '@material-ui/core/TableRow';
// import { Button } from '@material-ui/core/';


// export default class Acceptance extends Component{

//   render(){
//     return (
//       <TableRow>
//         <TableCell>{this.props.acceptance.sort}</TableCell>          
//         <TableCell>{this.props.acceptance.stuid}</TableCell>
//         <TableCell>{this.props.acceptance.time}</TableCell>
//         <TableCell> {this.props.acceptance.status}</TableCell>
//         <TableCell>
//           {(this.props.acceptance.stuid == "406401628") &&
//              <Button>取消驗收</Button>
//           }</TableCell>
//       </TableRow>
//     )
    
//   }
    
// }
