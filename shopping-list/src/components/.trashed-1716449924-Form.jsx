import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import ShoppingContext from "@/contexts/ShoppingContext";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    margin: 16,
    padding: 16,
    boxShadow:
      "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)",
  },
});

const ListForm = () => {
  const classes = useStyles();
  const { addProduct } = useContext(ShoppingContext);

  const handleSubmit = (event) => {
    // Avoid refreshing after clicking add button (submit)
    event.preventDefault();
    const form = new FormData(event.target);
    const product = form.get("productName");
    addProduct(product);
    // Clear input after clicking add button (submit)
    event.target.reset();
  };

  return (
    <Container maxWidth="sm" className={classes.root}>
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ marginBottom: "16px" }}
          fullWidth
          name="productName"
          label="Wprowadź produkt"
          variant="outlined"
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          // sx={{ marginRight: "16px" }}
          sx={{ marginBottom: "16px" }}
          startIcon={<AddShoppingCartIcon />}
        >
          Dodaj
        </Button>
      </form>
      <Button
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => }
        startIcon={<AddShoppingCartIcon />}
      >
        Usuń wszystkie
      </Button>
    </Container>
  );
};

export default ListForm;
