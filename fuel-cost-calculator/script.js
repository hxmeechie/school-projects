const fuelPrices = {
  gas: 6.5,
  diesel: 6.15,
  lpg: 2.4,
};

const totalCostSelector = document.getElementById("totalCost");

const calculateCost = () => {
  const fuelType = document.getElementById("fuelType").value;
  const fuelAmount = document.getElementById("fuelAmount").value;

  const fuelPrice = fuelPrices[fuelType];
  const totalFuelCost = parseFloat(fuelAmount) * fuelPrice;

  totalCostSelector.innerText = totalFuelCost.toFixed(2);
};
