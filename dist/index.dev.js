"use strict";

var numberHome = document.getElementById("show_number_home");
var numberGuest = document.getElementById("show_number_guest");
var countHome = 0;
var countGuest = 0;
var minutes = 0;
var seconds = 0;
var timer_on = 0;

function AddOneHome() {
  numberHome.innerText = countHome + 1;
  countHome++;

  if (countHome > countGuest) {
    numberHome.style.color = "green";
    numberGuest.style.color = "red";
  }

  if (countHome == countGuest) {
    numberHome.style.color = "red";
    numberGuest.style.color = "red";
  }

  if (countHome < countGuest) {
    numberHome.style.color = "red";
    numberGuest.style.color = "green";
  }
}

function AddTwoHome() {
  numberHome.innerText = countHome + 2;
  countHome += 2;

  if (countHome > countGuest) {
    numberHome.style.color = "green";
    numberGuest.style.color = "red";
  }

  if (countHome == countGuest) {
    numberHome.style.color = "red";
    numberGuest.style.color = "red";
  }

  if (countHome < countGuest) {
    numberHome.style.color = "red";
    numberGuest.style.color = "green";
  }
}

function AddThreeHome() {
  numberHome.innerText = countHome + 3;
  countHome += 3;

  if (countHome > countGuest) {
    numberHome.style.color = "green";
    numberGuest.style.color = "red";
  }

  if (countHome == countGuest) {
    numberHome.style.color = "red";
    numberGuest.style.color = "red";
  }

  if (countHome < countGuest) {
    numberHome.style.color = "red";
    numberGuest.style.color = "green";
  }
}

function AddOneGuest() {
  numberGuest.innerText = countGuest + 1;
  countGuest += 1;

  if (countHome > countGuest) {
    numberHome.style.color = "green";
    numberGuest.style.color = "red";
  }

  if (countHome == countGuest) {
    numberHome.style.color = "red";
    numberGuest.style.color = "red";
  }

  if (countHome < countGuest) {
    numberHome.style.color = "red";
    numberGuest.style.color = "green";
  }
}

function AddTwoGuest() {
  numberGuest.innerText = countGuest + 2;
  countGuest += 2;

  if (countHome > countGuest) {
    numberHome.style.color = "green";
    numberGuest.style.color = "red";
  }

  if (countHome == countGuest) {
    numberHome.style.color = "red";
    numberGuest.style.color = "red";
  }

  if (countHome < countGuest) {
    numberHome.style.color = "red";
    numberGuest.style.color = "green";
  }
}

function AddThreeGuest() {
  numberGuest.innerText = countGuest + 3;
  countGuest += 3;

  if (countHome > countGuest) {
    numberHome.style.color = "green";
    numberGuest.style.color = "red";
  }

  if (countHome == countGuest) {
    numberHome.style.color = "red";
    numberGuest.style.color = "red";
  }

  if (countHome < countGuest) {
    numberHome.style.color = "red";
    numberGuest.style.color = "green";
  }
}

function Reset() {
  var count = 0;
  numberHome.innerText = count;
  numberGuest.innerText = count;
  countHome = 0;
  countGuest = 0;
  minutes = 0;
  seconds = 0;

  if (countHome == countGuest) {
    numberHome.style.color = "red";
    numberGuest.style.color = "red";
  }
} // sets the timers count intervals
// function to start counter


function TimerCountDown() {
  document.getElementById("timeDisplay").innerText = minutes + ":" + seconds;
  seconds++;
  timeout = setTimeout(TimerCountDown, 1000);

  if (seconds == 60) {
    minutes++;
    seconds = 0;
  }

  if (minutes == 45 || minutes == 50) {
    document.getElementById("timeDisplay").innerText = "Half-Time" + " " + minutes + ":" + seconds;
  }

  if (minutes == 50) {
    document.getElementById("timeDisplay").innerText = minutes + ":" + seconds;
  }

  if (minutes == 90) {
    minutes = "--";
    seconds = "--";
    document.getElementById("timeDisplay").innerText = minutes + ":" + seconds;
    clearInterval(interval); //break breakme;
  }
} // function to start counting


function Start() {
  if (!timer_on) {
    timer_on = 1;
    TimerCountDown();
  }
} //  Function that stops the timer


function Stop() {
  clearTimeout(timeout);
  timer_on = 0;
}
//# sourceMappingURL=index.dev.js.map
