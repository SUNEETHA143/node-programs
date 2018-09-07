 

let prompt = require('prompt-sync')();

var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/stack.js');

function expression() {

    console.log('Eneter Expression with a space between each number,operator and perenthesis');
    

    let data = prompt('enter expression');

data = data.toString().split(' ');

//console.log(data);

let stack =new  utility();

let count1 = 0;

let count2 = 0;


for(let i=0;i<data.length;i++) {

    switch(data[i]) {

        case '(':  stack.push(data[i]);

                   // count1++;
          
                    break;
      
        case ')':  stack.pop();

                    //count2++;
         
                    break;
      
        default:
         
                    break;
      }
}

console.log(stack.printStack());

//console.log(stack.isEmpty());

if(stack.isEmpty() && count1 == count2) {

    console.log('The given Expression is balanced.');
    
}

else {

    console.log('The given Expression is not balanced.');
}


}

expression();







