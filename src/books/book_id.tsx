import React from "react";
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import { Typography } from "@mui/material";
import SnackBar from "../components/feedback/snackbar";


const BooksId = () => {
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
          <Grid item xs={12} md={12} lg={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexWrap: "wrap",
                height: 500,
              }}
            >
              
              <Grid item xs={12} md={12} lg={12} >
              <Typography variant="h5">visualização de detalhes</Typography>
              </Grid>
              <Grid item xs={12} md={6} lg={6} sx={{display:"flex",justifyContent:"center",marginBottom:5,marginTop:5}}>
              <Box>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" variant="square" sx={{ width: 100, height: 100,fontSize:70,marginLeft:2 }}/>
              <SnackBar/>
              </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6}>
                <Typography variant="h6">Título : </Typography>
                <Typography variant="h6">rubrica : </Typography>
                <Typography variant="h6">Autor : </Typography>
                <Typography variant="h6">editorial : </Typography>
                <Typography variant="h6">código ISBN : </Typography>
                <Typography variant="h6">ano de publicação : </Typography>
                <Typography variant="h6">preço : </Typography>
                <Typography variant="h6">Descrição do conteúdo : </Typography>
                <Typography variant="h6">Avaliação : </Typography>
              </Grid>

            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
  );
};

export default BooksId;
