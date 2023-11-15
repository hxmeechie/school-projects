const fuelPrices = {
  gas: 6.5,
  diesel: 6.15,
  lpg: 2.4,
};

const calculateCost = () => {
  const fuelAmount = document.getElementById("fuelAmount").value;

  if (fuelAmount.length === 0) return;

  const fuelType = document.getElementById("fuelType").value;

  const fuelPrice = fuelPrices[fuelType];
  const totalFuelCost = parseFloat(fuelAmount) * fuelPrice;

  document.getElementById("totalCost").innerText = totalFuelCost.toFixed(2);
};
