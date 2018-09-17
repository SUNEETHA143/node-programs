/******************************************************************************
 *  Execution       : 1. default node         cmd> node unorderedList.js 
 *                      
 * 
 *  Purpose         : To search the element present in linked list.
 * 
 *  @description    : It accepts data from the file, stores elements into linked list, performs searching operation
 *                    and rearranges the list.
 * 
 *  @file           : unorderedList.js
 *  @overview       : Implementing unorderd linked list.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 06-09-2018
 *  @parameter      : String
 ******************************************************************************/

fs = require('fs');
let prompt = require('prompt-sync')();
var data1 = fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/dataStructures/stringFile.txt', 'utf8');
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/linkedList.js')

var re1 = /[0-9]/g;
var re2 = /[!@#$%^&*().<>+-/*"'`~]/g;
let dataWrite;

function unOrderList() {

    console.log('\nData present in the file : ' + data1);

    data1 = data1.toString().split(' ');

    var ll = new utility();

    var data = [];


    for (let i = 0; i < data1.length; i++) {
        if (data1[i] != '') {

            data.push(data1[i]);

        }

    }

    for (let i = 0; i < data.length; i++) {
        ll.add(data[i]);
    }

    console.log('\nData added into linked list :');

    dataWrite = ll.printList();

    console.log('\n' + dataWrite + '\n');

    let search = prompt('Enter string to search :');

    if (search.search(re1) == -1 && search.search(re2) == -1) {

        if (ll.indexOf(search) == -1) {

            console.log('\nString you are searching not found in the file.');

            ll.add(search);

            console.log('\nString added into the list');

        }

        else {

            console.log('\nString found at position :' + (ll.indexOf(search) + 1));

            ll.removeFrom(ll.indexOf(search));

            console.log('\nString removed from the list');

        }

        dataWrite = ll.printList();

        console.log('\nElements in the list are :');

        console.log('\n' + dataWrite);

        fs.writeFileSync('/home/bridgeit/ram mohan reddy/node programs/dataStructures/stringFile.txt', dataWrite, 'utf-8');

        console.log('\nFinally data present in list added into destination file ');

    }

    else {

        console.log('\nEnter valid string ..!');

    }
}

unOrderList();


