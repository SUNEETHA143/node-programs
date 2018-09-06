/******************************************************************************
 *  Execution       : 1. default node         cmd> node bubbleSort.js 
 *                      
 * 
 *  Purpose         : To sort given integers in an array.
 * 
 *  @description    : This will accept integers in array format and sorting them by using bubble sort algorithm.
 * 
 *  @file           : bubbleSort.js
 *  @overview       : Sorts the given integers in an array.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : Array_Size, integer elements.
 ******************************************************************************/


 /********************************************************************************
  *  Algorithm      : Create an array of user required size.
  *                 : Ask user to enter integer elements into array.
  *                 : perform bubble sort operation to sort the strings in given array.
  *                 : Display the sorted array .
  *                 
  ************************************************************************************/

let prompt = require('prompt-sync')();
const utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js'); 

let re1 = /[a-zA-z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function bubbleSort() {

    let size = prompt('Enter size of array');

        let arr = new Array (size);
    
        for(let i = 0; i < size;i++) {
    
            arr[i] = parseInt(prompt('Eneter element :'));  
    
    
        }
    
        console.log(arr);

        var res = utility.bubble(arr);
    
    console.log(res);
     
 }

bubbleSort();