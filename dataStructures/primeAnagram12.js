
let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/2_D_Array.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let prime = [];

let anag = [];

let anagN = [];

function notAnagram() {

    let notAnagram = [];
    
    for (let i = 0; i < prime.length; i++) {

        if (anag.indexOf(prime[i]) == -1) {

            notAnagram.push(prime[i]);
        }    
    }

    return notAnagram;
}


        function removeDuplicates(arr) {

            let unique_array = [];


            for (let i = 0; i < arr.length; i++) {

                if (unique_array.indexOf(arr[i]) == -1) {

                    unique_array.push(arr[i])
                }
            }

            return unique_array;



        }



function primeAnagram() {

    let num1 = prompt(' Enter Number 1: ');
    let num2 = prompt(' Enter Number 2: ');


    if (num1.search(re) == -1 && num2.search(re2) == -1 && num1 >= 0 && num2 > 0 && num1 < 1001 && num2 < 1001) {

        num1 = parseInt(num1);
        num2 = parseInt(num2);

        prime = utility.prime(num1, num2);

        console.log('\n Prime numbers given in the range are : \n');
        console.log(prime);

        let anagram = [];

        for (let i = 0; i < prime.length - 1; i++) {

            for (let j = i + 1; j < prime.length; j++) {

                index1 = prime[i].toString();

                index2 = prime[j].toString();

                let res1 = utility.anagrams(index1, index2);

                if (res1) {
                    anagram.push(prime[i]);
                    anagram.push(prime[j]);

                }
            }
        }

        

        anag = removeDuplicates(anagram);

        anagN = notAnagram();

        console.log('Anagrams are .................');
        
        console.log(anag);
   
        console.log('Not Anagrams are .................');
   
        console.log(anagN);

        let res = [];


        res.push(anag);

        res.push(anagN);
        console.log('\n Prime numbers in the given range which are anagrams and not anagrams are :\n');

        console.log('\n 0 index--- Prime Anagrams \n \n 1 index--- Prime that are not Anagrams\n')
        console.log(res);

    }
}

primeAnagram();
