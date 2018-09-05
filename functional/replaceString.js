
 /******************************************************************************
 *  Execution       :   1. default node         cmd> node 1_replaceString.js 
 *                      
 * 
 *  Purpose         :  Replaces String Template and Dispalys “Hello <<UserInput>>, How are you?".
 * 
 *  @description    : It accepts only Strings and ignores other Data types
 * 
 *  @file           : 1_replaceString.js
 *  @overview       : repalce module to replace given string in “Hello <<UserInput>>, How are you?".
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : name
 ******************************************************************************/
var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/Utility.js');

function replace(){

        // to get input from user and storing it in variable
        var name = prompt('Enter UserName : '); 
       
        // calling replace function present in utility
        utility.replace(name);
        
}

replace(); 
    