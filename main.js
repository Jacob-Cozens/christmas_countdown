var daysEl = document.getElementById("days");
var hoursEl = document.getElementById("hours");
var minutesEl = document.getElementById("minutes");
var secondsEl = document.getElementById("seconds");

function countdownTimer() {
  const countDownDate = new Date("12/25/2024").getTime();

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    daysEl.innerText = formatNumber(Math.floor(distance / day));
    hoursEl.innerText = formatNumber(Math.floor((distance % day) / hour));
    minutesEl.innerText = formatNumber(Math.floor((distance % hour) / minute));
    secondsEl.innerText = formatNumber(
      Math.floor((distance % minute) / second)
    );

    if (distance < 0) {
      document.getElementById("headline").innerText = "Merry Christmas!";
      document.getElementById("countdown").style.display = "none";

      clearInterval(interval);
    }
  }, 1000);
}

function formatNumber(number) {
  if (number < 10) {
    return "0" + number;
  }

  return number;
}

countdownTimer();

document.getElementById("myButton").addEventListener("click", function () {
  window.open("https://github.com/jacob-cozens", "_blank");
});

document.getElementById("myButton2").addEventListener("click", function () {
  window.open("https://github.com/jacob-cozens", "_blank");
});

const playButton = document.getElementById("play-button");
const audio = document.getElementById("audio");

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.textContent = "Click to pause music";
  } else {
    audio.pause();
    playButton.textContent = "Click here to set the mood";
  }
});

audio.addEventListener("ended", () => {
  playButton.textContent = "Again?";
});
