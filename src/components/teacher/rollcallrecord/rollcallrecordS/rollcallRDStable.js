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
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import SimpleTable from './stable';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FaceIcon from '@material-ui/icons/Face';


function createData(time, attend, score, from) {
  return { time, attend, score, from };
}


const rows = [
  createData('2019.11.05 11:05','出席', '計分', '人臉點名'),
  createData('2019.11.12 11:12','缺席', '不計分', 'QR code點名'),
  createData('2019.11.19 11:19','缺席','計分', '藍牙點名'),
  createData('2019.11.26 11:26', '缺席', '計分', '手動點名'),
  createData('2019.12.03 12:03','出席', '不計分', '人臉點名'),
  createData('2019.12.10 12:10','出席', '計分', '手動點名'),
  createData('2019.12.17 12:17','出席', '不計分', '人臉點名'),
  createData('2019.12 24 12:24', '缺席', '不計分', 'QR code點名'),
  createData('2020.01.01 01:00', '缺席', '計分', '藍牙點名'),
  createData('2020.01.08 01:08', '出席', '計分', '人臉點名'),
  createData('2020.01.15 01:15', '缺席', '計分', '藍牙點名'),
  createData('2020.01.22 01:22','出席', '不計分', '手動點名'),
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
  { id: 'time', label: '日期與時間', minWidth: 150, numeric: false, disablePadding: true },
  { id: 'attend', label: '出/缺席', minWidth: 50, numeric: true, disablePadding: false, },
  {
    id: 'score',
    label: '計分設定', minWidth: 100,
    numeric: true, disablePadding: false,
  },
  {
    id: 'from',
    label: '來源', minWidth: 100,
    numeric: true, disablePadding: false,
  },
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


const useToolbarStyles = makeStyles(theme => ({
  root: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(1),
  },
  title: {
    flex: '1 1 100%',
    marginLeft: theme.spacing(9),
    //paddingLeft: theme.spacing(9),
  },
  listItemText : { 
    fontSize:'1.5em',
  }, 
  listItemText2 : { 
    fontSize:'0.8em',
  }, 
  inline: {
    display: 'inline',
    fontSize:18,
  },
}));



/*----------------------------------------------*/
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
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
  container: {
    display: 'flex',
  },
  
}));
/*---------------------------------------------*/


export default function RollcallRDS() {
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

  const testFunc = (e, id) => {
    console.log(e.target.value);
    setTest(e.target.value)
  }

  return (
    <div className={classes.root}>  
    
      {/* <Paper className={classes.paper}> */}
        
        {/* <RollcallRDDp/> */}
        {/* <EnhancedTableToolbar />
        <Divider variant="fullWidth" component="li" /> */}
      
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
                      <TableCell align="left">{row.attend}</TableCell>
                      <TableCell align="left">{row.score}</TableCell>
                      <TableCell align="left">{row.from}</TableCell>

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
      {/* </Paper> */}    
    </div>
  );
}