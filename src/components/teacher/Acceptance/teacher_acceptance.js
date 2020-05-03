import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableHead, TableRow, Box, Grid} from "@material-ui/core";
import MyMenu from '../MenuT';
import { useParams} from 'react-router-dom';
import {useHistory} from "react-router-dom";

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
  const acceptanceList = [ 'std_id', 'accept_time', 'accept_done' ]
  

  const params = useParams();
  const csid = params.cs_id;
  const hwname = params.hw_name;
  

  useEffect(() => {
      async function fetchData() {
          const result = await axios.get(`/teacher/acceptance/hw/${csid}/${hwname}`);
          setAcceptances(result.data);
        //   console.log(result.data);
      }
      fetchData();
  }, []);

   console.log(acceptances);

  let history = useHistory(); //傳值跳頁的方法
  
  return (
    <div>
  
      <MyMenu/>

      <Box border={1} mx="auto" width="60%" borderRadius={16} boxShadow={3} bgcolor="#FFF" color="background.paper">
 

        <Table className={classes.table}>

            {/*===== TableHead =====*/}
            <TableHead>
                <TableRow>
                  <TableCell align="center">排序</TableCell>
                  <TableCell align="center">學號</TableCell>
                  <TableCell align="center">時間</TableCell>
                  <TableCell align="center">狀態</TableCell>
                  
                </TableRow>
            </TableHead>

            {/*===== TableBody =====*/}
            <TableBody>
                {acceptances.map((acceptance,index) => (
                    <TableRow key={index}>
                      <TableCell align="center">{index+1} </TableCell>
                      
                    {
                        
                        acceptanceList.map( (list, i) =>
                            <TableCell key={i} component="th" scope="row" align="center" >
                               {acceptance[list]}
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
                    
                ))}
            </TableBody>

        </Table>
        </Box>

        <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={2}
        >
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