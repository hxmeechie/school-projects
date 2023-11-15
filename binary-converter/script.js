let currentConversion = "binary";

const convertNumber = (value, conversion) => {
  return conversion === "binary" ? parseInt(value).toString(2) : parseInt(value, 2);
};

const changePlaceholderAndConversion = () => {
  const inputSelector = document.querySelector(".inputBox");

  currentConversion = currentConversion === "binary" ? "decimal" : "binary";

  inputSelector.placeholder = currentConversion === "binary" ? "Podaj liczbę dziesiętną" : "Podaj liczbę binarną";
};

const swapConversion = () => {
  const inputSelector = document.querySelector(".inputBox");

  if (inputSelector.value.length === 0) {
    changePlaceholderAndConversion();
    return;
  }

  const resultSelector = document.querySelector(".result");

  const inputValue = inputSelector.value;

  inputSelector.value = convertNumber(inputValue, currentConversion);

  resultSelector.innerText = inputValue;

  changePlaceholderAndConversion();
};

const convert = () => {
  const inputSelector = document.querySelector(".inputBox");

  if (inputSelector.value.length === 0) return;

  const resultSelector = document.querySelector(".result");

  resultSelector.innerText = convertNumber(inputSelector.value, currentConversion);
};
