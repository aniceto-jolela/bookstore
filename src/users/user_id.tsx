import React, { useState } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import { useKeycloak } from "@react-keycloak/web";


const UserId = () => {
  const { keycloak } = useKeycloak();
  const [getName,setName] = useState<string | undefined>('')
    const [getEmail,setEmail] = useState<string | undefined>('')
    const [getFirstName,setFirstName] = useState<string | undefined>('')
    const [getLastName,setLastName] = useState<string | undefined>('')

  if (keycloak.authenticated) {
      keycloak.loadUserProfile().then((info) => {
        setName(info.username)
        setEmail(info.email)
        setFirstName(info.firstName)
        setLastName(info.lastName)
        console.log(info);
      });
  }else{
    console.log("Não authenticated.")
  }

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
                <Link
                  to="/users/user_id/cart"
                  style={{ textDecoration: "none" }}
                >
                  See Carrinho de compra do user
                </Link>
              </Button>
            </Stack>
          </Grid>

          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 440,
                }}
              >
                <Typography variant="h5" gutterBottom component="div">Perfil de usuário </Typography>
                
                <Box sx={{ width: '100%', textAlign:'center' }}>
                  
                <Typography variant="h6" gutterBottom component="div">Usuário : {getName} </Typography>
                <Typography variant="h6" gutterBottom component="div">Nome : {getFirstName} {getLastName}</Typography>
                <Typography variant="h6" gutterBottom component="div">Email :  {getEmail} </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default UserId;
