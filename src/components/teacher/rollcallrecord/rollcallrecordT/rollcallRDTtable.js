import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {useState,useEffect} from 'react';
import axios from 'axios';


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
    { id: 'absence', numeric: true, disablePadding: false, label: '出/缺席' },
    
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


export default function RollcallRDTable() {

  /*------------ STATE ------------*/
  const [students, setMembers] = useState([]);



  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
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

  const handleChangeDense = event => {//改成密集的
    setDense(event.target.checked);
  };

//  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);


/*=========== Create Table HEAD ===========*/
const studentList = [ 'std_id', 'std_name', 'std_department','tl_type_name']

useEffect(() => {
 async function fetchData() {
     const result = await axios.get(`/rollcall/one/1`);
     
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
            aria-labelledby="tableTitle"
            size='small'
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
               order={order}
               orderBy={orderBy}              
               onRequestSort={handleRequestSort}
            />

            {/*===== TableBody =====*/}
            <TableBody>
              {/* {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) */}
                {students.map((student, index) => (
                    
                  <TableRow hover role="none">
                     {/* 碰到的時候後面會反灰 */}
                  <TableCell>{index+1}</TableCell>
                  {
                  //const labelId = `enhanced-table-checkbox-${index}`;

                    studentList.map( (list, i) =>   i === 0 ? 
                    <TableCell key={i} component="th" scope="row" align="center" padding="none" >
                    {student[list]}
                 </TableCell>:
                 <TableCell key={i} align="left">{student[list]}</TableCell> 
                        )
                  }    
{/*                     
                    
                      <TableCell padding="default"/>

                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.number}</TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.grade}</TableCell>
                      <TableCell align="left">{row.group}</TableCell>
                      <TableCell align="left">{row.detail}</TableCell>
                      
                    </TableRow>
                  
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} /> */}
                </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      {/* </Paper> */}

    </div>
  );
}
