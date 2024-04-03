import { useState, useReducer, useEffect, createContext } from "react";
import { INITIAL_GAME_DATA, GAME_BOARD } from "@/Constants";
import AppContext from "@/context/AppContext";
import Board from "@/components/Board";
import Keyboard from "@/components/Keyboard";
import GameOver from "@/components/GameOver";
import Toast from "@/components/Toast";
import "@/App.css";

const getRandomWord = (words) => {
  const randomWord = words[Math.floor(Math.random() * words.length)];

  return randomWord;
};

const App = () => {
  const [gameData, setGameData] = useState(INITIAL_GAME_DATA);
  const [correctWord, setCorrectWord] = useState(
    getRandomWord(gameData.possibleWords)
  );

  const onEnter = () => {
    if (gameData.currentAttempt.letter !== 5) return;

    const currentWord = gameData.board[gameData.currentAttempt.attempt]
      .join("")
      .toLowerCase();

    if (gameData.possibleWords.includes(currentWord)) {
      setGameData((currentGameData) => ({
        ...currentGameData,
        currentAttempt: {
          attempt: gameData.currentAttempt.attempt + 1,
          letter: 0,
        },
      }));
    } else {
      setGameData((currentGameData) => ({
        ...currentGameData,
        showUnknownWordToast: true,
      }));
      return;
    }

    if (currentWord === correctWord) {
      setGameData((currentGameData) => ({
        ...currentGameData,
        gameOver: true,
        guessedWord: true,
      }));
      return;
    }

    if (gameData.currentAttempt.attempt === 5) {
      setGameData((currentGameData) => ({
        ...currentGameData,
        gameOver: true,
        guessedWord: false,
      }));
      return;
    }
  };

  const onDelete = () => {
    if (gameData.currentAttempt.letter === 0) return;

    const updatedBoard = gameData.board.map((rows, attemptIndex) => {
      if (gameData.currentAttempt.attempt === attemptIndex) {
        return rows.with(gameData.currentAttempt.letter - 1, "");
      }
      return rows;
    });

    setGameData({
      ...gameData,
      board: updatedBoard,
      currentAttempt: {
        attempt: gameData.currentAttempt.attempt,
        letter: gameData.currentAttempt.letter - 1,
      },
    });
  };

  const onSelectLetter = (key) => {
    if (gameData.currentAttempt.letter > 4) return;

    const updatedBoard = gameData.board.map((rows, attemptIndex) => {
      if (gameData.currentAttempt.attempt === attemptIndex) {
        return rows.with(gameData.currentAttempt.letter, key);
      }
      return rows;
    });

    setGameData({
      ...gameData,
      board: updatedBoard,
      currentAttempt: {
        attempt: gameData.currentAttempt.attempt,
        letter: gameData.currentAttempt.letter + 1,
      },
    });
  };

  return (
    <div className="game">
      <AppContext.Provider
        value={{
          gameData,
          setGameData,
          correctWord,
          setCorrectWord,
          getRandomWord,
          onSelectLetter,
          onDelete,
          onEnter,
        }}
      >
        <Toast />
        <Board />
        {gameData.gameOver ? <GameOver /> : <Keyboard />}
      </AppContext.Provider>
    </div>
  );
};

export default App;
