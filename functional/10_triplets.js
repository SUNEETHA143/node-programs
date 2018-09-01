/******************************************************************************
 *  Execution       :   1. default node         cmd> node 10_triplets.js 
 *                      
 * 
 *  Purpose         : To read in N integers and counts the number of triples that sum to exactly 0.
 * 
 *  @description    : It reads N number of integers and checks the sum of three integers and display all possible 
 *                    distinct triplets.
 * 
 *  @file           : 10_triplets.js
 *  @overview       : to display distinct triplets in given N number of integers.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : Size of array, Elements into array
 ******************************************************************************/
var prompt = require('prompt');
var utility = require('/home/bridgeit/ram/utility/Utility.js');


function sumArray() {  
    prompt.start();
  prompt.get(['size'], function (err, result) {
   
    let row = result.size;
    
    
   utility.sumArray(row);

  });
}

sumArray();