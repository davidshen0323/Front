import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {useState,useEffect} from 'react';
import DeleteMember from './DeleteMember';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { TableSortLabel, TablePagination, TableHead, TableBody, TableContainer, Table, TableRow, TableCell } from '@material-ui/core';


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
  { id: 'delet', numeric: true, disablePadding: false, label: '刪除' },
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
          style={{ fontFamily:'微軟正黑體'}}
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

/*---------------------------------------*/
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    fontFamily: 'Microsoft JhengHei',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));
/*------------------------------------*/


export default function MemberTable( props ) {

  /*------------ STATE ------------*/
  const [students, setMembers] = useState([]);
 
  const params = useParams();
  console.log(params.cs_id);
  
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

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
 const studentList = [ 'std_id', 'std_name', 'std_department','std_id']

  const csid = props.csid
  
  console.log(csid)

 useEffect(() => {
  async function fetchData() {

      const result = await axios.get(`/teacher/Course/studentList/${csid}/`);

      
      console.log(result.data);

      setMembers(result.data);
  }
  fetchData();
}, []);


  const deletstudent=(event,id)=>{
    const stuIndex = students.findIndex(s=>s.std_id==id)
    handleDelete(students[stuIndex])
    console.log('stuIndex',students[stuIndex])
  }

  const handleDelete = (student) =>
   {

     console.log('student',student['std_id'])
     console.log(props.csid)
        fetch(`/teacher/Deletestudent`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              std_id: student.std_id,
              cs_id: props.csid,
        })
       })
       window.location.reload();
      }



  return (
    <div className={classes.root}>
     
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='small'
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
               order={order}
               orderBy={orderBy}
               onRequestSort={handleRequestSort}
               rowCount={students.length}
            />


            {/*===== TableBody =====*/}
            <TableBody>
              {stableSort(students, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((student, index) => (
                  <TableRow hover>
                     {/* 碰到的時候後面會反灰 */}
                  <TableCell>{index+1}</TableCell>
                  {
                    studentList.map( (list, i) =>   i< 3 ? 
                    <TableCell key={i} component="th" scope="row" align="left" padding="none" >
                    {student[list]}
                 </TableCell>:
                 <TableCell align="left" padding="none" >
                   <DeleteMember
                   std_id={student['std_id']} />
               </TableCell>
                        )
                  }    
                </TableRow>
                ))}
            </TableBody>
          </Table>
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
