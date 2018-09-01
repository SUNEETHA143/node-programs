let prompt = require('prompt-sync')();

var utility1 = require('/home/bridgeit/ram/utility/Utility.js');

let utility = require('/home/bridgeit/ram/utility/algorithmUtility.js');


let re = /[a-zA-Z]/g;
let re1 = /[0-9]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;


function timeElapsed() {

    let size = prompt('Enter size of array');

    let index = [];

        let createArray = new Array (size);

        for(let i = 0; i < size;i++) {

           createArray[i] = prompt('Eneter element :');  

           index.push(createArray[i]);

        }

        console.log(createArray);

    let value = prompt('Enter element to search ');


    // to check the value is a number
    if(value.search(re) == -1 && value.search(re2) == -1) {

       // value = parseInt(value);


        /*for(let i = 0; i < size;i++) {

            createArray[i] = parseInt(createArray[i]);  
 
         }*/
         
         createArray = createArray.sort(function (a, b) {  return a - b;  });

         console.log(createArray);
        

       
       let result = utility.binary(createArray,value);


       if(result == -1) {

        console.log(value + ' not found in given array');

        
        

       }

       else {

           console.log(value + ' found in given array'+' in '+(index.indexOf(value)+1) +' position ');

        
       }


    }

    /******************************************************************** */

    else if (value.search(re1) == -1 && value.search(re2) == -1) {

        createArray = createArray.sort();

        let result = utility.binary(createArray,value);

       if(result == -1) {

        console.log(value + 'not found in given array');

       }

       else {
           
           console.log(value + ' found in given array'+' in '+(index.indexOf(value)+1) +' position ');
     
       }
        
        
            
    }
    
}

timeElapsed();