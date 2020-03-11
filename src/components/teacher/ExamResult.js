import React from 'react';
import MyMenu from './teacher_menu';
import {makeStyles} from '@material-ui/core/styles';
import { Paper,Table,TableHead,TableBody,TableCell,TableRow } from '@material-ui/core';


export default function examresult() {
    
  return (
    <div><center>
      <MyMenu/>
      <Paper style={{width:'70%', overflow:'auto',marginTop:'3%'}}>
          成績：
          <Table>
            <TableHead>
                <TableRow>
                    <TableCell>學號</TableCell>
                    <TableCell>姓名</TableCell>
                    <TableCell>成績</TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
                <TableRow>
                    <TableCell>406401628</TableCell>
                    <TableCell>YC</TableCell>
                    <TableCell>60</TableCell>
                </TableRow>
            </TableBody>

            
          </Table>
      </Paper>
      
      </center>
    </div>
  )
}