import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


const columns: GridColDef[] = [
  { field: 'id', headerName: 'Nº', width: 70 },
  { field: 'livro', headerName: 'Livros', width: 350 },
  { field: 'qtd', headerName: 'Qtds',type: 'number', width: 100 },
  {
    field: 'preco',
    headerName: 'Preços',
    type: 'number',
    width: 130,
  },
];

const rows = [
  { id: 1, qtd: 7, livro: 'Jon', preco: 35},
  { id: 2, qtd: 5, livro: 'Cersei', preco: 42},
  { id: 3, qtd: 3, livro: 'Jaime', preco: 45 },
  { id: 4, qtd: 34, livro: 'Arya', preco: 16 },
  { id: 5, qtd: 52, livro: 'Daenerys', preco: null },
  { id: 6, qtd: 4, livro: null, preco: 150 },
  { id: 7, qtd: 35, livro: 'Ferrara', preco: 44 },
  { id: 8, qtd: 8, livro: 'Rossini', preco: 36 },
  { id: 9, qtd: 14, livro: 'Harvey', preco: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}