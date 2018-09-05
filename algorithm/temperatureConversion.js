/******************************************************************************
 *  Execution       : 1. default node         cmd> node 12_temperatureConversion.js 
 *                      
 * 
 *  Purpose         : To convert the given temperature to required format either celsius or Fahrenheit.
 * 
 *  @description    : Converts the given temperature from Fahrenheit to Celsius or Celsius to Fahrenheit .
 * 
 *  @file           : 12_temperatureConversion.js 
 *  @overview       : Temperature conversion.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : Temperature and Type conversion.
 ******************************************************************************/


 /********************************************************************************
  *  Algorithm      : Take temperature and type conversion as input.
  *                 : Using the formula convert the temperature.
  *                 : Display the converted temperature.
  *                 
  ************************************************************************************/

let prompt = require('prompt-sync')();
const utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js'); 
let re1 = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function conversion() {

    let value = prompt('enter Temperature');
    let type = prompt('Enter conversion to perform : Enter c for Celsius or f for Fahrenheit');
    
    if(value.search(re1) == -1 && value.search(re2) == -1 && type == 'c') {

        let res = utility.celsius(value);

        console.log(res + '°C');
        

    }

    else if(value.search(re1) == -1 && value.search(re2) == -1 && type == 'f'){

       let res = utility.fahrenheit(value);

       console.log(res + '°F');

    }

    else {
        
        console.log('Enter proper values to perform type conversion');
        
    }

}

conversion();