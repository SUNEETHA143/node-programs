fs = require('fs');
let prompt = require('prompt-sync')();
var data = fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/dataStructures/numbersFile.txt');
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/linkedList.js')
let dataWrite = '';

function orderList() {


    data = data.toString().split(' ');

    data.sort();

      console.log(data);
      
      

var ll = new utility();



for(let i=0;i<data.length;i++) {
    ll.add(data[i]);
}


dataWrite = ll.printList();

//console.log(dataWrite);


let search = prompt('Enter string to search');

//console.log(ll.indexOf(search));

if(ll.indexOf(search) == -1) {

    ll.add(search);

}

else{

    ll.removeFrom(ll.indexOf(search));

}

dataWrite = ll.printList();

console.log(dataWrite);


try {
    fs.appendFileSync('/home/bridgeit/ram mohan reddy/node programs/algorithm/file2.txt', dataWrite,'utf8');
    console.log('The "data to append" was appended to file!');
  } catch (err) {
    /* Handle the error */

    console.log('data not copied');
    
  }

}

orderList();