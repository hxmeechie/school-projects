import React from "react";
import useLocalStorage from "use-local-storage-state";
import makeStyles from "@mui/styles/makeStyles";
import Box from "@mui/material/Box";
import Form from "@/components/Form";
import ShoppingList from "@/components/ShoppingList";
import ShoppingContext from "@/contexts/ShoppingContext";

const useStyles = makeStyles({
  root: {
    textAlign: "center",
    height: "100%",
  },
});

const App = () => {
  const classes = useStyles();
  const [shoppingList, setShoppingList] = useLocalStorage("products", {
    defaultValue: [],
  });

  const addProduct = (product) => {
    setShoppingList([...shoppingList, product]);
  };

  const editProduct = (productIndex, newProductName) => {
    const updatedList = shoppingList.with(productIndex, newProductName);

    setShoppingList(updatedList);
  };

  const removeProduct = (productIndex) => {
    const filteredList = shoppingList.filter(
      (_, index) => index !== productIndex
    );

    setShoppingList(filteredList);
  };

  return (
    <ShoppingContext.Provider
      value={{ shoppingList, addProduct, editProduct, removeProduct }}
    >
      <Box className={classes.root}>
        <Form />
        <ShoppingList />
      </Box>
    </ShoppingContext.Provider>
  );
};

export default App;
