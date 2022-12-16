import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  n: number,
  livros: string,
  qtds: number,
  precos: number,
) {
  return { n, livros, qtds, precos };
}

const rows = [
  createData(1,'Frozen yoghurt', 159, 6.0),
  createData(2,'Ice cream sandwich', 237, 9.0),
  createData(3,'Eclair', 262, 16.0),
  createData(4,'Cupcake', 305, 3.7),
  createData(5,'Gingerbread', 356,3.9),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">Nº</StyledTableCell>
            <StyledTableCell align="center">Livros </StyledTableCell>
            <StyledTableCell align="right">Qtds</StyledTableCell>
            <StyledTableCell align="right">Preços&nbsp;(kz)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.n}>
              <StyledTableCell component="th" scope="row">
                {row.n}
              </StyledTableCell>
              <StyledTableCell align="center">{row.livros}</StyledTableCell>
              <StyledTableCell align="right">{row.qtds}</StyledTableCell>
              <StyledTableCell align="right">{row.precos}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}