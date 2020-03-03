import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
  { id: 'time', label: '時間', minWidth: 150 },
  { id: 'number', label: '學號', minWidth: 100, align: 'left', },
  {
    id: 'name',label: '姓名', minWidth: 50, align: 'left',
    format: value => value.toLocaleString(),
  },
  {
    id: 'kind',label: '假別', minWidth: 50, align: 'left',
    format: value => value.toLocaleString(),
  },
  {
    id: 'reason',
    label: '事由', minWidth: 100, align: 'left',
    format: value => value.toLocaleString(),
  },
  {
    id: 'proof',
    label: '證明', minWidth: 100, align: 'left',
    format: value => value.toFixed(2),
  },
  {
    id: 'pass',
    label: '審核', minWidth: 100, align: 'left',
    format: value => value.toFixed(2),
  },
];

function createData(time, number,name,kind,reason,proof,pass) {
  return { time, number,name,kind,reason,proof,pass };
}

const rows = [
  createData('2019.11.05 11:05', 2, 5, 8, '計分','人臉點名'),
  createData('2019.11.12 11:12', 5, 5, 5, '不計分','QR code點名'),
  createData('2019.11.19 11:19', 8, 2, 5, '計分','藍牙點名'),
  createData('2019.11.26 11:26', 7, 5, 3, '計分','手動點名'),
  createData('2019.12.03 12:03', 9, 1, 5, '不計分','人臉點名'),
  createData('2019.12.10 12:10', 7, 5, 3, '計分','手動點名'),
  createData('2019.12.17 12:17', 7, 3, 5, '不計分','人臉點名'),
  createData('2019.12 24 12:24', 8, 5, 2, '不計分','QR code點名'),
  createData('2020.01.01 01:00', 4, 6, 5, '計分','藍牙點名'),
  createData('2020.01.08 01:08', 7, 3, 5, '計分','人臉點名'),
  createData('2020.01.15 01:15', 9, 1, 5, '計分','藍牙點名'),
  createData('2020.01.22 01:22', 3, 5, 7, '不計分','手動點名'),
];


/*----------------------------------------------*/
const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});
/*---------------------------------------------*/



export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader size="small" aria-label="sticky table"> 
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
