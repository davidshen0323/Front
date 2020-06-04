import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, TableContainer,Box, Typography, Tab, AppBar, Tabs,Button} from "@material-ui/core";

import MyMenu from '../MenuT';
import { useParams} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import AcceptScore from "./acceptScore";
import PropTypes from 'prop-types';
import EditScore from './EditScore';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

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
    button: {
      marginLeft: 10,
      marginTop: 10,
      marginBottom: 10,
      width:'100px',
      fontFamily: 'Microsoft JhengHei',
      color: "white",
      fontSize:14,
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
  const acceptanceList = [ 'accept_label','std_id','std_name', 'accept_time','accept_state','accept_score','accept_content','accept_score' ]
  const acceptanceDoneList = [ 'accept_label','std_id','std_name' ,'accept_time', 'accept_score','accept_score' ]
  

  const params = useParams();
  const csid = params.cs_id;
  const hwname = params.hw_name;
  
  const[state,setState] = React.useState({});
  const [value, setValue] = React.useState(0);

   // 成功小綠綠
   const [openS, setOpenS] = React.useState(false);
   // 成功小綠綠2
   const [openS2, setOpenS2] = React.useState(false);
   // 失敗小紅1
   const [openErr1, setOpenErr1] = React.useState(false);
   // 警告小橘
   const [openWarn, setOpenWarn] = React.useState(false);
   // 警告小橘2
   const [openWarn2, setOpenWarn2] = React.useState(false);



  useEffect(() => {
      async function fetchData() {
          const result = await axios.get(`/teacher/acceptance/hw/${csid}/${hwname}`);
          setAcceptances(result.data);
        //   console.log(result.data);
      }
      fetchData();
  }, []);

   console.log(acceptances);
  

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const labelChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handledelete = () =>
  {
    fetch('/teacher/acceptance/deleteAcceptance',{
      method: 'DELETE',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        hw_name: hwname,
      })
  })
  .then(res => {
    async function fetchres(){
      const test = await res.text();  //接收後端傳來的訊息
      if (test === "此學生尚未點選驗收") //帳號已註冊過
      {
          //alert("你還沒點過驗收");
          setOpenWarn2(true);
      }
      else if(test === "老師已驗收完成無法取消驗收") //信箱不包含@
      {
          //alert("老師已經打分數了，無法取消!");
          setOpenErr1(true);
      }
      else
      {
          //alert("取消驗收成功!");    
          setOpenS2(true);
          // history.push(`/acceptance/${csid}/${hwname}`);     
          window.location.reload();

      }
      
  } fetchres() })
  
}

  return (
    <div className={classes.div}>
  
      <MyMenu/>

      {/* <Box border={1} mx="auto" width="60%" borderRadius={16} boxShadow={3} bgcolor="#FFF" color="background.paper"> */}
      <AppBar position="static" color="default" style={{maxWidth:'96%',margin:'auto'}}>
                <Tabs
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                aria-label="nav tabs example"
                >
                <LinkTab label="舉手排序" href="/drafts" {...a11yProps(0)} style={{ fontFamily:'微軟正黑體'}}/>
                <LinkTab label="驗收完成" href="/trash" {...a11yProps(1)} style={{ fontFamily:'微軟正黑體'}}/>
            
                </Tabs>
            </AppBar>
      <TabPanel value={value} index={0}>
      <Paper>
      <TableContainer>
        <Table className={classes.table} size="small">

            {/*===== TableHead =====*/}
            <TableHead>
                <TableRow>
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>標記</TableCell>
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>學號</TableCell>
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>姓名</TableCell>
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>時間</TableCell>
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>狀態</TableCell>
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>分數</TableCell> 
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>註記內容</TableCell>
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>處理</TableCell>
                </TableRow>
            </TableHead>

            {/*===== TableBody =====*/}
            <TableBody>
                {acceptances.map((acceptance,index) => acceptance["accept_done"] === false ? (
                    <TableRow key={index}>
                      {/* <TableCell ></TableCell> */}
                      
                    {
                        acceptanceList.map( (list, i) => i < 7 ?
                            i<1?
                            <TableCell key={i} component="th" scope="row" align="center">
                           <FormControlLabel
                              control={
                              <Checkbox 
                              icon={<RadioButtonUncheckedIcon />} 
                              checkedIcon={<FiberManualRecordIcon />} 
                              checked={state.label}
                              onChange={labelChange}
                              />}
                            />
                         </TableCell>
                            
                          :
                          <TableCell key={i} component="th" scope="row" align="center">
                               {acceptance[list]}
                            </TableCell>
                            :
                            <TableCell key={i} align="center">
                             <AcceptScore
                             stdid={acceptance['std_id']}
                             hwid={acceptance['accept_hw_id']}
                             stdname={acceptance['std_name']}
                             />

                            <Button  
                            onClick={handledelete}
                            variant="contained" 
                            className={classes.button} 
                             >
                            完成問題
                            </Button>
                             
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
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>標記</TableCell>
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>學號</TableCell>
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>姓名</TableCell>
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>時間</TableCell>
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>分數</TableCell>
                  <TableCell component="th" scope="row" align="center" style={{ fontFamily:'微軟正黑體'}}>處理</TableCell>
                  
                </TableRow>
            </TableHead>

            {/*===== TableBody =====*/}
            <TableBody>
                {acceptances.map((acceptance,index) => acceptance["accept_done"] === true ? (
                    <TableRow key={index}>
                      {/* <TableCell align="center"></TableCell> */}
                      
                    {
                        
                        acceptanceDoneList.map( (list, i) => i < 5 ?
                        i<1?
                        <TableCell key={i} component="th" scope="row" align="center">
                       <FormControlLabel
                          control={
                          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} 
                          checked={state.label}
                          onChange={labelChange}
                          />}
                        />
                     </TableCell>
                            :
                            <TableCell key={i} component="th" scope="row" align="center" >
                               {acceptance[list]}
                            </TableCell>
                            :
                            <TableCell key={i} align="center">
                             <EditScore
                             stdid={acceptance['std_id']}
                             hwid={acceptance['accept_hw_id']}
                             score={acceptance['accept_score']}
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