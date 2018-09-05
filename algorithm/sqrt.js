
/******************************************************************************
 *  Execution       : 1. default node         cmd> node 14_sqrt.js 
 *                      
 * 
 *  Purpose         : square root of a non-negative number using Newton's method
 * 
 *  @description    : This is used to find the square root of the given non-negitive number
 *                    using Newton's method.
 * 
 *  @file           : 14_sqrt.js
 *  @overview       : To find square root of a number.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : Number.
 ******************************************************************************/


 /********************************************************************************
  *  Algorithm      : Accept the non-negitive integer. 
  *                 : calculate the square root of number using newton's method.
  *                 : Display the output.
  *                 
  ************************************************************************************/
let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function sqrt() {

    let integer = prompt('enter a number') 

    if(integer.search(re)==-1 && integer.search(re2)==-1 && integer >=0) {

        utility.sqrt(integer);
    }

}

sqrt();