let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function toBinary() {

    let integer = prompt('enter a number') 

    if(integer.search(re)==-1 && integer.search(re2)==-1 && integer >=0 && integer < 2147483648) {

        //let binary = utility.toBinary(integer);

        let binary = utility.toBinary(integer);

        console.log(binary);
        
    }

}

toBinary();