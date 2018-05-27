function getICNDate() {
  var now = new Date();
  var year = (now.getFullYear() + 1792); 
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = (now - start) + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  var dayInMilliseconds = 1000 * 60 * 60 * 24; 
  var gdoy = Math.floor( diff / dayInMilliseconds);

  // Slightly more efficient way to get boolean value for leap year
  var isLeapYear = !((year % 4) && (year % 100) || !(year % 400));
  
  // Next two lines are for testing:
  // gdoy = 1;
  // isLeapYear = false;
  
  // find the month(roughly) based on gdoy
  var month = Math.floor(gdoy / 28) + 1;
  if (month === 14) {
    month = 1;
  }

  // find the day of the month via dividing the gdoy by
  // month length and adding 11 to the remainder
  var day = gdoy % 28 + 11;

  // if the day is greater than 28,
  // subtract 28 from the day and increment the month
  if (day > 28) {
    day = day - 28;
    if (month === 13) {
      month = 0;
    } else {
      month += 1;
    }
  }

  // decrement certain days in month 01 to account
  // for Day Zero and Drift Day
  if (gdoy > 353) {
    day -= 1;
    if (isLeapYear) {
      day -= 1;
    }
  }

  // handle Day Zero and Drift Day
  if (month === 0) {
    if (day === -1) {
      month = '--';
      day = '--';
    } else if (day === 0) {
      month = 0;
    } else {
      month = 1;
    }
  }

  // fashion month and day into two digits if
  // they aren't already
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }

  // and there you have it!
  return `${year}.${month}.${day}`;
}

// uncomment below to test:
// console.log(getICNDate());
