import * as React from "react";
import { Link } from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import LayersIcon from "@mui/icons-material/Layers";

export default function MainListItems() {
  const [setSelected, getSelected] = React.useState(1);

  function Selected(item: number) {
    getSelected(item);
  }

  return (
    <React.Fragment>
      <Link
        to="/books"
        style={{
          textDecoration: "none",
          color: setSelected == 1 ? "blue" : "inherit",
        }}
        onClick={() => Selected(1)}
      >
        <ListItemButton>
          <ListItemIcon >
            <LayersIcon color={setSelected == 1 ? "info" : "inherit"} />
          </ListItemIcon>
          <ListItemText primary="Books" />
        </ListItemButton>
      </Link>

      <Link
        to="/users"
        style={{
          textDecoration: "none",
          color: setSelected == 2 ? "blue" : "inherit",
        }}
        onClick={() => Selected(2)}
      >
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon color={setSelected == 2 ? "info" : "inherit"} />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItemButton>
      </Link>

      <Link
        to="/checkout"
        style={{
          textDecoration: "none",
          color: setSelected == 3 ? "blue" : "inherit",
        }}
        onClick={() => Selected(3)}
      >
        <ListItemButton>
          <ListItemIcon>
            <ShoppingCartIcon color={setSelected == 3 ? "info" : "inherit"} />
          </ListItemIcon>
          <ListItemText primary="Checkout" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
}
