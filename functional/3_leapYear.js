 /******************************************************************************
 *  Execution       :   1. default node         cmd> node 3_leapYear.js 
 *                      
 * 
 *  Purpose         : Checks given year is Leap Year or not ?
 * 
 *  @description    : It displays weather the year is LeapYear or not ?
 * 
 *  @file           : 3_leapYear.js
 *  @overview       : It accepts only numeric digits and checks it for lepayear conditions and displays result.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : year
 ******************************************************************************/ 
var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/ram/utility/Utility.js');

function leapYear() {

  var re = /[a-zA-Z]/g;
  var re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

  // to get input from user and storing it in variable
  var year = prompt('Enter Year :');;

  if(year.search(re) == -1 && year.search(re2) == -1) {
  // calling replace function present in utility
  utility.leapYear(year);

  }

  else {

    console.log('plz enter valid year');
  }

 
}

leapYear();