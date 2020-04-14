import React from 'react';
import { Table, TableRow, TableCell, Typography, Box, Button } from '@material-ui/core';
import MyMenu from '../../Menu';
import EditEmail from './editEmail';
import EditPhone from './editPhone';
import EditPassword from'./editPassword';
import UploadImg from './uploadImg';



export default function StuInformation() {
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

 


  return (
   
    
    <div > 
        <MyMenu/>
            <Box border={1} mx="auto" marginTop="8%" width="80%" borderRadius={16} boxShadow={3} bgcolor="#FFF" borderColor="#0066CC">
            <Typography  variant="h4" component="h2" gutterBottom style={{marginBottom:'2%',textAlign:'center',marginTop:'2%',color:'#0066CC'}}>學生基本資料</Typography>
                <Table >
                    <TableRow >
                        <TableCell width="40%" align="center">頭像</TableCell>
                        <TableCell width="40%"></TableCell>
                        <TableCell width="20%"><Button onClick={() => closeUploadImg(true)} variant="outlined" color="primary">上傳大頭照</Button></TableCell>
                        
                    </TableRow>
                    <TableRow >
                        <TableCell width="40%" align="center">姓名</TableCell>
                        <TableCell width="40%">程海綿(之後接值)</TableCell>
                        <TableCell width="20%"></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">學號</TableCell>
                        <TableCell >406401628(之後接值)</TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">系級</TableCell>
                        <TableCell >資訊管理學系3年級(之後接值)</TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">性別</TableCell>
                        <TableCell >女(之後接值)</TableCell>
                        <TableCell ></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">Email</TableCell>
                        <TableCell >406401628@mail.fju.edu.tw(之後接值)</TableCell>
                        <TableCell><Button onClick={() => closeEditEmail(true)} variant="outlined" color="primary">修改Email</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">手機號碼</TableCell>
                        <TableCell >0912345678(之後接值)</TableCell>
                        <TableCell><Button onClick={() => closeEditPhone(true)} variant="outlined" color="primary">修改手機號碼</Button></TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align="center">密碼</TableCell>
                        <TableCell><Button onClick={() => closeEditPassword(true)} variant="outlined" color="primary">更改密碼</Button></TableCell>
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