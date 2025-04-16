const decimalToBinary = (decimalNumber) => {
  let binaryValue = "";
  let number = decimalNumber;

  if (number === 0) {
    binaryValue = "0";
  } else {
    while (number > 0) {
      binaryValue = (number % 2) + binaryValue;
      number = Math.floor(number / 2);
    }
  }

  return binaryValue;
};

const formatBinaryString = (binaryValue) => {
  let formattedResult = "";
  const length = binaryValue.length;

  for (let i = 0; i < length; i++) {
    formattedResult += binaryValue[i];

    if ((length - i - 1) % 4 === 0 && i !== length - 1) {
      formattedResult += " ";
    }
  }

  return formattedResult;
};

const form = document.getElementById("conversion-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const decimalNumber = parseInt(formData.get("decimal-number"));

  const binaryString = decimalToBinary(decimalNumber);
  const formattedBinaryString = formatBinaryString(binaryString);

  document.getElementById("result").innerHTML =
    formattedBinaryString + "<sub>(2)</sub>";
});
