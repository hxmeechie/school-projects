import { useCallback, useEffect, useContext } from "react";
import AppContext from "@/context/AppContext";
import Key from "@/components/Key";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const { gameData, onSelectLetter, onEnter, onDelete } =
    useContext(AppContext);

  const handleKeyboard = useCallback(
    (event) => {
      if (gameData.gameOver) return;

      switch (event.key) {
        case "Enter":
          onEnter();
          break;
        case "Backspace":
          onDelete();
          break;
        default:
          for (const key of [...keys1, ...keys2, ...keys3]) {
            if (event.key.toLowerCase() === key.toLowerCase()) {
              onSelectLetter(key);
            }
          }
      }
    },
    [gameData.currentAttempt]
  );
  useEffect(() => {
    document.addEventListener("keydown", handleKeyboard);

    return () => {
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [handleKeyboard]);

  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">
        {keys1.map((key) => {
          return (
            <Key
              key={key} //
              label={key}
              value={key}
            />
          );
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return (
            <Key
              key={key} //
              label={key}
              value={key}
            />
          );
        })}
      </div>
      <div className="line3">
        <Key label={"Sprawdź"} value={"ENTER"} bigKey />
        {keys3.map((key) => {
          return (
            <Key
              key={key} //
              label={key}
              value={key}
            />
          );
        })}
        <Key label={"Usuń"} value={"DELETE"} bigKey />
      </div>
    </div>
  );
};

export default Keyboard;
