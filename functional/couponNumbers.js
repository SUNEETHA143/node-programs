
/******************************************************************************
 *  Execution       :   1. default node         cmd> node 8_couponNumbers.js 
 *                      
 * 
 *  Purpose         : To generate N distinct coupon numbers in given range by taking required coupon
 *                    coupon numbers from user input.
 * 
 *  @description    : Generating distinct coupon numbers in given range .
 * 
 *  @file           : 8_couponNumbers.js 
 *  @overview       : Generates distinct coupon numbers
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : Number of coupon numbers, max_number, min_number
 ******************************************************************************/
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/Utility.js');

var prompt = require('prompt-sync')();

function coupon() {  
  
  var start = prompt('required coupon numbers ');
  var max = prompt('maxium number');
  var min = prompt('minimum number');
 utility.coupon(start,max,min);


}

coupon();



  
