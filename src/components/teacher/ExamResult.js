import React from 'react';
import MyMenu from './teacher_menu';
import { Table,TableHead,TableBody,TableCell,TableRow,Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Pie from './Chart';


export default function examresult() {
    
  return (
    <div>
      <MyMenu/>
      <Typography  variant="h5" component="h2" gutterBottom style={{marginBottom:'2%',textAlign:'center',marginTop:'2%'}}>考試結果：</Typography>
      <Box border={1} mx="auto" width="80%" borderRadius={16} boxShadow={3} bgcolor="#FFF" color="background.paper">
          
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
                <TableRow>
                    <TableCell>406401628</TableCell>
                    <TableCell>YC</TableCell>
                    <TableCell>60</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>406401628</TableCell>
                    <TableCell>YC</TableCell>
                    <TableCell>60</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>406401628</TableCell>
                    <TableCell>YC</TableCell>
                    <TableCell>60</TableCell>
                </TableRow>
            </TableBody>
          </Table>
      </Box>

      
      <Typography style={{marginTop:'3%',marginBottom:'2%',textAlign:'center'}} variant="h5" component="h2" gutterBottom>錯題分析：</Typography>
        <Box width="80%" mx="auto" border={1} borderRadius={16} boxShadow={3} bgcolor="#FFF" color="background.paper">
          <Pie />
        </Box>
      <Box style={{marginTop:'3%'}}/>
    </div>
  )
}