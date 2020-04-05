import React , { useState, useEffect } from 'react';
import MyMenu from '../Menu';
import { Button,Table,TableHead,TableBody,TableCell,TableRow,Box, ButtonBase } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Link, useParams} from "react-router-dom";
import axios from 'axios';



export default function SelectHW() {
  //接值

  // const classed = useStyles();

  const [Acc, setAcc] = React.useState([]);

  const acceptanceList = [ 'hw_name', 'hw_createtime' ]

  const params = useParams();
  const csid = params.cs_id;
  
  // console.log(csid);
  useEffect(() => {
    async function fetchData() {

      const result  = await axios.get(`/student/acceptance/${csid}`)
      
      setAcc(result.data);
      console.log(result.data);
      // console.log(result.data[0]['cs_id']);
      
      // const path ={result.data['cs_id']}
    }
    
    fetchData();
  }, []);

  console.log(Acc);

  
  
  
  return (
    <div>
      <MyMenu/>
      <Typography  variant="h5" component="h2" gutterBottom style={{marginBottom:'2%',textAlign:'center',marginTop:'2%'}}>請選擇作業：</Typography>
      <Box border={1} mx="auto" width="60%" borderRadius={16} boxShadow={3} bgcolor="#FFF" color="background.paper">
          
          <Table>
            <TableHead>
                <TableRow>
                    <TableCell>作業名稱</TableCell>
                    <TableCell>日期</TableCell>
                    
                </TableRow>
            </TableHead>
            
            <TableBody>
              {Acc.map((Accept,index) => (
                <TableRow key={index}>
                  {/* <ButtonBase 
                  component={Link} 
                  to={`/acceptance/${params.cs_id}/${}`}
                  >
                     */}
                  {/* <TableCell>{index+1}</TableCell> */}
                  {
                    acceptanceList.map( (list, i) => i === 0 ?
                    <TableCell key={i} component="th" scope="row" align="center">
                      <ButtonBase component={Link} to={`/acceptance/${csid}/${Accept[list]}`}>
                        {Accept[list]}      
                      </ButtonBase>
                      </TableCell>:
                      <TableCell key={i} align="left"><ButtonBase component={Link} to={`/acceptance/${csid}/${Accept[list]}`}>
                      {Accept[list]}      
                    </ButtonBase></TableCell>
                      )
                    }
                    {/* </ButtonBase> */}
                </TableRow>
              ))}
              {/* </TableBody> */}

                {/* <TableRow>
                    <TableCell>微積分作業一</TableCell>
                    <TableCell>20200305</TableCell>
                    <TableCell>20</TableCell>
                    <TableCell><Button variant="contained" color="primary" disabled >已驗收</Button></TableCell>
                </TableRow>
                
                <TableRow>
                    <TableCell>微積分作業二</TableCell>
                    <TableCell>20200310</TableCell>
                    <TableCell></TableCell>
                    <TableCell><Button  component={Link} to ='/acceptance' variant="contained" color="primary" >我要驗收</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>微積分作業三</TableCell>
                    <TableCell>20200311</TableCell>
                    <TableCell>80</TableCell>
                    <TableCell><Button variant="contained" color="primary" disabled>已驗收</Button></TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>微積分作業四</TableCell>
                    <TableCell>20200318</TableCell>
                    <TableCell></TableCell>
                    <TableCell><Button component={Link} to ='/acceptance' variant="contained" color="primary">我要驗收</Button></TableCell>
                </TableRow> */}
            </TableBody>
          </Table>
      </Box>

    </div>
  )
}