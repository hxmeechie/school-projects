const panelCosts = {
  laminated: 12,
  vinyl: 14,
  plank: 18,
};

const form = document.getElementById("main-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  const width = parseFloat(formData.get("width"));
  const length = parseFloat(formData.get("length"));
  const panelType = formData.get("panel");
  const resultSelector = document.getElementById("result");

  if (isNaN(width) || isNaN(length)) {
    resultSelector.textContent = "Wprowadź poprawne dane.";
    return;
  }

  const area = width * length;
  const costPerM2 = panelCosts[panelType];
  const totalCost = area * costPerM2;
  resultSelector.textContent = `Pole powierzchni pomieszczenia: ${area} m², koszt montażu ${totalCost} zł`;
});
