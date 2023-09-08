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
  const utcHour = new Date().getUTCHours();
  const utcHourForTime = utcHour % 12;
  const utcMinute = new Date().getUTCMinutes();

  currentDay.innerHTML = `${days[day - 1]}`;
  currentUTCTime.innerHTML = `${
    utcHourForTime < 10 ? `0${utcHourForTime}` : utcHourForTime
  }:${utcMinute < 10 ? `0${utcMinute}` : utcMinute} ${
    utcHour >= 12 ? "PM" : "AM"
  }`;
}

setTime();
