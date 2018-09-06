/******************************************************************************
 *  Execution       : 1. default node         cmd> node binarySearch.js 
 *                      
 * 
 *  Purpose         : it is used to search the given string in a file.
 * 
 *  @description    : This will read a file and asks the user to enter a string, by using binary search operation
 *                    it displays the result weather it is found in the file or not.
 * 
 *  @file           : binarySearch.js
 *  @overview       : Gives weather the given string is present in a file or not and if it is displays the position 
 *                    position of the given string.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : String.
 ******************************************************************************/


 /********************************************************************************
  *  Algorithm      : Take a string from the user.
  *                 : Read the required file to search.
  *                 : perform binary search operation to find the given string.
  *                 : Display the string with the position it is present .
  *                 
  ************************************************************************************/
let prompt = require('prompt-sync')();

fs = require('fs')

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');

function file() {

    fs.readFile('/home/bridgeit/ram mohan reddy/node programs/algorithm/file.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      
         data = data.toString().split(',');

         console.log(data);
         
         let find = prompt('Enter element to search ');

let index = [];

for(let i = 0; i < data.length;i++) {
      

    index.push(data[i]);

}

data = data.sort();

 let result = utility.binary(data,find);

 if(result == -1) {
    
    console.log(find + ' not found in given file');
    

}

else {

  console.log(find + ' found in given file'+' in '+(index.indexOf(find)+1) +' position ');
  

}
            
    });
      

}

file();
