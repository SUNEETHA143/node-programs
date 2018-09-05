/******************************************************************************
 *  Execution       : 1. default node         cmd> node 13_monthlyPayment.js 
 *                      
 * 
 *  Purpose         : Calculates the monthly amount need to be paid for certain amount of loan.
 * 
 *  @description    : This is used to calculate the monthly amount to be paid for loan taken over certain period and for some interest.
 * 
 *  @file           : 13_monthlyPayment.js
 *  @overview       : Calculates monthly payment.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : principal, years, rate of interest.
 ******************************************************************************/


 /********************************************************************************
  *  Algorithm      : Accept the values for principal, years and rate of interest. 
  *                 : calculate the payment through the given formula.
  *                 : Display the Monthly payment.
  *                 
  ************************************************************************************/

let prompt = require('prompt-sync')();
const utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js'); 
let re1 = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let principal = process.argv[2];
let years = process.argv[3];
let rate = process.argv[4];

function payment() {

utility.monthlyPayment(principal,years,rate);
    
}

payment();