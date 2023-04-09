//getting the DOm element to interact with and saving them into variable
const monthEl = document.getElementById("month")
const dateEl = document.getElementById("date")
const daysEl = document.getElementById("days-el")

// Array of Months
let months = [
     "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "Novermber",
     "December"
]

//ussing the Js inbuilt Date contructor to get the month, days, year and index and saving them into a variables

let monthInx = new Date().getMonth();
let dayInx = new Date().getDay();
let date = new Date().getDate();
let year = new Date().getFullYear()

//getting the last day of the month
let lastDay = new Date(year, monthInx + 1, 0).getDate()
//getting the first day of the month
let firstDay = new Date(year, monthInx, 1).getDay() - 1

// weekdays Array
let weekDays = [
     "Sunday",
    "Monday",
    "Tuesday",
    "Wednessday",
    "Thursday",
    "Friday",
    "Saturday", 
]

// using .textContent to get the data from Js into our UI
monthEl.textContent = months[monthInx];

dateEl.textContent = weekDays[dayInx] + " " + months[monthInx]+" " + date + " " + year;

//dateEl.textContent = new Date().toDateString();

//rederring the date dynamically into our UI
let days = "";
//using for loop to ileterate each day in a week
for (let i = firstDay; i > 0; i--){
     days += `<div class="empty"></div>`;
};


//using for loop to ileterate each day in a month and redering it to our UI
for ( let i = 1 ; i <= lastDay; i++){
     if (i === new Date().getDate()){
          days += `<div class="today">${i}</div>`;
     } else{
          days += `<div>${i}</div>`;
     }
          //console.log(i)
};
daysEl.innerHTML = days;

// console.log(months[monthInx])
// console.log(days[dayInx])
// console.log(date)
// console.log(year)
// console.log(lastDay)
// console.log(firstDay)

