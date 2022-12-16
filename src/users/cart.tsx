import React from "react";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import DataTable from "../components/table/data-table";
import Stack from '@mui/material/Stack';



const Cart = () => {
  return (
    <>
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
    >
      <Toolbar />
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 500,
              }}
            >
              <Typography variant="h5" marginBottom={2}>Carrinho de compras </Typography>
              <Stack direction="row" spacing={2} marginBottom={2}>
              <Button variant="outlined" color="secondary" size="small">
                  Reduzir
                </Button>
                <Button variant="outlined" color="info" size="small">
                  Adicionar
                </Button>
                <Button variant="outlined" color="error" size="small">
                  Remover
                </Button>
              </Stack>
              
              <DataTable/>
            </Paper>
          </Grid>
          {/* Recent Deposits */}
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Typography variant="h5" marginBottom={2}>total de </Typography>
              
              <Typography variant="h6" fontSize={14}>produtos : <Typography fontSize={14} component="span" color="#ae2929" > 1286 </Typography>  </Typography>
              <Typography variant="h6" fontSize={14}>Itens : <Typography fontSize={14} component="span" color="#ae2929" > 86 </Typography> </Typography>
              <Typography variant="h6" fontSize={14}>Preços : <Typography fontSize={14} component="span" color="#ae2929" > 63286 </Typography> </Typography>
            
              <Button color="secondary" sx={{marginTop:5}}>
                <Link
                  to="/checkout/user_id"
                  style={{ textDecoration: "none" }}
                >
                  Checkout
                </Link>
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
  );
};

export default Cart;
