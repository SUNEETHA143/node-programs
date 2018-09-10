let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/deQueue.js');

let re = /[0-9]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function removeSpace(array) {

    var newArray = [];
    for (let i = 0; i < array.length; i++) {

        if (array[i] != ' ') {
            newArray.push(array[i]);
        }

    }

    return newArray;

}

function stringPalindrom() {

    var dequeue = new utility();

    let str1 = prompt('Enter String : ');

    let count = 0;


    if (str1.search(re) == -1 && str1.search(re2) == -1) {

        str1 = str1.toUpperCase();


        arr1 = str1.split('');


        arr1 = removeSpace(arr1);
        let string ='';

        for(let i=0;i<arr1.length;i++){

            string = string+arr1[i];

        }

        console.log('\nThe given string is : '+ string);

        for (let i = 0; i < arr1.length; i++) {

            dequeue.addBack(arr1[i])

        }

        let out = dequeue.printDequeue();


        console.log('\nElements in Dequeue are :'+ out);

        for (let i = 0; i < arr1.length; i++) {

            if (dequeue.removeBack() == arr1[i]) {

                count++;

            }

        }

        if (count == arr1.length) {

            console.log('\nThe given string ' + string + ' is palindrom');

        }
        else {
            console.log('\nThe given string ' + string + ' is not palindrom');

        }

    }

}

stringPalindrom();