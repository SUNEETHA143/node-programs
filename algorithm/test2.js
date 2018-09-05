function CalDayOfWeek(day, month, year) {
    var a = Math.floor((14 - month) / 12);
   var y = year - a;
    var m = month + 12 * a - 2;
    var d = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
    Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
    return d;

   // console.log('..........d'+d);
}
/*var daysofaweek = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday',       
 'Thursday', 'Friday', 'Saturday');
var monthsofayear = new Array('January', 'February', 'March', 'April', 'May', 
  'June','July', 'August', 'September', 'October', 'November', 'December');
function AddNths(day) {
    if (day == 1 || day == 21 || day == 31) return 'st';
    if (day == 2 || day == 22) return 'nd';
    if (day == 3 || day == 23) return 'rd';
    else {
        return 'th';
    }
}*/
/*function DispFullDate(day, month, year) {
    return daysofaweek[CalDayOfWeek(day, month, year)] + ' ' +
      day + AddNths(day) + '  ' + monthsofayear[month - 1] + '  ' + year;
}*/
console.log(CalDayOfWeek(5, 9, 2018));
