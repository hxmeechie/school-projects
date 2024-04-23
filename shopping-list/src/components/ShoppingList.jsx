import React, { useContext } from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ShoppingContext from "@/contexts/ShoppingContext";

const useStyles = makeStyles({
  container: {
    padding: 16,
  },
});

const ShoppingList = ({ todoList, setTitle, setItem, setEdit, deleteItem }) => {
  const classes = useStyles();
  const { shoppingList, addProduct, editProduct, removeProduct } =
    useContext(ShoppingContext);

  return (
    <Container className={classes.container} maxWidth="md">
      <List>
        {shoppingList.map((product, index) => {
          return (
            <ListItemButton key={index}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>

              <ListItemText primary={product} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => editProduct(index, "NEPTYK WRT (https://youtu.be/xdQ3YGi8USM)")}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeProduct(index)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItemButton>
          );
        })}
      </List>
    </Container>
  );
};

export default ShoppingList;
