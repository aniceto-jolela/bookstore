import React from "react";
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Toolbar from '@mui/material/Toolbar';



const UserId = () => {
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

      <Grid item xs={12} md={8} lg={9}>
              <Stack direction="row" spacing={2}>
                <Button color="secondary">
                  <Link to="/users/user_id/cart" style={{textDecoration: "none"}}>See Carrinho de compra do user</Link>
                </Button>
              </Stack>
            </Grid>

        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              Esta rota exibirá o perfil do usuário por seu ID
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
              ID user
            </Paper>
          </Grid>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              User 
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
  );
};

export default UserId;
