// Get current date
var today = new Date();

// Define days of the week
var daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Get the day of the week (0-6)
var dayOfWeek = today.getDay();

export var dayToChoose = daysOfWeek[dayOfWeek]

// Get day, month, and year
export var day = today.getDate();
export var month = today.getMonth() + 1; // Months are zero-indexed, so add 1
var year = today.getFullYear();

// Format the date as "Thursday, December 5, 2023"
// var formattedDate = daysOfWeek[dayOfWeek] + ', ' + getMonthName(month) + ' ' + day + ', ' + year;
export function dayToReturn(day) {
  switch (day) {
    case 1:
    case 21:
    case 31:
      return day + "st";
    case 2:
    case 22:
      return day + "nd";
    case 3:
    case 23:
      return day + "rd";
    default:
      return day + "th";
  }
}

// console.log(day);

// Function to get the month name
export function getMonthName(month) {
  var monthNames = [
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
    "November",
    "December",
  ];
  return monthNames[month - 1];
}

`https://www.thedevotionals.com.ng/rhapsody-of-realities-for-${dayOfWeek}-${dayToReturn(day)}-${getMonthName(month)}-2023`
