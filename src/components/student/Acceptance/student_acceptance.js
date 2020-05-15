import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Button, Box, Grid, Typography, Tab, AppBar, Tabs, List} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import MyMenu from '../MenuS';
import { useParams, Link ,useHistory} from 'react-router-dom';

import PropTypes from 'prop-types';

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



function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AcceptanceList({ open, props }) {

  /*------------ STATE ------------*/
  const [acceptances, setAcceptances] = useState([]);
  // const [stdid, setStdid] = useState();

  /*------------ STYLE ------------*/
  const useStyles = makeStyles(theme =>({
    Paper:{
      width: '90%',
      margin: 'auto', 
      marginTop:'5%',   
      marginBottom:'5%',
      boxShadow:"1px 1px 1px 1px #9E9E9E",    
  },
    root: {
      width: '100%',
      overflowX: 'auto',
    },
    table: {
      minWidth: 450,
      fontFamily:'微軟正黑體'
    },
    // backbut: {
    //   width: 100,
    //   margin:'auto',
    //   marginTop: 20,
    //   fontFamily: 'Microsoft JhengHei',
    //   backgroundColor: '#E0E0E0',
    // },
    button: {
      width: '100px',
      margin:'auto',
      marginTop: 20,
      // marginLeft: 10,
      marginBottom: 10,
      margin: theme.spacing(1),
      fontFamily: 'Microsoft JhengHei',
      color: "white",
      fontSize:16,
      backgroundColor: "#f8b62b",
      fontWeight:'bold',
    },
    div:{
      height:'100vh',
      background: 'linear-gradient(0deg,#ffffff  0%,#fff8e5 30%,#fff2d1 50%,  #ffe1c4 100%)',
    },
  }
  ));
  const classes = useStyles();

  /*=========== Create Table HEAD ===========*/
  const acceptanceList = [ 'std_id', 'accept_time', 'accept_done' ]
  const acceptanceDoneList = [ 'std_id', 'accept_time', 'accept_score' ]
  
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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


  const params = useParams();
  const csid = params.cs_id;
  const hwname = params.hw_name;
  const studentid = params.std_id;
  const stdid = parseInt(studentid);
// console.log(stdid);
  useEffect(() => {
      async function fetchData() {
          const result = await axios.get(`/student/acceptance/hw/${csid}/${hwname}`);
          setAcceptances(result.data);
          console.log(result.data);
      }

    //   async function fetchStdid() {
    //     const result = await axios.get(`/student/acceptance/std_id`);
    //     setStdid(result.data);
    //     console.log(result.data);
    // }
      
      fetchData();
      // fetchStdid();
  }, []);


  
  // console.log(acceptances);

  let history = useHistory(); //傳值跳頁的方法
  
  const handleSubmit = () => 
  {
    fetch('/student/acceptance',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          hw_name: hwname,
      })
  })
  .then(res => {
    async function fetchres(){
    const test = await res.text();
    if(test === "登記驗收成功")
    {
      //alert("登記驗收成功!")
      // history.push(`/acceptance/${csid}/${hwname}`)
      setOpenS(true);
      window.location.reload();

      // history.push(`/acceptance/${csid}/${hwname}`);

    }
    else if(test === "您已驗收過")
    {
      //alert("您已登記過驗收!")
      setOpenWarn(true);
      window.location.reload();

      // history.push(`/acceptance/${csid}/${hwname}`)
      // history.push(`/acceptance/${csid}/${hwname}`);

    }
    

  } fetchres() })
  // console.log(hwname)
}

  // const done = () => {
  //   setOpenWarn(true);
  //   // history.push(`/selectHW_S/${params.cs_id}`)
  // }

  const handledelete = () =>
  {
    fetch('/student/acceptance/deleteAcceptance',{
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

  
  const submitClose = (event, reason) => {
  
    //handleClose(true);
    setOpenS(false);    
    setOpenErr1(false);
    window.location.reload();
  };

  const handleClose = () => {
    setOpenS(false);    
    setOpenS2(false);
    setOpenErr1(false);
    setOpenWarn(false);
    setOpenWarn2(false);
    
  }

  return (
    <div className={classes.div}>
  
      <MyMenu/>

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
      <Table>

            <TableHead>
                <TableRow>
                    {/* <TableCell>排序</TableCell> */}
                    {/* <TableCell component="th" scope="row" align="center">排序</TableCell> */}
                    <TableCell component="th" scope="row" align="center">學號</TableCell>
                    <TableCell component="th" scope="row" align="center">時間</TableCell>
                    {/* <TableCell component="th" scope="row" align="center">分數</TableCell> */}
                </TableRow>
            </TableHead>
            
            <TableBody>
            {acceptances.map((acceptance,index) => acceptance["accept_done"] === false ?
            (
                <TableRow key={index}>
                 {/* <TableCell align="center">{index+1}</TableCell> */}
                  {
                    acceptanceList.map( (list, i) => 
                    
                    <TableCell key={i} component="th" scope="row" align="center">
                      {acceptance[list]}
                     </TableCell>
                     
                      )
                    }
                    
                </TableRow>
              )
              :
              <div></div>
              )}

                {/* <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>406401628</TableCell>
                    <TableCell>Table 怎麼做</TableCell>
                    <TableCell>2020-04-03 11:29</TableCell>
                    <TableCell><Button onClick={() => closeQAReply(true)} variant="contained" color="primary" >回覆</Button></TableCell>
                </TableRow> */}
                
               
            </TableBody>
          </Table>
      </Box>
      </TabPanel>

      {/* 老師回覆問題的小框框 */}
      {/* <QAReply open={openQAReply} handleClose={onCloseQAReply}/> */}

      <TabPanel value={value} index={1}>
      <Box border={1} mx="auto" width="80%" borderRadius={16} boxShadow={3} bgcolor="#FFF" color="background.paper">
      <Table>
            <TableHead>
                <TableRow>
                    {/* <TableCell>排序</TableCell> */}
                    {/* <TableCell component="th" scope="row" align="center">排序</TableCell> */}
                    <TableCell component="th" scope="row" align="center">學號</TableCell>
                    <TableCell component="th" scope="row" align="center">時間</TableCell>
                    <TableCell component="th" scope="row" align="center">分數</TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
            {
            
            acceptances.map((acceptance,k) =>  acceptance["accept_done"] === true && acceptance['std_id'] === stdid ? (
                <TableRow key={k}>
                      {/* <TableCell align="center">{k+1}</TableCell> */}
                 
                  {
                    acceptanceDoneList.map( (list, i) => 
                    
                    <TableCell key={i} component="th" scope="row" align="center">
                      {acceptance[list]}
                      </TableCell>
                      )
                    }
                    
                </TableRow>
              ):
              <div></div>
              )}
               
            </TableBody>
          </Table>
      </Box>
      </TabPanel>



        <Grid
        open={open}
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
        >
          
          <List>
          
          <Button
          onClick={handledelete}
          className={classes.button}
          >  
            取消驗收
          </Button>

          <Button 
          onClick={handleSubmit}
          className={classes.button}
          >
            我要驗收
          </Button>
          
         </List>

          {/* <Button
      className={classes.button}
      component={Link}
      to={`/selectHW_S/${params.cs_id}`}
      >
      返回
      </Button> */}
          


        </Grid> 
        {/* 成功小綠框 */}
        <Snackbar open={openS} autoHideDuration={2000} onClose={submitClose} style={{marginBottom:100,fontFamily:'微軟正黑體'}}>
          <Alert severity="success">
            登記驗收成功！
          </Alert>
        </Snackbar>
        {/* 成功小綠框2 */}
        <Snackbar open={openS2} autoHideDuration={2000} onClose={submitClose} style={{marginBottom:100,fontFamily:'微軟正黑體'}}>
          <Alert severity="success">
            取消驗收成功！
          </Alert>
        </Snackbar>
        {/* 失敗小紅框1 */}

        <Snackbar open={openErr1} autoHideDuration={1500} onClose={handleClose} style={{marginBottom:100,fontFamily:'微軟正黑體'}}>

          <Alert severity="error">
            老師已經打分數了，無法取消！
          </Alert>
        </Snackbar>
        {/* 失敗小橘框 */}

        <Snackbar open={openWarn} autoHideDuration={1500} onClose={handleClose} style={{marginBottom:100,fontFamily:'微軟正黑體'}}>

          <Alert severity="warning">
            您已登記過驗收！
          </Alert>
        </Snackbar>
        {/* 失敗小橘框2 */}

        <Snackbar open={openWarn2} autoHideDuration={1500} onClose={handleClose} style={{marginBottom:100,fontFamily:'微軟正黑體'}}>

          <Alert severity="warning">
            你還沒點過驗收！
          </Alert>
        </Snackbar>

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