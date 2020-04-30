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
import Paper from '@material-ui/core/Paper';




function createData(time, apply,kind,reason,proof,pass) {
  return {time, apply,kind,reason,proof,pass};
}


const rows = [
  createData('2019.11.05 11:05','2020.04.10 11:08' ,'事假', '肚子不舒服'),
  createData('2019.11.12 11:12','2020.04.10 11:08' ,'病假', '肚子不舒服'),
  createData('2019.11.19 11:19','2020.04.10 11:08' ,'病假', '肚子不舒服'),
  createData('2019.11.26 11:26','2020.04.10 11:08' ,'病假', '肚子不舒服'),
  createData('2019.12.03 12:03','2020.04.10 11:08' ,'事假', '肚子不舒服'),
  createData('2019.12.10 12:10','2020.04.10 11:08' ,'事假', '肚子不舒服'),
  createData('2019.12.17 12:17','2020.04.10 11:08' ,'事假', '肚子不舒服'),
  createData('2019.12 24 12:24','2020.04.10 11:08' ,'病假', '肚子不舒服'),
  createData('2020.01.01 01:00','2020.04.10 11:08' ,'事假', '肚子不舒服'),
  createData('2020.01.08 01:08','2020.04.10 11:08' ,'病假', '肚子不舒服'),
  createData('2020.01.15 01:15','2020.04.10 11:08' ,'病假', '肚子不舒服'),
  createData('2020.01.22 01:22','2020.04.10 11:08' ,'事假', '肚子不舒服'),
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
  { id: 'time', label: '點名時間', minWidth: 150, numeric: false, disablePadding: true },
  { id: 'apply', label: '申請時間', minWidth: 50, numeric: true, disablePadding: false, },
  { id: 'kind', numeric: true, disablePadding: false, label: '假別' },
  { id: 'reason', numeric: true, disablePadding: false, label: '事由' },
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
  container: {
    display: 'flex',
  },
}));
/*---------------------------------------------*/


export default function INGTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [checked, setChecked] = React.useState(false);

  const [choose, setChoose] = React.useState();

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

  const handleChange = () => {
    setChecked(pp => !pp);
  };

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  const testFunc = (e, id) => {
    console.log(e.target.value);
    setTest(e.target.value)
  }

  return (
    <div className={classes.root}>  
    
      {/* <Paper className={classes.paper}> */}
        
        {/* <RollcallRDDp/> */}
        
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
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  //const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code} key={labelId}>
                      {/* 碰到的時候後面會反灰 */}

                      <TableCell padding="default" />

                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.time}</TableCell>
                      <TableCell align="left">{row.apply}</TableCell>
                      <TableCell align="left">{row.kind}</TableCell>
                      <TableCell align="left">{row.reason}</TableCell>
                      </TableRow>
                  );
                })}
              
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
    </div>
  );
}
