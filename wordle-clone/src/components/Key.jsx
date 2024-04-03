import { useContext } from "react";
import AppContext from "@/context/AppContext";

const Key = ({ value, label, bigKey }) => {
  const { gameData, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameData.gameOver) return;
    switch (value) {
      case "ENTER":
        onEnter();
        break;
      case "DELETE":
        onDelete();
        break;
      default:
        onSelectLetter(value);
        break;
    }
  };
  return (
    <div className="key" id={bigKey ? "big" : ""} onClick={selectLetter}>
      {label}
    </div>
  );
};

export default Key;
