let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function sqrt() {

    let integer = prompt('enter a number') 

    if(integer.search(re)==-1 && integer.search(re2)==-1 && integer >=0) {

        utility.sqrt(integer);
    }

}

sqrt();