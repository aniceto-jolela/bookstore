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
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { TypesBooks } from "../components/ts/types-books";

const Books = () => {
  const [getNewBooks, setNewBooks] = useState<TypesBooks>();
  const [getSearchBooks, setSearchBooks] = useState<TypesBooks>();
  const [getText, setText] = useState("");

  //New
  useEffect(() => {
    Api.get("/new")
      .then((response) => setNewBooks(response.data.books))
      .catch((err) => {
        console.log("Ops! ocorreu um erro, " + err);
      });
  }, []);

  //Search
  useEffect(() => {
    Api.get("/search/" + `${getText}`)
      .then((response) => setSearchBooks(response.data.books))
      .catch((err) => {
        console.log("Ops! ocorreu um erro, " + err);
      });
  }, [getText]);

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
                      type="text"
                      onKeyUp={(e: any) => {
                        setText(e.target.value);
                      }}
                    />
                  </Box>
                </Grid>

                {getNewBooks === undefined
                  ? ""
                  : getSearchBooks === undefined
                  ? getNewBooks.map((item) => (
                      <Grid key={item.image} item xs={8} md={4} lg={3}>
                        <Link
                          to={"/books/" + `${item.isbn13}`}
                          style={{ textDecoration: "none" }}
                        >
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
                            />
                          </ImageListItem>
                        </Link>
                        <br />
                      </Grid>
                    ))
                  : getSearchBooks.map((item) => (
                      <Grid key={item.image} item xs={8} md={4} lg={3}>
                        <Link
                          to={"/books/" + `${item.isbn13}`}
                          style={{ textDecoration: "none" }}
                        >
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
                            />
                          </ImageListItem>
                        </Link>
                        <br />
                      </Grid>
                    ))}
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper
                sx={{ p: 2, display: "flex", flexDirection: "column" }}
              ></Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Books;
