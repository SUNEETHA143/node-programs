/******************************************************************************
 *  Execution       : 1. default node         cmd> node primenumbers_2D_Array.js 
 *                      
 * 
 *  Purpose         : To represent the prime numbers in the given range in a 2D Array.
 * 
 *  @description    : Represents prime numbers in the given range in 2D array, one dimension 
 *                    represents the range (0-100,101-200,....) and other prime numbers in that range.
 *                    
 *                                         
 * 
 *  @file           : primenumbers_2D_Array.js 
 *  @overview       : Represent the prime numbers in the given range in a 2D Array.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 06-09-2018
 *  @parameter      : Range.
 ******************************************************************************/

let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/2_D_Array.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;



function prime() {

    let num1 = prompt(' Enter Number 1: ');
    let num2 = prompt(' Enter Number 2: ');


    if (num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        utility.checkPrime(num1, num2);

    }
}

prime();