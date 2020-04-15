import React, { useState, useEffect } from 'react';
import { Table, TableHead, TableRow, TableCell, Typography, Box, Button } from '@material-ui/core';

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import MyMenu from '../../Menu';
import EditEmail from './editEmail';
import EditPhone from './editPhone';
import EditPassword from'./editPassword';
import UploadImg from './uploadImg';
import axios from 'axios';



export default function TInformation() {
   {/* 學生修改Email */}
   const [openEditEmail, closeEditEmail] = React.useState(false);
   const onCloseEditEmail = () => {
     closeEditEmail(openEditEmail ? false : true);
   };
   {/* 學生修改Phone */}
   const [openEditPhone, closeEditPhone] = React.useState(false);
   const onCloseEditPhone = () => {
     closeEditPhone(openEditPhone ? false : true);
   };
   {/* 學生修改Password */}
   const [openEditPassword, closeEditPassword] = React.useState(false);
   const onCloseEditPassword = () => {
     closeEditPassword(openEditPassword ? false : true);
   };
   {/* 學生上傳圖片 */}
   const [openUploadImg, closeUploadImg] = React.useState(false);
   const onCloseUploadImg = () => {
     closeUploadImg(openUploadImg ? false : true);
   };
   /*------------ STATE ------------*/
   const [information, setInformation] = React.useState([]);
   const informationList = [ 'std_image', 'std_name', 'std_id', 'std_department', 'std_gender', 'std_mail', 'std_phone', 'std_password'];
   
  //  const params = useParams();
  //  const stdid = params.std_id;

  useEffect(() => {
    async function fetchData(){
      const result = await axios.get('/student/information/');
      
      setInformation(result.data);

    }
    fetchData();
  },[]);
  // console.log(Info);

  return (
    
    <div > 
        <MyMenu/>
            
        <Box border={1} mx="auto" marginTop="6%" width={'80%'} borderRadius={16} boxShadow={3} bgcolor="#FFF" borderColor="#0066CC">
            <Typography  variant="h4" component="h2" gutterBottom style={{marginBottom:'2%',textAlign:'center',marginTop:'2%',color:'#0066CC'}}>學生基本資料</Typography>
            </Box>

            <Box border={1} mx="auto" marginTop="2%" marginBottom="3%" width={'96%'} borderRadius={16} boxShadow={3} bgcolor="#FFF" borderColor="#0066CC">
            <Table >
                    <TableRow >
                        <TableCell width="40%" align="center">頭像</TableCell>
                        <TableCell width="40%" >{information.std_image}</TableCell>
                        <TableCell width="20%"><Button onClick={() => closeUploadImg(true)} variant="outlined" color="primary">上傳大頭照</Button></TableCell>
                        
                    </TableRow>
                    <TableRow >
                        <TableCell width="40%" align="center">姓名</TableCell>
                        <TableCell width="40%">{information.std_name}</TableCell>
                        <TableCell width="20%"></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">學號</TableCell>
                        <TableCell width="40%">{information.std_id}</TableCell>
                        <TableCell width="20%"></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">系級</TableCell>
                        <TableCell width="40%">{information.std_department}</TableCell>
                        <TableCell width="20%"></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">性別</TableCell>
                        <TableCell width="40%">{information.std_gender}</TableCell>
                        <TableCell width="20%"></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Email</TableCell>
                        <TableCell width="40%">{information.std_mail}</TableCell>
                        <TableCell width="20%"><Button onClick={() => closeEditEmail(true)} variant="outlined" color="primary">修改Email</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">手機號碼</TableCell>
                        <TableCell width="40%">{information.std_phone}</TableCell>
                        <TableCell width="20%"><Button onClick={() => closeEditPhone(true)} variant="outlined" color="primary">修改手機號碼</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">密碼</TableCell>
                        <TableCell width="40%">********</TableCell>
                        <TableCell width="20%"><Button onClick={() => closeEditPassword(true)} variant="outlined" color="primary">更改密碼</Button></TableCell>
                    </TableRow>
                </Table>
            </Box>
            {/* 學生修改Email */}
            <EditEmail open={openEditEmail} handleClose={onCloseEditEmail}/>
            {/* 學生修改Phone */}
            <EditPhone open={openEditPhone} handleClose={onCloseEditPhone}/>
            {/* 學生修改Password */}
            <EditPassword open={openEditPassword} handleClose={onCloseEditPassword}/>
            {/* 學生上傳圖片 */}
            <UploadImg open={openUploadImg} handleClose={onCloseUploadImg}/>
    </div>
    


  );
}