let prompt = require('prompt-sync')();
const utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js'); 
let re1 = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let principal = process.argv[2];
let years = process.argv[3];
let rate = process.argv[4];

function payment() {

utility.monthlyPayment(principal,years,rate);
    
}

payment();