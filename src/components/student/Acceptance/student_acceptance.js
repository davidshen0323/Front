import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Button, Box, Grid} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import MyMenu from '../MenuS';
import { useParams, Link ,useHistory} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import {List} from '@material-ui/core/';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function AcceptanceList({ open }) {

  /*------------ STATE ------------*/
  const [acceptances, setAcceptances] = useState([]);

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
      backgroundColor: "#003060",
      fontWeight:'bold',
    },
  }
  ));
  const classes = useStyles();

  /*=========== Create Table HEAD ===========*/
  const acceptanceList = [ 'std_id', 'accept_time', 'accept_done' ]
  
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
  

  useEffect(() => {
      async function fetchData() {
          const result = await axios.get(`/student/acceptance/hw/${csid}/${hwname}`);
          setAcceptances(result.data);
        //   console.log(result.data);
      }
      fetchData();
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
      history.push(`/acceptance/${csid}/${hwname}`)
      // history.push(`/acceptance/${csid}/${hwname}`);

    }
    

  } fetchres() })
  // console.log(hwname)
}

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

  return (
    <div>
  
      <MyMenu/>
      <br/>
      <Paper className={classes.Paper}>
      <TableContainer>
        <Table className={classes.table}>

            {/*===== TableHead =====*/}
            <TableHead>
                <TableRow>
                  <TableCell align="center">排序</TableCell>
                  <TableCell align="center">學號</TableCell>
                  <TableCell align="center">時間</TableCell>
                  {/* <TableCell align="center">狀態</TableCell> */}
                  
                </TableRow>
            </TableHead>

            {/*===== TableBody =====*/}
            <TableBody>
                {acceptances.map((acceptance,index) => acceptance["accept_done"] === false ? (
                    <TableRow key={index}>
                      <TableCell align="center">{index+1}</TableCell>
                      
                    {
                        
                        acceptanceList.map( (list, i) =>   i === 0 ? 
                            <TableCell key={i} component="th" scope="row" align="center" >
                               {acceptance[list]}
                               {/* {console.log(i)} */}
                               {/* {console.log(list)} */}

                            </TableCell>:
                            <TableCell key={i} align="center">
                               {acceptance[list]}
                               {console.log(i)}
                               {console.log(list)}
                              
                            {/* {acceptanceList.map( (list, i) => acceptance[list][4] === true ?
                            <TableCell>
                              <p>已驗收過</p>
                            </TableCell>
                            :
                            <TableCell>
                              <p>尚未驗收</p>
                            </TableCell>
                            ) */}
                              </TableCell> 
                        )
                    }
                    
                    </TableRow>
                    
                )
                :
                <TableRow>

                </TableRow>
                )}
            </TableBody>

        </Table>
        </TableContainer>
        </Paper>

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
          onClick={handleSubmit}
          className={classes.button}
          >
            我要驗收
          </Button>
          
          
          
          <Button
          onClick={handledelete}
          className={classes.button}
          >  
            取消驗收
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
        <Snackbar open={openS} autoHideDuration={2000} onClose={submitClose} style={{marginBottom:100}}>
          <Alert severity="success">
            登記驗收成功！
          </Alert>
        </Snackbar>
        {/* 成功小綠框2 */}
        <Snackbar open={openS2} autoHideDuration={2000} onClose={submitClose} style={{marginBottom:100}}>
          <Alert severity="success">
            取消驗收成功！
          </Alert>
        </Snackbar>
        {/* 失敗小紅框1 */}
        <Snackbar open={openErr1} autoHideDuration={1500} onClose={submitClose} style={{marginBottom:100}}>
          <Alert severity="error">
            老師已經打分數了，無法取消！
          </Alert>
        </Snackbar>
        {/* 失敗小橘框 */}
        <Snackbar open={openWarn} autoHideDuration={1500} onClose={submitClose} style={{marginBottom:100}}>
          <Alert severity="warning">
            您已登記過驗收！
          </Alert>
        </Snackbar>
        {/* 失敗小橘框2 */}
        <Snackbar open={openWarn2} autoHideDuration={1500} onClose={submitClose} style={{marginBottom:100}}>
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