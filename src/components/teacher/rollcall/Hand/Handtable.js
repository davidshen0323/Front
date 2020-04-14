import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import {Save,Delete} from '@material-ui/icons';
import Button from '@material-ui/core/Button';


function createData(number, name,grade,pass,absence) {
  return { number, name,grade,pass,absence };
}


const rows = [
        createData( 406401111,'李李李', '資訊管理學系 3年級', '01'),
        createData( 406401222,'沈沈沈', '資訊管理學系 3年級', '01'),
        createData( 406401333,'黃黃黃', '資訊管理學系 3年級', '01'),
        createData( 406401444,'楊楊楊', '資訊管理學系 3年級', '01'),
        createData( 406401111,'程程程', '資訊管理學系 3年級', '01'),
        createData( 406401111,'吳吳吳', '資訊管理學系 3年級', '01'),
        createData( 406401111,'李李里', '資訊管理學系 3年級', '01'),
        createData( 406401111,'嬸嬸沈', '資訊管理學系 3年級', '01'),
        createData( 406401111,'黃黃煌', '資訊管理學系 3年級', '01'),
        createData( 406401111,'楊洋洋', '資訊管理學系 3年級', '01'),
        createData( 406401111,'程成程', '資訊管理學系 3年級', '01'),
        createData( 406401111,'里里里', '資訊管理學系 3年級', '01'),
      ];

const headCells = [
    { id: 'number', numeric: true, disablePadding: false, label: '學號' },
    { id: 'name', numeric: true, disablePadding: false, label: '姓名' },
    { id: 'grade', numeric: true, disablePadding: false, label: '系級' },
    { id: 'absence', numeric: true, disablePadding: false, label: '出席狀況' },
  ];



function EnhancedTableHead(props) {

    return (
    <TableHead>
      <TableRow>
        <TableCell padding="none" />
          
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ='left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
          >
              {headCell.label}              
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

/*----------------------------------------------*/
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  button:{
    margin: theme.spacing(2),
    
  },
}));
/*---------------------------------------------*/


export default function Handtable() {

  /*------------ STATE ------------*/
  const [students, setMembers] = useState([]);


  const [selectedValue, setSelectedValue] = React.useState('0');
  const classes = useStyles();

/*=========== Create Table HEAD ===========*/
const studentList = [ 'std_id', 'std_name', 'std_department']

useEffect(() => {
 async function fetchData() {
     const result = await axios.get(`/teacher/rollcall/oneRollcall/2`);
     
     console.log(result.data);

     setMembers(result.data);
 }
 fetchData();
}, []);


  return (
    <div className={classes.root}>

    <TableContainer>
          <Table
            className={classes.table}
            size='small'
          >
            <EnhancedTableHead
              classes={classes}          
            />

            {/*===== TableBody =====*/}
            <TableBody>
                {students.map((student, index) => (
                    
                  <TableRow hover role="none">
                     {/* 碰到的時候後面會反灰 */}
                  <TableCell>{index+1}</TableCell>

                  {
                    studentList.map( (list, i) =>   i === 0 ? 
                    <TableCell key={i} component="th" scope="row" align="left">
                    {student[list]}
                    </TableCell>:
                    <TableCell key={i} align="left">{student[list]}</TableCell> 
                        )
                  }
                       
                    <TableCell align="left">
                    <FormControl component="fieldset">
                      <RadioGroup row aria-label="position" name="position" defaultValue="top">
                        <FormControlLabel value="1" control={<Radio color="primary" size="small"/>} label="出席" />
                        <FormControlLabel value="2" control={<Radio color="primary" size="small"/>} label="遲到" />
                        <FormControlLabel value="3" control={<Radio color="primary" size="small"/>} label="請假" />
                        <FormControlLabel value="0" control={<Radio color="primary" size="small"/>} label="缺席" />

                        {/* <FormControlLabel value="1" control={<Radio color="default" align="left" size="small"/>} label="出席"
                        checked={selectedValue === '1'} onChange={handleChange} />

                        <FormControlLabel value="2" control={<Radio color="default" align="left" size="small"/>} label="遲到"
                        checked={selectedValue === '2'} onChange={handleChange} />

                        <FormControlLabel value="3" control={<Radio color="default" align="left" size="small"/>} label="請假"
                        checked={selectedValue === '3'} onChange={handleChange} />

                        <FormControlLabel value="0" control={<Radio color="default" align="left" size="small"/>} label="缺席"
                        checked={selectedValue === '0'} onChange={handleChange} /> */}

                      </RadioGroup>
                    </FormControl>
                    </TableCell>
                      
                </TableRow>
                ))}
            </TableBody>
            </Table>
            <div align="center" >
                    <Button variant="contained" color="secondary"  className= {classes.button} startIcon={<Delete />}>
                        取消
                    </Button>
                    
                    <Button variant="contained" color="primary"   className= {classes.button} startIcon={<Save />}> 
                        確定
                    </Button>
            </div>
          
        </TableContainer>

        

    </div>
  );
}
