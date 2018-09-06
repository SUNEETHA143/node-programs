/******************************************************************************
 *  Execution       : 1. default node         cmd> node 10_vendingMachine.js 
 *                      
 * 
 *  Purpose         : To give minumum change of notes for the given amount.
 * 
 *  @description    : This will accept an integer amount and displays the minmum amount notes
 *                    as a change and displays the totoal number of notes.
 * 
 *  @file           : 10_vendingMachine.js
 *  @overview       : Gives minimum number of notes as a change for the given amount.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : Amount.
 ******************************************************************************/


 /********************************************************************************
  *  Algorithm      : It need to accept an integer value as an amount.
  *                 : Using recursion operation find the minimum number of notes it can get as a change.
  *                 : Display the total number of notes.
  *                 
  *                 
  ************************************************************************************/
let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function change() {

    let integer = prompt('enter an Amount'); 

    if(integer.search(re)==-1 && integer.search(re2)==-1 && integer >=0) {

        utility.change(integer);
    }
    else {
        console.log('please enter valid amount');
        
    }

}

change();