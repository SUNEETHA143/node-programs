/******************************************************************************
 *  Execution       : 1. default node         cmd> node hashingFunction.js 
 *                      
 * 
 *  Purpose         : To check the given number weather it is present in file or not.
 * 
 *  @description    : Accepts the data from the file and performs the required operation, if number
 *                    number present in file delete the number or else added into file.
 *                    
 *                                         
 * 
 *  @file           : hashingFunction.js 
 *  @overview       : Checks the given Number present in file or not and performs required operation.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 06-09-2018
 *  @parameter      : Number.
 ******************************************************************************/

fs = require('fs');
let prompt = require('prompt-sync')();
var data1 = fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/dataStructures/hashNumeric.txt', 'utf-8');
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/linkedList.js')
var re1 = /[a-zA-Z]/g;
var re2 = /[!@#$%^&*().<>+-/*"'`~]/g;
let dataWrite = ''

function hashing() {

    data1 = data1.toString().split(' ');

    var data = [];

    for (let i = 0; i < data1.length; i++) {
        if (data1[i] != '') {

            data.push(data1[i]);

        }
    }

    data = data.sort();

    console.log('\n Data present in file are :');

    console.log('\n' + data + '\n');

    var find = prompt('Eneter a Number to search :');

    if (find.search(re1) == -1 && find.search(re2) == -1) {
        if (data.indexOf(find) == -1) {

            console.log('\nGiven element not found in the file ');

            data.push(find);

        }

        else {

            console.log('\nGiven element found in the file at ' + (data.indexOf(find) + 1) + ' position');

            data.splice((data.indexOf(find)), 1);

            console.log('\nElement removed From the file ');

        }

        let result = [];

        console.log('\nTotal numbers present in the file are : ' + data.length);

        const map1 = data.map(x => x % (data.length + 1));

        for (let i = 0; i <= data.length; i++) {

            let str = '';
            var ll = new utility();
            str = str + 'remainder' + ' [ ' + i + ' ]';
            for (let j = 0; j <= data.length; j++) {

                if (map1[j] == i) {

                    str = str + ' -> ' + data[j];

                }

            }

            ll.add(str);

            result.push(ll.printList());

        }

        console.log(result);

        for (let i = 0; i < data.length; i++) {

            dataWrite = dataWrite + ' ' + data[i];
        }

        fs.writeFileSync('/home/bridgeit/ram mohan reddy/node programs/dataStructures/hashNumeric.txt', dataWrite, 'utf-8');

        console.log('\n Data added into destination file ');
    }
    else {
        console.log('\nEnter valid integer ..!');

    }
}

hashing();