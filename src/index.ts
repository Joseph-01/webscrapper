import * as cheerio from "cheerio";
import axios from "axios";


// Get current date
var today = new Date();

// Define days of the week
var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Get the day of the week (0-6)
var dayOfWeek = today.getDay();

// Get day, month, and year
var day = today.getDate();
var month = today.getMonth() + 1; // Months are zero-indexed, so add 1
var year = today.getFullYear();

// Function to get the month name
function getMonthName(month) {
  var monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  return monthNames[month - 1];
}

var formattedDate = daysOfWeek[dayOfWeek]
var formattedmonth =  getMonthName(month)
var formattedDay = day;
var formattedYear = year;




const url: string =
  `https://www.thedevotionals.com.ng/rhapsody-of-realities-for-${formattedDate.toLocaleLowerCase()}-${formattedDay}th-${formattedmonth.toLocaleLowerCase()}-2023`;

async function crawler(url) {
  const response = await axios.get(url);
  const html = response.data;
  const $ = cheerio.load(html);
  $("p", html).each(function () {
    const tes = $(this).text();
    console.log(tes);
  });
}

crawler(url)
