import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
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

type PropsDesc =  {
  title: string;
  subtitle: string;
  authors?: string;
  publisher?: string;
  isbn10?: string;
  isbn13?: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc?: string;
  price?: string;
  language?: string;
}

const InfoBooksTables=({title,subtitle,price,authors,desc,isbn10,isbn13,language,pages,publisher,rating,year}:PropsDesc)=> {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableBody>
            <StyledTableRow>
              <StyledTableCell align="left">Título</StyledTableCell>
              <StyledTableCell align="left">{title}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell align="left">Subtitulo</StyledTableCell>
              <StyledTableCell align="left">{subtitle}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="left">Autor</StyledTableCell>
              <StyledTableCell align="left">{authors}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="left">editorial</StyledTableCell>
              <StyledTableCell align="left">{publisher}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell align="left">Código ISBN 10</StyledTableCell>
              <StyledTableCell align="left">{isbn10}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="left">Código ISBN 13</StyledTableCell>
              <StyledTableCell align="left">{isbn13}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="left">Língua</StyledTableCell>
              <StyledTableCell align="left">{language}</StyledTableCell>
            </StyledTableRow>

            <StyledTableRow>
              <StyledTableCell align="left">Ano de publicação</StyledTableCell>
              <StyledTableCell align="left">{year}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="left">Preço</StyledTableCell>
              <StyledTableCell align="left">{price}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="left">Páginas</StyledTableCell>
              <StyledTableCell align="left">{rating}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="left">Avaliação</StyledTableCell>
              <StyledTableCell align="left">{pages}</StyledTableCell>
            </StyledTableRow>
            <StyledTableRow>
              <StyledTableCell align="left">Descrição do conteúdo</StyledTableCell>
              <StyledTableCell align="left">{desc}</StyledTableCell>
            </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InfoBooksTables