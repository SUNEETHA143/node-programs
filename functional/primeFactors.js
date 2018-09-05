 /******************************************************************************
 *  Execution       :   1. default node         cmd> node 6_primeFactors.js 
 *                      
 * 
 *  Purpose         : To find prime factors of a given number.
 * 
 *  @description    : It dispays all possible prime factors of a given number
 * 
 *  @file           : 6_primeFactors.js
 *  @overview       : Prime factors of a given number.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : Number
 ******************************************************************************/
var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/Utility.js');

function primeFactors(){

        // to get input from user and storing it in variable
        var num = prompt('Enter number : '); 

        // calling replace function present in utility
        utility.primeFactors(num);
}

primeFactors(); 