import { useContext } from "react";
import AppContext from "@/context/AppContext";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import Slide from "@mui/material/Slide";

const Toast = () => {
  const {
    setGameData,
    gameData: { showUnknownWordToast },
  } = useContext(AppContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setGameData((currentGameData) => ({
      ...currentGameData,
      showUnknownWordToast: false,
    }));
  };

  return (
    <Snackbar
      open={showUnknownWordToast}
      TransitionComponent={Slide}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      autoHideDuration={2500}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity="warning" variant="filled">
        Podane słowo nie zostało odnalezione.
      </Alert>
    </Snackbar>
  );
};

export default Toast;
