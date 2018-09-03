let prompt = require('prompt-sync')();
const utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js'); 

let re1 = /[0-9]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function mergeSort() {

    let size = prompt('Enter size of array');

        
    
        let arr = new Array (size);
    
        for(let i = 0; i < size;i++) {
    
            arr[i] = prompt('Eneter string :');  
    
    
        }
    
        console.log(arr);

    let r = arr.length-1;

    let res = utility.sort(arr,0,r);
    
    console.log(res);
     
 }

mergeSort();
