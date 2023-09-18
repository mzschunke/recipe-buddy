import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import RecipeIngredients from "../RecipeIngredients";
import RecipeInstructions from "../RecipeInstructions";
import styles from "./Modal.module.css";

export default function Modal({ recipe }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Show recipe
      </Button>
      <Dialog open={open} onClose={handleClose} scroll="paper" maxWidth="sm">
        <DialogTitle>{recipe.strMeal}</DialogTitle>
        <DialogContent dividers>
          <RecipeIngredients
            recipe={recipe}
            customStyles={{
              container: styles["custom-container-class"],
              container2: styles["custom-container2-class"],
              title: styles["custom-title-class"],
            }}
          />
          <RecipeInstructions
            recipe={recipe}
            customStyles={{
              container: styles["custom-container-class"],
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
