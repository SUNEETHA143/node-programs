
/******************************************************************************
 *  Execution       :   1. default node         cmd> node 5_harmonicValue.js 
 *                      
 * 
 *  Purpose         : To find harmonic number of N harmonic value.
 * 
 *  @description    : It dispays harmonic number of given harmonic value
 * 
 *  @file           : 5_harmonicValue.js
 *  @overview       : Gives harmonic number of a given harmonic value.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : harmonicValue
 ******************************************************************************/
var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/ram/utility/Utility.js');

function harmonicValue(){

        // to get input from user and storing it in variable
        var num = prompt('Enter Harmonic Value : '); 

        // calling replace function present in utility
        utility.harmonicValue(num);
}

harmonicValue(); 