import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemovePlaylistIcon from "@mui/icons-material/PlaylistRemove";
import ShoppingContext from "@/contexts/ShoppingContext";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    margin: 16,
    padding: 16,
  },
});

const ListForm = () => {
  const classes = useStyles();
  const { addProduct, removeAllProducts } = useContext(ShoppingContext);

  const handleSubmit = (event) => {
    // Avoid refreshing after clicking add button (submit)
    event.preventDefault();
    const form = new FormData(event.target);
    const product = form.get("productName");

    if (product.length === 0) return;

    addProduct(product);
    // Clear input after clicking add button (submit)
    event.target.reset();
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper elevation={2} className={classes.root}>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="productName"
          label="Wprowadź produkt"
          variant="outlined"
          sx={{ marginBottom: "16px" }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ marginRight: "16px" }}
          startIcon={<AddShoppingCartIcon />}
        >
          Dodaj
        </Button>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={removeAllProducts}
        startIcon={<RemovePlaylistIcon />}
      >
        Usuń wszystkie
      </Button>
      </form>
      </Paper>
    </Container>
  );
};

export default ListForm;
