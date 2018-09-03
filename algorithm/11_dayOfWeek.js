let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let month = process.argv[2];
let day = process.argv[3];
let year = process.argv[4];


function dayOfWeek() {

   //let result = utility.dayOfWeek(month,day,year);

   utility.dayOfWeek(month,day,year);

  // console.log(result);
   
    

}

dayOfWeek();