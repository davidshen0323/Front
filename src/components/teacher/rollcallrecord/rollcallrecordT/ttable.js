import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    maxWidth:200,
  }
});

function createData(a, b, c) {
  return { a, b, c };
}

const rows = [createData(4, 2, 1)];

export default function TTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">出席</TableCell>
            <TableCell align="center">缺席</TableCell>
            <TableCell align="center">請假</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow>
              <TableCell component="th" scope="row" align="center">
                {" "}
                {row.a}
              </TableCell>
              <TableCell align="center">{row.b}</TableCell>
              <TableCell align="center">{row.c}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
