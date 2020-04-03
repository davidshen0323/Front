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
  const acceptanceList = [ 'accept_std_id', 'accept_time', 'accept_done' ]
  const csname='微積分作業二' //這是假的

  useEffect(() => {
      async function fetchData() {
          const result = await axios.get(`/student/acceptance/hw/2/DC`);
          setAcceptances(result.data);
        //   console.log(result.data);
      }
      fetchData();
  }, []);

  return (
    <Paper className={classes.root}>
      <MyMenu/>

  <center> <label>{csname}</label>  </center>

        <Table className={classes.table}>

            {/*===== TableHead =====*/}
            <TableHead>
                <TableRow>
                  <TableCell >排序</TableCell>
                  <TableCell align="center">學號</TableCell>
                  <TableCell >時間</TableCell>
                  <TableCell >狀態</TableCell>
                  <TableCell >取消驗收</TableCell>
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
                            <TableCell key={i} align="left">{acceptance[list]}</TableCell> 
                            
                        )
                    }
                    
                    </TableRow>
                    
                ))}
            </TableBody>

        </Table>
    </Paper>
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