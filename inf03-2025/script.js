// Prymitywny typ wyliczeniowy
const CoursePrice = {
  React: 3000,
  Javascript: 2000,
};

const calculateInstallmentCost = (event) => {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);

  const city = formData.get("city");
  const installmentCount = parseInt(formData.get("count"));

  let totalCost = 0;

  if (formData.get("react-course")) {
    totalCost += CoursePrice.React;
  }

  if (formData.get("javascript-course")) {
    totalCost += CoursePrice.Javascript;
  }

  const installmentCost = totalCost / installmentCount;

  const resultElement = document.getElementById("result");

  resultElement.textContent = `Kurs odbędzie się w ${city}. Koszt całkowity: ${totalCost} zł. Płacisz ${installmentCount} rat po ${installmentCost} zł`;
};

const formElement = document.getElementById("main-form");

formElement.addEventListener("submit", calculateInstallmentCost);
