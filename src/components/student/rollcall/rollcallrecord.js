import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Apply from './apply';
import {useState,useEffect} from 'react';
import { useParams } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TableSortLabel, Paper} from '@material-ui/core';



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
  { id: 'attend', label: '出席狀況', numeric: true, disablePadding: false, },
  { id: 'from', label: '來源',numeric: true, disablePadding: false,},
  { id: 'from', label: '請假',numeric: true, disablePadding: false,},

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
/*---------------------------------------------*/


export default function Rollcallrecord() {

  /*------------ STATE ------------*/
  const [rollcallrecord, setRollcallrecord] = useState([]);

  const params = useParams();
  const csid = params.cs_id;

  console.log(csid);

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [test, setTest] = React.useState('test');

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
const rollcallrecordList = [ 'rc_starttime','tl_type_name','rc_inputsource','123']

useEffect(() => {
 async function fetchData() {
     const result = await axios.get(`/student/rollcall/personalRecord/${params.cs_id}`);
     
     console.log(result.data);

     setRollcallrecord(result.data);
 }
 fetchData();
}, []);

  return (
    <div className={classes.root}>  
      <Paper>
        <TableContainer>
          
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='small'
          >
            <EnhancedTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {stableSort(rollcallrecord, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((rollcallrecord, index) => {
                    return (
                    <TableRow hover>
                      {/* 碰到的時候後面會反灰 */}
                      <TableCell>{index+1}</TableCell>
                  {
                    rollcallrecordList.map( (list, i) =>   i === 3 && rollcallrecord['tl_type_name']==="缺席" ? 
                    <TableCell height="30" key={i} align="left">
                      <Apply id={rollcallrecord['rc_id']}
                    time={rollcallrecord['rc_starttime']}
                    resource={rollcallrecord['rc_inputsource']}  />
                    </TableCell> 
                    :
                 <TableCell height="60" key={i} component="th" scope="row" align="left" padding="none" >
                    {rollcallrecord[list]}
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
        </Paper>
    </div>
  );
}
