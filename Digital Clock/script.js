const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateTime(){

let hour = new Date().getHours();
let minutes = new Date().getMinutes();
let seconds = new Date().getSeconds();
let ampm = "Am"

if (hour > 12){
  hour = hour - 12;
  ampm = "PM"
};

hourEl.textContent = hour;
minutesEl.textContent = minutes;
secondsEl.textContent = seconds;
ampmEl.textContent = ampm;

if (hour < 10){
  hourEl.textContent = "0" + hour;
}else{
  hourEl.textContent = hour;
};

// if time is single digit, add "0" else show time

if (seconds < 10){
  secondsEl.textContent = "0" + seconds;
}else{
  secondsEl.textContent = seconds;
};
// minutes
if (minutes < 10){
  minutesEl.textContent = "0" + minutes;
}else{
  minutesEl.textContent = minutes;
};

//console.log(hour + minutes)

//minutes = minutes < 10 ? "0" + minutes : minutes;

// call the updatetime() function every seconds
setTimeout(() =>{ 
  updateTime(); 
}, 1000)

};
updateTime();
