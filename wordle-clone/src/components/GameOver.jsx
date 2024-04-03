import { useContext } from "react";
import { INITIAL_GAME_DATA, GAME_BOARD } from "@/Constants";
import AppContext from "@/context/AppContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Replay from "@mui/icons-material/Replay";

const GameOver = () => {
  const { gameData, setGameData, correctWord, setCorrectWord, getRandomWord } =
    useContext(AppContext);

  const resetGame = () => {
    const randomWord = getRandomWord(gameData.possibleWords);
    setGameData(INITIAL_GAME_DATA);
    setCorrectWord(randomWord);
  };

  return (
    <div>
      <Modal
        open={gameData.gameOver}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box className="gameover-modal">
          <h2 id="parent-modal-title">
            {gameData.guessedWord
              ? "Gratulacje, udało ci się odgadnąć słowo!"
              : `Niestety, nie udało ci się odgadnąć słowa.`}
          </h2>
          <p id="parent-modal-description">
            {gameData.guessedWord
              ? `Odgadnąłeś je za ${gameData.currentAttempt.attempt} razem.`
              : `Zgadywane słowo to: ${correctWord}`}
          </p>
          <Button onClick={resetGame}>
            <Replay />
            &nbsp; Zagraj ponownie
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default GameOver;
