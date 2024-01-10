// Get current date
var today = new Date();

// Get day, month, and year
export var day = today.getDate();
// Format the date as "Thursday, December 5, 2023"

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
