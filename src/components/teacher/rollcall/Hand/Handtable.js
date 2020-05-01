import React from 'react';
import {makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import TablePagination from '@material-ui/core/TablePagination';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import {Save,Delete} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import {useHistory} from "react-router-dom";

function descendingComparator(a, b, orderBy) {//順序升降
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}


function getComparator(order, orderBy) {//搜尋
  return order === 'desc'//按照筆畫多到少
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
    { id: 'number', numeric: true, disablePadding: false, label: '學號' },
    { id: 'name', numeric: true, disablePadding: false, label: '姓名' },
    { id: 'grade', numeric: true, disablePadding: false, label: '系級' },
    { id: 'absence', numeric: true, disablePadding: false, label: '出席狀況' },
  ];



  function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = property => event => {
      onRequestSort(event, property);
    };

    return (
    <TableHead>
      <TableRow>
        <TableCell padding="none" />
          
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ='left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
          <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>

          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};


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

const params = useParams();
// console.log(params);
// const csid = params.cs_id;
console.log(params.cs_id);
 

const classes = useStyles();
const [order, setOrder] = React.useState('asc');
const [orderBy, setOrderBy] = React.useState('calories');
const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(10);


/*-------------------------------------------------------------------*/
const [inputs, setInputs] = React.useState({
  tl_type_name:'0',
  //宣告要接值的變數
});

const handleSubmit = () => {
  fetch('/student_re',{
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        std_id: inputs.user,
        std_phone: inputs.phone,
        std_mail: inputs.mail
    })
})
.then(res => {
    async function fetchres(){
    const test = await res.text();
    alert("點名成功!");
                post = true;
                console.log(0);
                history.push("/RollcallBlockT");
                return post;  
} fetchres() })
.then(res => console.log(res))
.catch(err => console.log(`Error with message: ${err}`))

};

let post; //宣告一個布林值變數
let history = useHistory(); //傳值跳頁的方法

const handleChange = fieldname => event => {
  event.persist();
  setInputs(inputs => ({...inputs, [fieldname]: event.target.value}));
  //
}
/*-------------------------------------------------------------------*/

const handleRequestSort = (event, property) => {
  const isAsc = orderBy === property && order === 'asc';
  setOrder(isAsc ? 'desc' : 'asc');
  setOrderBy(property);
};

const handleChangePage = (event, newPage) => {
  setPage(newPage);
};

const handleChangeRowsPerPage = event => {
  setRowsPerPage(parseInt(event.target.value, 10));
  setPage(0);
};
/*=========== Create Table HEAD ===========*/
const studentList = [ 'std_id', 'std_name', 'std_department','tl_type_name']

useEffect(() => {
 async function fetchData() {
     const result = await axios.get(`/teacher/rollcall/studentList/${params.cs_id}`);
     
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
              order={order}
              orderBy={orderBy}              
              onRequestSort={handleRequestSort}       
            />

            {/*===== TableBody =====*/}
            <TableBody>
            {stableSort(students, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((student, index) => {
                  return (
                  <TableRow hover >
                     {/* 碰到的時候後面會反灰 */}
                  <TableCell>{index+1}</TableCell>

                  {
                    studentList.map( (list, i) =>    i < 3 ? 
                    <TableCell key={i} component="th" scope="row" align="left"  >
                    {student[list]}
                 </TableCell>:
                   
                       
                    <TableCell align="left">
                    <FormControl component="fieldset">
                      <RadioGroup row  defaultValue="1">
                        <FormControlLabel value="1" control={<Radio color="primary" size="small"/>} label="出席" />
                        <FormControlLabel value="2" control={<Radio color="primary" size="small"/>} label="遲到" />
                        <FormControlLabel value="3" control={<Radio color="primary" size="small"/>} label="請假" />
                        <FormControlLabel value="0" control={<Radio color="primary" size="small"/>} label="缺席" />

                      </RadioGroup>
                    </FormControl>
                    </TableCell>
                        )
                  }
                </TableRow>
                );
              })}
            </TableBody>
            </Table>
            <div align="center" >
                    <Button variant="contained" color="secondary"  className= {classes.button} startIcon={<Delete />}>
                        取消
                    </Button>
                    
                    <Button variant="contained" color="primary"   className= {classes.button} startIcon={<Save />} onClick={handleSubmit}> 
                        確定
                    </Button>
            </div>
          
        </TableContainer>

        <TablePagination
          rowsPerPageOptions={[10, 25]}
          component="div"
          count={students.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />

        

    </div>
  );
}
