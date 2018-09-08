fs = require('fs');
let prompt = require('prompt-sync')();
var data = fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/dataStructures/numbersFile.txt');
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/linkedList.js')
let dataWrite = ' ';

function orderList() {

    data = data.toString().split(' ');

    data.sort(function(a, b){
        return a-b;
      });

var ll = new utility();

for(let i=0;i<data.length;i++) {
    ll.add(data[i]);
}



dataWrite = ll.printList();


console.log(dataWrite);


let search = prompt('Enter number to search :');

//console.log(ll.indexOf(search));

if(ll.indexOf(search) == -1) {

    console.log('Number you are searching not found in the file.');
    /*let index = prompt('enter the position to add the number');*/
    //ll.insertAt(search,index);
    //ll.add(search);
    console.log('Number added into the list');

    
    

}

else{

    console.log('Number found at position :'+ (ll.indexOf(search)+1));

    ll.removeFrom(ll.indexOf(search));

    console.log('Number removed from the list');

}



dataWrite = ll.printList();

console.log('Elements in the list are :');


console.log(dataWrite);


try {
    fs.appendFileSync('/home/bridgeit/ram mohan reddy/node programs/dataStructures/numbersFile.txt', dataWrite);
    console.log('The "data to append" was appended to file!');
  } catch (err) {
    /* Handle the error*/ 

    console.log('data not copied');
    
  }

}

orderList();


