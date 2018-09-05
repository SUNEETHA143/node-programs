
 /******************************************************************************
 *  Execution       :   1. default node         cmd> node 4_twoPower.js 
 *                      
 * 
 *  Purpose         : It takes a command­line argument N and prints the powers of 2 that are less than or equal to 2^N.
 * 
 *  @description    : It displays powers of 2 that are less than or equal to 2^N.
 * 
 *  @file           : 4_twoPower.js
 *  @overview       : It takes input from commandline argument and prints powers of 2 less than or equal to 2^N.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : number
 ******************************************************************************/
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/Utility.js');

// for command line arguments
var num = process.argv[2];

function twoPower() {

// calling twoPower function present in utility
utility.twoPower(num);

}

twoPower();