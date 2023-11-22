const timeUnits = {
  day: 1000 * 60 * 60 * 24,
  hour: 1000 * 60 * 60,
  minute: 1000 * 60,
  second: 1000,
};

const updateCountdown = () => {
  const currentDate = new Date();

  const holidayDate = new Date("06/21/2024 11:00");

  const datesDifference = holidayDate.getTime() - currentDate.getTime();

  if (datesDifference < 0) {
    document.querySelector(".countdown").style.display = "none";
    document.querySelector(".holidayNote").style.display = "block";
    return;
  }

  const days = Math.floor(datesDifference / timeUnits.day);
  const hours = Math.floor(datesDifference / timeUnits.hour) % 24;
  const minutes = Math.floor(datesDifference / timeUnits.minute) % 60;
  const seconds = Math.floor(datesDifference / timeUnits.second) % 60;

  document.getElementById("totalDays").innerText = days;
  document.getElementById("totalHours").innerText = hours;
  document.getElementById("totalMinutes").innerText = minutes;
  document.getElementById("totalSeconds").innerText = seconds;
};

updateCountdown();

setInterval(updateCountdown, 1000);
