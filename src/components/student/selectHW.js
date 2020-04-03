import React from 'react';
import MyMenu from '../Menu';
import { Button,Table,TableHead,TableBody,TableCell,TableRow,Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";



export default function selectHW() {
  //接值
  const acceptanceList = [ 'hw_name', 'hw_content', 'accept_done' ]


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
                    <TableCell>分數</TableCell>
                    <TableCell>驗收</TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
                <TableRow>
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
                </TableRow>
            </TableBody>
          </Table>
      </Box>

    </div>
  )
}