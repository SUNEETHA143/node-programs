/******************************************************************************
 *  Execution       : 1. default node         cmd> node 3_PrimePalindromAnagram.js 
 *                      
 * 
 *  Purpose         : To find primemubers with in the range from 0 to 1000 and to display angarams
 *                    and palindroms in prime numbers with in the given range.
 * 
 *  @description    : Accepts range for prime numbers and displays prime numbers, angrams and palindroms.
 * 
 *  @file           : 3_PrimePalindromAnagram.js
 *  @overview       : Gives prime numbers within the rage and displays anagrams and palindroms in prime numbers.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : number1, number2
 ******************************************************************************/


 /********************************************************************************
  *  Algorithm      : Need to accept only positive integer values.
  *                 : To get prime numbers within the range.
  *                 : Passing prime numebrs to anagram function.
  *                 : Passing primenumbers to palindrom function.
  *                 : Display prime numbers, anagrams and palindrom numbers.
  *                  
  ************************************************************************************/
let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram/utility/algorithmUtility.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let prime = [];

function palindrom() {

    let num1 = prompt(' Number 1: ');
    let num2 = prompt(' Number 2: ');


    if(num1.search(re) == -1 && num2.search(re2) == -1 && num1 > 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {
        
         num1 = parseInt(num1);
         num2 = parseInt(num2);

    /************************************************/
    // to get result when number1 less than number2
    /************************************************/
        if(num1 < num2){
            let palin = [];

    /************************************************/  
             prime = utility.checkPrime(num1,num2);

             console.log();
            
             console.log('prime numbers');

             console.log();
             

             console.log(prime);

    /************************************************/
    
    /************************************************/
    //to get palindrom numbers from prime numbers

            for(let i=0; i<prime.length; i++) {

                let temp = utility.palindrom(prime[i]);
    
                if (temp == true && prime[i] > 9) {
                    
                    palin.push(prime[i]);

                }
                
            }

            console.log();
            
            console.log('palindrom numbers');
            console.log();
            console.log(palin);

    /************************************************/

            for(let i=0; i<prime.length-1 ; i++) {

                for(let j=i+1 ; j< prime.length ; j++) {
       
                    index1 = prime[i].toString();
       
                    index2 = prime[j].toString();
           
                    let res1 = utility.anagrams(index1,index2);
           
                    if (res1) {
       
                        console.log();
                        console.log(prime[i] + ' and '+ prime[j] + ' are anagrams');
                    }
                }
            }
          
                 
        }

    /************************************************/
    // to get result when number1 greater than number2
    /************************************************/

        else if(num1 > num2){

            let palin = [];

    /************************************************/

            prime = utility.checkPrime(num2,num1);

            console.log('prime numbers');
            console.log(prime);

    /************************************************/

    /************************************************/

            for(let i=0; i<prime.length; i++) {

                let temp = utility.palindrom(prime[i]);
    
                if (temp == true && prime[i] > 9) {
                    
                    palin.push(prime[i]);

                }
                
            }

            console.log('palindrom numbers');
            console.log(palin);
    
    /************************************************/

    /************************************************/

            for(let i=0; i<prime.length-1 ; i++) {

                for(let j=i+1 ; j< prime.length ; j++) {
       
                    index1 = prime[i].toString();
       
                    index2 = prime[j].toString();
           
                    let res1 = utility.anagrams(index1,index2);
           
                    if (res1) {
       
                        console.log();
                        console.log(prime[i] + ' and '+ prime[j] + ' are anagrams');
                    }
           
       
                }
       
       
            }

       /************************************************/

        }

        else {

            console.log('Given numbers are equal..!!');

        }

    }
    
    else {
            console.log('plz enter valid number');
    } 

}

palindrom();