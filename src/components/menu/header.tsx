import * as React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import StoreIcon from "@mui/icons-material/Store";

function Header() {
  return (
    <React.Fragment>
      <Typography
        component="h1"
        variant="h6"
        color="inherit"
        noWrap
        sx={{ flexGrow: 1 }}
      >
        BOOK - STORE
      </Typography>
      <IconButton color="inherit" style={{ cursor: "default" }}>
        <StoreIcon />
      </IconButton>
    </React.Fragment>
  );
}

export default Header;
