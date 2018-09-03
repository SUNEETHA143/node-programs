let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function toSwap() {

    let integer = prompt('enter a number') 

    if(integer.search(re)==-1 && integer.search(re2)==-1 && integer >=0 && integer < 2147483648) {

        let binary = utility.toBinary(integer);

        console.log(binary);

        let swap = utility.toSwap(integer);

       
        console.log(swap);

        let power = utility.isPower(swap);

        if(power){
            console.log(swap+' is power of 2');
            
        } 

        else {
            console.log(swap+' is not a power of 2');
            
        }
        
        
    }

}

toSwap();