  /******************************************************************************
 *  Execution       :   1. default node         cmd> node 2_flipCoin.js 
 *                      
 * 
 *  Purpose         : To find Percentage of head and tail.
 * 
 *  @description    : It flips the coin for N number of times and displays percentages of Heads and Tails
 * 
 *  @file           : 2_flipCoin.js
 *  @overview       : Filps coin and displays  percnetage of heads and tails.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : flipValue
 ******************************************************************************/

var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/Utility.js');

function flip() {  

  // to get input from user and storing it in variable
  var repeat = prompt('Enter number of times to flip coin :');

  // calling flip function present in utility
  utility.flip(repeat);
    
}

flip();
  