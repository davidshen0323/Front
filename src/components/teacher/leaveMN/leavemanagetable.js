import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
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
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import CheckCircle from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import FilterListIcon from '@material-ui/icons/FilterList';
import Grid from '@material-ui/core/Grid';
import {useState,useEffect} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';



import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
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
  { id: 'time', numeric: true, disablePadding: false, label: '點名時間' },
  { id: 'applytime', numeric: true, disablePadding: false, label: '申請時間' },
  { id: 'number', numeric: true, disablePadding: false, label: '學號' },
  { id: 'name', numeric: true, disablePadding: false, label: '姓名' },
  { id: 'kind', numeric: true, disablePadding: false, label: '假別' },
  { id: 'reason', numeric: true, disablePadding: false, label: '事由' },
  { id: 'pass', numeric: true, disablePadding: false, label: '審核' },
  
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow >
        <TableCell padding='default'/>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric? 'left' : 'right'}
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
          
          {/* <TableCell padding="default">
          <Checkbox color="default"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
         */}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  //numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  //onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  //rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.primary.main,
          backgroundColor: lighten(theme.palette.primary.light, 0.8),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.primary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          請假審核
        </Typography>
      )}

      {numSelected > 0 ? (
        <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
      >
        <Tooltip title="准許">
          <IconButton color="primary" fontSize="large">
            <CheckCircle />
          </IconButton>
        </Tooltip>
        <Tooltip title="不通過">
          <IconButton color="secondary" fontSize="large">
            <CancelIcon />
          </IconButton>
        </Tooltip>
        </Grid>
      ) : (
         <Tooltip title="Filter list">
           <IconButton aria-label="filter list">
             <FilterListIcon />
           </IconButton>
         </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};
/*----------------------------------------*/
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
    color:'primary',
  },
}));
/*-------------------------------------------*/

export default function Leavemanagetable(props) {

  /*------------ STATE ------------*/
  const [leaves, setLeaves] = React.useState([]);

  //const params = useParams();
  // console.log(params);
  // const csid = params.cs_id;
  //console.log(params.cs_id);

  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('number');
  //const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  // const handleSelectAllClick = event => {
  //   if (event.target.checked) {
  //     const newSelecteds = leaves.map(n => n.name);
  //     setSelected(newSelecteds);
  //     return;
  //   }
  //   setSelected([]);
  // };

  // const handleClick = (event, name) => {
  //   const selectedIndex = selected.indexOf(name);
  //   let newSelected = [];

  //   if (selectedIndex === -1) { //-1表示name不存在 
  //     newSelected = newSelected.concat(selected, name);//加入newSelected
  //   } else if (selectedIndex === 0) {//name是第一個(index=0)
  //     newSelected = newSelected.concat(selected.slice(1));//抓第二個(index=1)之後的東西==把第一個刪掉
  //   } else if (selectedIndex === selected.length - 1) {//name是最後一個
  //     newSelected = newSelected.concat(selected.slice(0, -1));//抓從第一個(index=0)到倒數第二個==刪掉最後一個
  //   } else if (selectedIndex > 0) {
  //     newSelected = newSelected.concat(
  //       selected.slice(0, selectedIndex),
  //       selected.slice(selectedIndex + 1),
  //     //刪掉第n個
  //     );
  //   }
  //   setSelected(newSelected);
  // };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // const isSelected = name => selected.indexOf(name) !== -1;


  const handleSubmit = (leave) =>
   {
     console.log('stdid',leave['std_id'])
     console.log('rc_id',leave['rc_id'])
     console.log('state',leave['tl_state'])
        fetch(`/teacher/takeleave/`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              rc_id: leave.rc_id,
              std_id: leave.std_id,
              tl_state: leave.tl_state,
        })
       })
      }
      

  const changeState =(event,id) =>{
    const stuIndex = leaves.findIndex(s=>s.tl_content==id)
    var newlist = [...leaves]
    newlist[stuIndex].tl_state = parseInt(event.target.value)

    setLeaves(newlist)
    handleSubmit(leaves[stuIndex])
    console.log(' newlist[stuIndex]', leaves[stuIndex])
  }

  
  /*=========== Create Table HEAD ===========*/
  const leaveList = [ 'rc_starttime', 'tl_createtime','std_id','std_name','tl_type_name','tl_content','tl_content']

  const csid = props.csid
  
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(`/teacher/takeleave/AllStudent/${csid}/`);
      
      console.log(result.data);
      
      setLeaves(result.data);
    }
    fetchData();
  }, []);

  return (
    <div className={classes.root}>
        {/* <EnhancedTableToolbar numSelected={selected.length} /> */}
        <TableContainer> 
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size='small'
            // aria-label="enhanced table"
          >
           
            <EnhancedTableHead
              classes={classes}
              //numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              //onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              //rowCount={leaves.length}
            />
            <TableBody>
              {stableSort(leaves, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((leave, index) => leave["tl_state"] === 0 ?
                  (
                    <TableRow 
                      hover
                      // onClick={event => handleClick(event, leave.name)}
                      // role="checkbox"
                      // aria-checked={isItemSelected}
                      // tabIndex={-1}
                      // key={leave.name}
                      
                    >
                        <TableCell>
                          {/* {index+1} */}
                        </TableCell>
                  {
                    leaveList.map( (list, i) =>   i < 6 ? 
                    <TableCell key={i} component="th" scope="row" align="left" >
                    {leave[list]}
                 </TableCell>:
                 <TableCell align="left">
                 <FormControl component="fieldset" onChange={(e)=>changeState(e,leave.tl_content)}>
                   <RadioGroup row value={leave.tl_state+''} >
                     <FormControlLabel value="1" control={<Radio color="primary" size="small"/>} label="通過" />
                     <FormControlLabel value="2" control={<Radio color="secondary" size="small"/>} label="未通過" />
                     {/* <FormControlLabel value="0" control={<Radio color="primary" size="small"/>} label="未審核" /> */}
                   </RadioGroup>
                 </FormControl>
                 </TableCell>
                        )
                  }   


                   </TableRow>
                        
                  )
                  :
                  <div></div>
                )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25]}
          component="div"
          count={leaves.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />     
    </div>
  );
}
