function TheleanDate() {
  var now = new Date(...arguments);
  var year = (now.getFullYear() - 1327);
  var start = new Date(now.getFullYear(), 0, 0);
  var diff = (now - start) + (start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000;
  var dayInMilliseconds = 1000 * 60 * 60 * 24; 
  var gdoy = Math.floor( diff / dayInMilliseconds);
  var isLeapYear = !((year % 4) && (year % 100) || !(year % 400));
  
  // Next two lines are for testing
  // gdoy = 172;
  // isLeapYear = true;
  
  // Increment the year if necessary
  var turnOfTheYear = isLeapYear ? 172 : 171;
  if (gdoy > turnOfTheYear) {
    year += 1;
  }
  
  // Determine the month
  var monthBase = Math.floor(gdoy / 30);
  var month = monthBase > 5 ? monthBase - 5 : monthBase + 7;
  
  // Determine day of the month
  var day;
  if (gdoy < 167) {
    day = gdoy % 30 + 14;
  } else if (gdoy > 171) {
    day = gdoy % 30 + 9;
  } else {
    month = 0;
    day = gdoy - 166;
  }
  
  // If is leap year, decrement the days of the new year,
  // and handle case for Thrennum's Chase (leap day)
  if (isLeapYear && gdoy > 171) {
    if (gdoy === 172) {
      month = '--';
      day = 'tc';
    } else {
      day -= 1;
    }
  }
  
  // Increment the month if the day is over 30,
  // decrement the month if the day is 0 (from leap year)
  if (day > 30) {
    day = day - 30;
    month += 1;
    if (month === 13) {
      month = 1;
    }
  } else if (day === 0) {
    day = 30;
    month -= 1;
  }
  
  this.year = year;
  this.month = month;
  this.day = day;
}

TheleanDate.prototype.getFullDateString = function() {
  if (this.day === 'tc') {
    return `Thrennum's Chase, Year ${this.year}`;
  }
  
  daysOfTheWeek = [
    'Estahan',
    'Rehan',
    'Thelehan',
    'Middhan',
    'Ledhan'
  ];
  
  weeksOfTheMonth = [
    'First',
    'Second',
    'Third',
    'Fourth',
    'Fifth',
    'Sixth'
  ];
  
  monthNames = [
    'Dawn\'s Edge',
    'Bailiea\'s Dawn',
    'Star of the Morning',
    'Seed\'s Rise',
    'Dance of Etia',
    'Water\'s Rise',
    'Vostiar\'s Renewal',
    'The Warming Night',
    'Kalmor\'s Bright Mist',
    'Song of Ithera',
    'Water\'s Fall',
    'Star of the Evening',
    'Thrennum\'s Journey',
  ];
  
  var dayOfTheWeek = daysOfTheWeek[this.day % 5];
  var weekOfTheMonth = weeksOfTheMonth[Math.ceil(this.day / 5) - 1];
  var monthName = monthNames[this.month];
  
  var dateString = `${dayOfTheWeek} of ${monthName}, Year ${this.year}`;
  if (this.month > 0) {
    dateString = `${weekOfTheMonth} ${dateString}`;
  }
  
  return `The ${dateString}`;
}

// Uncomment below to test
// var test = new TheleanDate;
// console.log(test.getFullDateString());

// --- README --- //

/*

  TheleanDate is similar to Date in that it is a class.
  To utilize it, you must instantiate it with the keyword 'new'.
  
    ex: var td = new TheleanDate;
    ex: var td = new TheleanDate();
  
  You can also pass arguments to TheleanDate like you can with Date.
  
    ex: var td = new TheleanDate(1996, 4, 2);
    ex: var td = new TheleanDate('April 2 1996');

  TheleanDate has the properties 'year', 'month', and 'day'.
  These can be used to access the Thelean date in digit format.
  (Following the example below would log the Thelean year);

    ex: 
      var td = newTheleanDate;
      console.log(td.year)

  TheleanDate also has the method getFullDateString.
  This can be used to render a formal string of the date.
  (Following the example below would log:
  'The Second Ledhan of Bailiea's Dawn, Year 692')

    ex:
      var td = new TheleanDate(2018, 5, 29);
      console.log(td.getFullDateString);
*/
