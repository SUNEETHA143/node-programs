
/******************************************************************************
 *  Execution       :   1. default node         cmd> node 9_twoDArray.js 
 *                      
 * 
 *  Purpose         : To read in 2D arrays of integers, doubles, or booleans from 
                      standard input and printing them out to standard output.
 * 
 *  @description    : Accepts 2D Array of values.
 * 
 *  @file           : 9_primeFactors.js
 *  @overview       : Creating 2D Array.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : Size
 ******************************************************************************/
var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/ram/utility/Utility.js');

function array() {  
  var row = prompt('enter no of rows ');
 
  
 utility.array(row);


}

array();