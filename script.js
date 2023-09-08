const currentDay = document.querySelector("[data-testid=currentDayOfTheWeek]");
const currentUTCTime = document.querySelector("[data-testid=currentUTCTime]");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function setTime() {
  const day = new Date().getDay();
 const utcTime = new Date().getUTCMilliseconds()

  currentDay.innerHTML = `${days[day - 1]}`;
  currentUTCTime.innerHTML = `${utcTime} ms`;
}

setTime();
