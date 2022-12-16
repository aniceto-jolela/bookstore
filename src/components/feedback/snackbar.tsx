import * as React from 'react';
import Button from '@mui/material/Button';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

function MyApp() {
  const { enqueueSnackbar } = useSnackbar();


  const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('Book adicionado ao carrinho.', { variant });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClickVariant('success')} sx={{height:40}}>Add carrinho</Button>
    </React.Fragment>
  );
}

export default function SnackBar() {
  return (
    <SnackbarProvider maxSnack={15}>
      <MyApp />
    </SnackbarProvider>
  );
}