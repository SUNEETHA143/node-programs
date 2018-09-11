fs = require('fs');
let prompt = require('prompt-sync')();
var data1 = fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/dataStructures/numbersFile.txt', 'utf-8');
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/linkedList.js')
let dataWrite = ' ';

function orderList() {

    data1 = data1.toString().split(' ');

    var data = [];

    for (let i = 0; i < data1.length; i++) {
        if (data1[i] != '') {

            data.push(data1[i]);

        }
    }

    console.log(data);

    var ll = new utility();

    for (let i = 0; i < data.length; i++) {
        ll.add(parseInt(data[i]));
    }



    dataWrite = ll.printList();


    console.log(dataWrite);

    ll.sortList();



    console.log(ll.printList());


    let number = prompt('Enter number to search :');

    let search = parseInt(number);


    if (ll.indexOf(search) == -1) {

        console.log('\nNumber you are searching not found in the file.');

        ll.sortedInsert(parseInt(search));

        console.log('\nNumber added into the list');
    }

    else {

        console.log('\nNumber found at position :' + (ll.indexOf(search) + 1));

        ll.removeFrom(ll.indexOf(search));

        console.log('\nNumber removed from the list');

    }

    dataWrite = ll.printList();

    console.log('\nElements in the list are :');

    console.log(dataWrite);

    fs.writeFileSync('/home/bridgeit/ram mohan reddy/node programs/dataStructures/numbersFile.txt', dataWrite, 'utf-8');

    console.log('\nFinally data present in list added into destination file ');

    /* fs.writeFile("/home/bridgeit/ram mohan reddy/node programs/dataStructures/numbersFile.txt",dataWrite, function(err) {
         if(err) {
             return console.log(err);
         }
     
         console.log("The file was saved!");
     });*/

}

orderList();


