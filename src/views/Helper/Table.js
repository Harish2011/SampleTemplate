import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const source = [
    {
        "EmployeeID": "QUAL 001",
        "FirstName": "Karthik",
        "LastName": "Prakash",
        "Department": "Software",
        "DateOfBirth" : "02-02-2020",
        "Gender" : "Male"
    },
    {
        "EmployeeID": "QUAL 002",
        "FirstName": "Guru",
        "LastName": "Subramaniann",
        "Department": "Software",
        "DateOfBirth" : "02-02-2020",
        "Gender" : "Male"
    },
    {
        "EmployeeID": "QUAL 003",
        "FirstName": "Prem",
        "LastName": "Kumar",
        "Department": "Software",
        "DateOfBirth" : "02-02-2020",
        "Gender" : "Male"
    },
    {
        "EmployeeID": "QUAL 004",
        "FirstName": "Karthik",
        "LastName": "Guru",
        "Department": "Software",
        "DateOfBirth" : "02-02-2020",
        "Gender" : "Male"
    }
]


export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>EmployeeId</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Last</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {source.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">{row.EmployeeID}</TableCell>
              <TableCell align="right">{row.EmployeeID}</TableCell>
              <TableCell align="right">{row.EmployeeID}</TableCell>
              <TableCell align="right">{row.EmployeeID}</TableCell>
              <TableCell align="right">{row.EmployeeID}</TableCell>
              <TableCell align="right">{row.EmployeeID}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export {
    SimpleTable
}