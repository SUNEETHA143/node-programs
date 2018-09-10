

var utility1 = require('/home/bridgeit/ram mohan reddy/node programs/utility/linkedList.js')
let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/2_D_Array.js');

let utility3 = require('/home/bridgeit/ram mohan reddy/node programs/utility/stack.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let prime = [];

let anag = [];

function main() 
{ 

    let num1 = prompt(' Number 1: ');
    let num2 = prompt(' Number 2: ');


    if(num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {
        
         num1 = parseInt(num1);
         num2 = parseInt(num2);
        
         prime = utility.prime(num1,num2);

         console.log('Prime are .................');
         console.log(prime);

         let anagram = [];
         
    for(let i=0; i<prime.length-1 ; i++) {

        for(let j=i+1 ; j< prime.length ; j++) {

            index1 = prime[i].toString();

            index2 = prime[j].toString();
   
            let res1 = utility.anagrams(index1,index2);
   
            if (res1) {
                anagram.push(prime[i]);
                anagram.push(prime[j]);
            }

        }
    }

    

     anag = removeDuplicates(anagram);

     console.log('Anagrams in the range are :' + anag);
     

    function removeDuplicates(arr){

        let unique_array = [];

        
        for(let i = 0;i < arr.length; i++){

            if(unique_array.indexOf(arr[i]) == -1){

                unique_array.push(arr[i])
            }
        }

        return unique_array;
        
      
         
    }

        }

    
    let llist = new utility1(); 

    for(let i = 0; i < anag.length; i++) {

        llist.add(anag[i]); 

    }

    let res = llist.printList();

    console.log(res);
    
    //console.log("Element at index 1 is "+llist.GetNth(1)); 

    let stack = new utility3();

    for(let i = 0; i < anag.length; i++) {

        let temp = llist.GetNth(i);

        stack.push(temp);
         

    }

    let out = stack.printStack();
    console.log('elements in stack are :'+ out);

    for(let i = anag.length; i > 0 ; i--) {

        console.log(stack.pop());
    }


    


} 

main();