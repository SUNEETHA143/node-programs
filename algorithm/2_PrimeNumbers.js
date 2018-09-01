/****************************************************************************************
 *  Execution       : 1. default node         cmd> node 2_PrimeNumbers.js 
 *                      
 * 
 *  Purpose         : To find prime numbers in the given range.
 * 
 *  @description    : It accepts only integer values and Displays prime numbers between the given range.
 * 
 *  @file           : 2_PrimeNumbers.js
 *  @overview       : Generates prime numbers with in the given range and not accepts any negitive values.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : Number1, Number2
 *****************************************************************************************/

/*****************************************************************************************
*  Algorithm      : Need to accept only positive integer values.
*                 : Calls the function checkPrime() wit the given values.
*                 : If any number between the given range it pushes into array.
*                 : Dispalying array, that contains prime numbers between the given range.
*                  
******************************************************************************************/


let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram/utility/algorithmUtility.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let prime = [];

function primeNumbers() {

    let num1 = prompt(' Number 1: ');
    let num2 = prompt(' Number 2: ');

    if(num1.search(re) == -1 && num2.search(re2) == -1 && num1 > 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {
        
         num1 = parseInt(num1);
         num2 = parseInt(num2);
        if(num1 < num2){
            
            prime = utility.checkPrime(num1,num2);

            console.log(prime);

        }

        else if(num1 > num2){

            prime = utility.checkPrime(num1,num2);

            console.log(prime);

        }

        else {

            console.log('Given numbers are equal..!!');

        }

    }
    
    else {
            console.log('plz enter valid number');
    } 

}

primeNumbers();