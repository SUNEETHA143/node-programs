
/******************************************************************************
 *  Execution       : 1. default node         cmd> node 15_toBinary.js 
 *                      
 * 
 *  Purpose         : Converts the given Decimal number to Binary format.
 * 
 *  @description    : It accepts a Decimal number and converts it to Binary format number.
 * 
 *  @file           : 15_toBinary.js 
 *  @overview       : Conversion from decimal to binary number.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : Number.
 ******************************************************************************/


 /********************************************************************************
  *  Algorithm      : Accept the non-negitive integer and range between 0 to 2147483648. 
  *                 : Find the modulus of the number by dividing with 2 untill the number
  *                   becomes to Zero.
  *                 : Display the output.
  *                 
  ************************************************************************************/


let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function toBinary() {

    let integer = prompt('enter a number') 

    if(integer.search(re)==-1 && integer.search(re2)==-1 && integer >=0 && integer < 2147483648) {

        //let binary = utility.toBinary(integer);

        let binary = utility.toBinary(integer);

        console.log(binary);
        
    }

}

toBinary();