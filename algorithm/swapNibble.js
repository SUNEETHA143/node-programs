/******************************************************************************
 *  Execution       : 1. default node         cmd> node 16_swapNibble.js 
 *                      
 * 
 *  Purpose         : Swaps two nibbles of binary number and finds the resultant number is power of
 *                    2 or not.
 *                    
 * 
 *  @description    : It accepts a Decimal number and Converts the given Decimal number to Binary format, swaps the nibbles,
 *                    converts the binary number to decimal number and finds weather the decimal 
 *                    number is power of 2.
 * 
 *  @file           : 16_swapNibble.js
 *  @overview       : Conversion from decimal to binary numbe and swapping two nibbles.
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

function toSwap() {

    let integer = prompt('enter a number') 

    if(integer.search(re)==-1 && integer.search(re2)==-1 && integer > 15 && integer <= 255 ) {

        let binary = utility.toBinary(integer);

        console.log(binary);

        let swap = 0;

        if(binary.length == 8) {

            swap = utility.toSwap(binary);

        }

        else if(binary.length == 7){

            binary = (0+binary);

            swap = utility.toSwap(binary);

        }

        else if(binary.length == 6){

            binary = (0+binary);
            binary = (0+binary);

            swap = utility.toSwap(binary);

        }

        else if(binary.length == 5){

            binary = (0+binary);
            binary = (0+binary);
            binary = (0+binary);

            swap = utility.toSwap(binary);

        }

        else {

            swap = utility.toSwap(binary);

        }
       
        console.log('After swapping resultant number = '+swap);

        let power = utility.isPower(swap);

        if(power){
            console.log(swap+' is power of 2');
            
        } 

        else {
            console.log(swap+' is not a power of 2');
            
        }
        
        
    }

}

toSwap();