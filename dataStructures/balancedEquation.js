/******************************************************************************
 *  Execution       : 1. default node         cmd> node balancedEquation.js 
 *                      
 * 
 *  Purpose         : To check the given arithmatic equation is balanced or not.
 * 
 *  @description    :  It takes an arithmatic equation as input and checks given equation is 
 *                     balanced or not, by adding '(' into stack and removing ')' from stack.
 *                    
 * 
 *  @file           : balancedEquation.js
 *  @overview       : prints the given equation is balanced or not.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 06-09-2018
 *  @parameter      : Arithmatic expression.
 ******************************************************************************/

let prompt = require('prompt-sync')();

var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/stack.js');

function expression() {


    let data = prompt('enter expression');

    data = data.toString().split('');

    let stack = new utility();

    let count1 = 0;

    let count2 = 0;

    for (let i = 0; i < data.length; i++) {

        switch (data[i]) {

            case '(': stack.push(data[i]);

                count1++;

                break;

            case ')': stack.pop();

                count2++;

                break;

            default:

                break;
        }
    }

    console.log(stack.printStack());

    if (stack.isEmpty() && count1 == count2) {

        console.log('The given Expression is balanced.');

    }

    else {

        console.log('The given Expression is not balanced.');
    }


}

expression();







