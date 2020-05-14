import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import RDTB from './RdtButton';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


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
  { id: 'time', label: '日期與時間', numeric: false, disablePadding: true },
  { id: 'attend', label: '出席人數', numeric: false, disablePadding: true },
  { id: 'pass', label: '請假人數', numeric: false, disablePadding: true },
  { id: 'absence', label: '缺席人數', numeric: false, disablePadding: true},
  { id: 'from', label: '來源', numeric: false, disablePadding: true},
  { id: 'detail',label: '詳細資料', numeric: false, disablePadding: true},
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
            align={headCell.numeric = 'left'}
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
  table: {
    width: '100%',
    fontFamily: 'Microsoft JhengHei',
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
/*---------------------------------------------*/


export default function RollcallrecordTable() {

  /*------------ STATE ------------*/
  const [rollcallrecord, setRollcallrecord] = React.useState([]);
  const params = useParams();
 
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  
  //const [test, setTest] = React.useState('test');
  
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
  const rollcallrecordList = [ 'rc_starttime', 'present', 'otherwise', 'absent', 'rc_inputsource','rc_id']
  
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`/teacher/rollcall/allRollcall/${params.cs_id}`);
      
      console.log(result.data);
      
      setRollcallrecord(result.data);
    }
    fetchData();
  }, []);
  

  
  // const testFunc = (e, id) => {
  //   console.log(e.target.value);
  //   setTest(e.target.value)
  // }

  return (
    <div className={classes.root}>  
        
        <TableContainer>
          
          <Table
            size='small'
          >
            <EnhancedTableHead
              classes={classes.title}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />

              {/*===== TableBody =====*/}
            <TableBody >
              {stableSort(rollcallrecord, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((rollcallrecord, index) => {
                  return (
                    <TableRow hover >
                      {/* 碰到的時候後面會反灰 */}
                      <TableCell>{index+1}</TableCell>
                  {
                    rollcallrecordList.map( (list, i) =>   i < 5 ? 
                    <TableCell key={i} component="th" scope="row" align="left" padding="none" >
                    {rollcallrecord[list]}
                 </TableCell>:
                 <TableCell key={i} align="left" >
                   <RDTB 
                   id={rollcallrecord['rc_id']} 
                   time={rollcallrecord ['rc_starttime']}
                   resource={rollcallrecord['rc_inputsource']}
                   present={rollcallrecord['present']}
                   absent={rollcallrecord['absent']}
                   otherwise={rollcallrecord['otherwise']}
                   />
                 </TableCell> 
                        )
                  }   
                   </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25]}
          component="div"
          count={rollcallrecord.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </div>
  );
}
