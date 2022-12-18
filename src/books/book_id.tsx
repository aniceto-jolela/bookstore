import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import SnackBar from "../components/feedback/snackbar";
import Api from "../utils/api";
import { TypesInfoBooks } from "../components/ts/types-info-books";
import { useParams } from "react-router-dom";
import InfoBooksTables from "../components/table/info-books-table";

const BooksId = () => {
  const { books_id } = useParams();
  const [getInfoBooks, setInfoBooks] = useState<TypesInfoBooks>();

  useEffect(() => {
    Api.get("/books/" + `${books_id}`)
      .then((response) => setInfoBooks(response.data))
      .catch((err) => {
        console.log("Ops! ocorreu um erro, " + err);
      });
  }, []);

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
                }}
              >
                <Grid item xs={12} md={12} lg={12}>
                  <Typography variant="h5">visualização de detalhes</Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={4}
                  lg={4}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    marginBottom: 5,
                    marginTop: 5,
                  }}
                >
                  <Box>
                    <Avatar
                      alt="Remy Sharp"
                      src={
                        getInfoBooks === undefined ? "/" : getInfoBooks.image
                      }
                      variant="square"
                      sx={{ width: 200, height: 200, fontSize: 70 }}
                    />
                    <SnackBar />
                  </Box>
                </Grid>
                <Grid item xs={12} md={8} lg={8}>
                  {getInfoBooks === undefined ? (
                    "ID não encontrado."
                  ) : (
                    <>
                      <InfoBooksTables
                        title={getInfoBooks.title}
                        subtitle={getInfoBooks.subtitle}
                        price={getInfoBooks.price}
                        authors={getInfoBooks.authors}
                        publisher={getInfoBooks.publisher}
                        isbn10={getInfoBooks.isbn10}
                        isbn13={getInfoBooks.isbn13}
                        language={getInfoBooks.language}
                        year={getInfoBooks.year}
                        rating={getInfoBooks.rating}
                        pages={getInfoBooks.pages}
                        desc={getInfoBooks.desc}
                      />
                    </>
                  )}
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
