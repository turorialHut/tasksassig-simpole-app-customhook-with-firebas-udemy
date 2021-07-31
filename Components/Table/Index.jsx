import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MuiTable from '@material-ui/core/Table';
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
const Table = (props) => {
  const classes = useStyles();
  const tableHeadData = props.tableHead.map((data, index) => (
    <TableCell key={index}>{data}</TableCell>
  ));

  const tableBodyData = props.tableBody.map((data, index) => (
    <TableRow key={index}>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{data.token}</TableCell>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.phone}</TableCell>
      <TableCell>{data.uhid}</TableCell>
      <TableCell>10:10</TableCell>
      <TableCell>Action</TableCell>
    </TableRow>
  ));

  return (
    <TableContainer component={Paper}>
      <MuiTable className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>{tableHeadData}</TableRow>
        </TableHead>
        <TableBody>{tableBodyData}</TableBody>
      </MuiTable>
    </TableContainer>
  );
};

export default Table;
