fs = require('fs');
let prompt = require('prompt-sync')();
var data = fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/dataStructures/stringFile.txt','utf8');
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/linkedList.js')
let dataWrite = '';

function unOrderList() {

    console.log('\nData present in the file : ' + data);

    data = data.toString().split(' ');
    

var ll = new utility();



for(let i=0;i<data.length;i++) {
    ll.add(data[i]);
}

console.log('\nData added into linked list :');

dataWrite = ll.printList();

console.log('\n'+ dataWrite +'\n');

let search = prompt('Enter string to search :');

//console.log(ll.indexOf(search));

if(ll.indexOf(search) == -1) {

    console.log('\nString you are searching not found in the file.');

    ll.add(search);

    console.log('\nString added into the list');

}

else{

    console.log('\nString found at position :'+ (ll.indexOf(search)+1));

    ll.removeFrom(ll.indexOf(search));

    console.log('\nString removed from the list');

}



dataWrite = ll.printList();


console.log('\nElements in the list are :');


console.log('\n'+ dataWrite);
//console.log(ll.head)

  fs.writeFileSync('/home/bridgeit/ram mohan reddy/node programs/dataStructures/stringFile.txt', dataWrite);

  console.log('\nFinally data present in list added into destination file ');
  

}

unOrderList();


