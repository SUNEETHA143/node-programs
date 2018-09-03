let prompt = require('prompt-sync')();

fs = require('fs')

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');

function file() {

    fs.readFile('/home/bridgeit/ram mohan reddy/node programs/algorithm/file.txt', 'utf8', function (err,data) {
        if (err) {
          return console.log(err);
        }
        console.log(data);
      
         data = data.toString().split(',');

         console.log(data);
         
         let find = prompt('Enter element to search ');

let index = [];

for(let i = 0; i < data.length;i++) {
      

    index.push(data[i]);

}

data = data.sort();

 let result = utility.binary(data,find);

 if(result == -1) {
    
    console.log(find + ' not found in given file');
    

}

else {

  console.log(find + ' found in given file'+' in '+(index.indexOf(find)+1) +' position ');
  

}
            
    });
      

}

file();
