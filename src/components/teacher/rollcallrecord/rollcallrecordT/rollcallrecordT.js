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
import RDTB from './RdtButton'
import {useState,useEffect} from 'react';
import axios from 'axios';


// function createData(time, attend, pass, absence, score, from) {
//   return { time, attend, pass, absence, score, from };
// }


// const rows = [
//   createData('2019.11.05 11:05', 2, 5, 8, '計分', '人臉點名'),
//   createData('2019.11.12 11:12', 5, 5, 5, '不計分', 'QR code點名'),
//   createData('2019.11.19 11:19', 8, 2, 5, '計分', '藍牙點名'),
//   createData('2019.11.26 11:26', 7, 5, 3, '計分', '手動點名'),
//   createData('2019.12.03 12:03', 9, 1, 5, '不計分', '人臉點名'),
//   createData('2019.12.10 12:10', 7, 5, 3, '計分', '手動點名'),
//   createData('2019.12.17 12:17', 7, 3, 5, '不計分', '人臉點名'),
//   createData('2019.12 24 12:24', 8, 5, 2, '不計分', 'QR code點名'),
//   createData('2020.01.01 01:00', 4, 6, 5, '計分', '藍牙點名'),
//   createData('2020.01.08 01:08', 7, 3, 5, '計分', '人臉點名'),
//   createData('2020.01.15 01:15', 9, 1, 5, '計分', '藍牙點名'),
//   createData('2020.01.22 01:22', 3, 5, 7, '不計分', '手動點名'),
// ];

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
  { id: 'attend', label: '出席人數', numeric: true, disablePadding: false, },
  { id: 'pass', label: '請假人數', numeric: true, disablePadding: false, },
  { id: 'absence', label: '缺席人數',numeric: true, disablePadding: false,},
  { id: 'from', label: '來源',numeric: true, disablePadding: false,},
  { id: 'detail',label: '詳細資料',numeric: true, disablePadding: false,},
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
  paper: {
    width: '100%',
  },
  table: {
    width: '100%',
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
  const [rollcallrecord, setRollcallrecord] = useState([]);



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
const rollcallrecordList = [ 'rc_starttime', 'present', 'absent', 'otherwise',  'rc_inputsource']

useEffect(() => {
 async function fetchData() {
     const result = await axios.get(`/teacher/rollcall/allRollcall/10811000DMG741D7411023900`);
     
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

              {/*===== TableBody =====*/}
            <TableBody>
              {stableSort(rollcallrecord, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((rollcallrecord, index) => {
                  return (
                    <TableRow hover >
                      {/* 碰到的時候後面會反灰 */}
                      <TableCell>{index+1}</TableCell>
                  {
                    rollcallrecordList.map( (list, i) =>   i === 0 ? 
                    <TableCell key={i} component="th" scope="row" align="left" padding="none" >
                    {rollcallrecord[list]}
                 </TableCell>:
                 <TableCell key={i} align="left">{rollcallrecord[list]}</TableCell> 
                        )
                  }   



                      {/* <TableCell padding="default" />

                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.time}</TableCell>
                      <TableCell align="left">{row.attend}</TableCell>
                      <TableCell align="left">{row.pass}</TableCell>
                      <TableCell align="left">{row.absence}</TableCell>
                      <TableCell align="left">{row.score}</TableCell>
                      <TableCell align="left">{row.from}</TableCell> */}
                      <TableCell align="left">
                        {/* <FormControlLabel
                          control={<Switch checked={checked} onChange={handleChange} />}
                        /> */}
                      
                        {/* <IconButton onClick={e => handleChange(e, labelId) }>
                          <AssignmentOutlinedIcon />
                        </IconButton> */}

                        {/* <input type="text" value={test} onChange={e => testFunc(e, labelId)}/> */}
                        <RDTB/>
                      </TableCell>

                    </TableRow>
                  );
                })}
              {/* {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
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
