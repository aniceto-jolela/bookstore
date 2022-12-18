import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Api from "../utils/api";

import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

type typesBooks = [{
  title: string,
  subtitle: string,
  isbn13: string,
  price: string,
  image: string,
  url: string
}]

const Books = () => {
  const [getNewBooks, setNewBooks] = useState<typesBooks>();

  useEffect(() => {
    Api.get("/new")
      .then((response) => setNewBooks(response.data.books))
      .catch((err) => {
        console.log("Ops! ocorreu um erro, " + err);
      });
  }, []);

 
  console.log(getNewBooks)



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
            <Grid item xs={12} md={8} lg={9}>
              <Stack direction="row" spacing={2}>
                <Button color="secondary">
                  <Link to="/books/books_id" style={{ textDecoration: "none" }}>
                    See books
                  </Link>
                </Button>
              </Stack>
            </Grid>

            <Grid item xs={12} md={12} lg={12}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Grid item xs={12} md={6} lg={6}>
                  <Typography variant="h5">Lista de livros</Typography>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                  <Box
                    sx={{
                      width: 400,
                      maxWidth: "100%",
                      marginBottom: "30px",
                    }}
                  >
                    <TextField
                      size="small"
                      fullWidth
                      label="Search..."
                      id="Search"
                    />
                  </Box>
                </Grid>


                {getNewBooks===undefined?'':getNewBooks.map((item) => (
                  <Grid key={item.image} item xs={8} md={4} lg={3}>
                    <ImageListItem sx={{ width: "200px" }}>
                      <img
                        src={`${item.image}?w=248&fit=crop&auto=format`}
                        srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={item.title}
                        loading="lazy"
                      />
                      <ImageListItemBar
                        title={`${item.title} | ${item.price}`}
                        subtitle={`${item.subtitle} | ${item.isbn13}`}
                        
                        actionIcon={
                          <IconButton
                            sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                            aria-label={`info about ${item.title}`}
                          >
                            <InfoIcon />
                          </IconButton>
                        }
                      />
                    </ImageListItem>
                    <br />
                  </Grid>
                ))}
              </Paper>
            </Grid>


           
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
               
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    preco: 2,
    ISBN: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
    preco: 2,
    ISBN: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
    preco: 4,
    ISBN: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    preco: 8,
    ISBN: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    preco: 5,
    ISBN: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
    preco: 9,
    ISBN: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    preco: 5,
    ISBN: 2,
  },
];

export default Books;
