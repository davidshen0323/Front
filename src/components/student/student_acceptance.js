import React, {useState,useEffect} from 'react';

import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import MyMenu from '../Menu';
import { useParams } from 'react-router-dom';
import { Box, Grid, Button } from '@material-ui/core';
import {useHistory} from "react-router-dom";

export default function AcceptanceList() {

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
  });
  const classes = useStyles();

  /*=========== Create Table HEAD ===========*/
  const acceptanceList = [ 'std_id', 'accept_time', 'accept_done' ]
  // const csname='微積分作業二' //這是假的

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

  console.log(acceptances);

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
      alert("登記驗收成功!")
      history.push(`/acceptance/${csid}/${hwname}`)
      history.push(`/acceptance/${csid}/${hwname}`);

    }
    else if(test === "您已驗收過")
    {
      alert("您已登記過驗收!")
      history.push(`/acceptance/${csid}/${hwname}`)
      history.push(`/acceptance/${csid}/${hwname}`);

    }
    

  } fetchres() })
  // console.log(hwname)
}

  // const handledelete = () =>
  // {
  //   fetch('',{
  //     method: 'DELETE',
  //     headers: {
  //         'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({
          
  //     })
  // })
  // }

  return (
    <div>
  
      <MyMenu/>

      <Box border={1} mx="auto" width="60%" borderRadius={16} boxShadow={3} bgcolor="#FFF" color="background.paper">
 

        <Table className={classes.table}>

            {/*===== TableHead =====*/}
            <TableHead>
                <TableRow>
                  <TableCell >排序</TableCell>
                  <TableCell align="center">學號</TableCell>
                  <TableCell >時間</TableCell>
                  {/* <TableCell >狀態</TableCell> */}
                  
                </TableRow>
            </TableHead>

            {/*===== TableBody =====*/}
            <TableBody>
                {acceptances.map((acceptance,index) => (
                    <TableRow key={index}>
                      <TableCell>{index+1} </TableCell>
                      
                    {
                        
                        acceptanceList.map( (list, i) =>   i === 0 ? 
                            <TableCell key={i} component="th" scope="row" align="center" >
                               {acceptance[list]}
                            </TableCell>:
                            <TableCell key={i} align="left">
                              {acceptance[list]}
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
                    
                ))}
            </TableBody>

        </Table>
        </Box>

        <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
        >
          
          <Grid item>
          <Button onClick={handleSubmit}>
            我要驗收
          </Button>
          </Grid>
          
          <Grid item>
          <Button>
            取消驗收
          </Button>
          </Grid>


        </Grid>
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