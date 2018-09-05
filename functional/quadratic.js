
 /******************************************************************************
 *  Execution       :   1. default node         cmd> node 15_quadratic.js 
 *                      
 * 
 *  Purpose         : To find roots of given Quadratic equation.
 * 
 *  @description    : It dispays two roots of given quadratic equation.
 * 
 *  @file           : 15_quadratic.js.js
 *  @overview       : Finding roots of given quadratic equation.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : A, B, C
 ******************************************************************************/
var prompt = require('prompt');
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/Utility.js');


function quadratic() {  
    prompt.start();
  prompt.get(['a','b','c'], function (err, result) {
   
    let num1 = result.a;
    let num2 = result.b;
    let num3 = result.c;
    
   utility.quadratic(num1,num2,num3);

  });
}

quadratic();