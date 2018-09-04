/******************************************************************************
 *  Execution       : 1. default node         cmd> node 5_guessNumber.js 
 *                      
 * 
 *  Purpose         : This guesses number thought by the user in his mind and user need to answer the questions in between.
 * 
 *  @description    : user need to think a number between the number given by the userinput and user need to answer the
 *                    questions correctly, so that the number he thought will be displayed at the end.
 * 
 *  @file           : 5_guessNumber.js
 *  @overview       : Gives the number thought by user in his mind.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : Number.
 ******************************************************************************/


 /********************************************************************************
  *  Algorithm      : Take a number from the user.
  *                 : calculate to which power(n) of is it for 2.
  *                 : perform binary search operation for n times by asking user questions
  *                 : Finally print the resultant number.
  *                 
  ************************************************************************************/

const utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js'); 
let re1 = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let number = process.argv[2];

function guessNumber() {

    //let type = typeof(number);
    //console.log(type);
    
    if(number.search(re1)== -1 && number.search(re2) == -1) {

        utility.guessNumber(number);

    }

    else {
        console.log('Give an integer to guess ur number :');
        
    }
    
}

guessNumber();