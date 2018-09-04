let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function toSwap() {

    let integer = prompt('enter a number') 

    if(integer.search(re)==-1 && integer.search(re2)==-1 && integer > 15 && integer <= 255 ) {

        let binary = utility.toBinary(integer);

        console.log(binary);

        let swap = 0;

        if(binary.length == 8) {

            swap = utility.toSwap(binary);

        }

        else if(binary.length == 7){

            binary = (0+binary);

            swap = utility.toSwap(binary);

        }

        else if(binary.length == 6){

            binary = (0+binary);
            binary = (0+binary);

            swap = utility.toSwap(binary);

        }

        else if(binary.length == 5){

            binary = (0+binary);
            binary = (0+binary);
            binary = (0+binary);

            swap = utility.toSwap(binary);

        }

        else {

            swap = utility.toSwap(binary);

        }
       
        console.log('After swapping resultant number = '+swap);

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