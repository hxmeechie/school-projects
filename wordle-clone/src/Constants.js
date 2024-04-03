import words from "@/assets/words.json";

const NUMBER_OF_ROWS = 6;
const NUMBER_OF_COLUMNS = 5;

const GAME_BOARD = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const INITIAL_GAME_DATA = {
  board: GAME_BOARD,
  currentAttempt: {
    attempt: 0,
    letter: 0,
  },
  possibleWords: words,
  disabledLetters: [],
  gameOver: false,
  guessedWord: false,
  showUnknownWordToast: false,
};

export { INITIAL_GAME_DATA, GAME_BOARD, NUMBER_OF_ROWS, NUMBER_OF_COLUMNS };
