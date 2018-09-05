/******************************************************************************
 *  Execution       : 1. default node         cmd> node 7_insertionSort.js 
 *                      
 * 
 *  Purpose         : To sort given strings in an array.
 * 
 *  @description    : This will accept strings in array format and sorting them by using insertion algorithm.
 * 
 *  @file           : 7_insertionSort.js
 *  @overview       : Sorts the given strings in an array.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : Array_Size, String elements.
 ******************************************************************************/


 /********************************************************************************
  *  Algorithm      : Create an array of user required size.
  *                 : Ask user to enter string elements into array.
  *                 : perform insertion operation to sort the strings in given array.
  *                 : Display the sorted array .
  *                 
  ************************************************************************************/

let prompt = require('prompt-sync')();
const utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js'); 

let re1 = /[0-9]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function insertionSort() {

    let size = prompt('Enter size of array');

        
    
        let arr = new Array (size);
    
        for(let i = 0; i < size;i++) {
    
            arr[i] = prompt('Eneter string :');  
    
    
        }
    
        console.log(arr);

        var res = utility.insertion(arr)
    
    console.log(res);
     
 }

insertionSort();
