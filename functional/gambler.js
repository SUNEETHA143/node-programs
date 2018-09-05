
 /******************************************************************************
 *  Execution       :   1. default node         cmd> node 7_gambler.js 
 *                      
 * 
 *  Purpose         : gambler can play till he broke or reaches his goal.
 * 
 *  @description    :   Simulates a gambler who start with $stake and place fair $1 bets until 
                        he/she goes broke (i.e.has no money) or reach $goal. Keeps track of the number of 
                        times he/she wins and the number of bets he/she makes. Run the experiment N 
                        times, averages the results, and prints them out. 
 * 
 *  @file           : 7_gambler.js
 *  @overview       : Prints number of wins, win percentage and loss percentage.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : Stake, Goal, Number of Times
 ******************************************************************************/

var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/Utility.js');

function gambler(){

        // to get input from user and storing it in variable
        var purse = prompt('Enter Stake Value : '); 
        var target = prompt('Enter Goal Value : '); 
        var play = prompt('Enter Number of times : '); 

        // calling gambler function present in utility
        utility.gambler(purse,target,play);
}

gambler(); 