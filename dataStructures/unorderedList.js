fs = require('fs');
let prompt = require('prompt-sync')();
var data = fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/dataStructures/stringFile.txt','utf8');
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/linkedList.js')
let dataWrite = '';

function unOrderList() {

    data = data.toString().split(' ');

var ll = new utility();



for(let i=0;i<data.length;i++) {
    ll.add(data[i]);
}


dataWrite = ll.printList();

console.log(dataWrite);


let search = prompt('Enter string to search');

//console.log(ll.indexOf(search));

if(ll.indexOf(search) == -1) {

    console.log('String you are searching not found in the file.');

    ll.add(search);

    console.log('String added into the list');

}

else{

    console.log('String found at position :'+ (ll.indexOf(search)+1));

    ll.removeFrom(ll.indexOf(search));

    console.log('String removed from the list');

}

dataWrite = ll.printList();

console.log('Elements in the list are :');

console.log(dataWrite);
//console.log(ll.head)

  fs.writeFileSync('/home/bridgeit/ram mohan reddy/node programs/dataStructures/stringFile.txt', dataWrite)

}

unOrderList();


