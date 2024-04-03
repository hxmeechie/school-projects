import { useContext } from "react";
import AppContext from "@/context/AppContext";

const Letter = ({ position, attempt }) => {
  const { gameData, correctWord } = useContext(AppContext);

  const letter = gameData.board[attempt][position].toLowerCase();

  const correct = correctWord.charAt(position) === letter;
  const near = !correct && correctWord.includes(letter);

  const letterState = correct ? "correct" : near ? "present" : "absent";

  const letterId = gameData.currentAttempt.attempt > attempt ? letterState : "";

  return (
    <div className="letter" id={letterId}>
      {letter}
    </div>
  );
};

export default Letter;
