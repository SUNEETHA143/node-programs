
var utility = require('/home/bridgeit/ram/utility/Utility.js');
let count =0;

let initial =0;
let final = 0;

if(count == 0) {
    initial = utility.getTime();
    console.log(initial);
    
    count++
}

if(count == 1) {
    final = utility.getTime();
    console.log(final);
    
}

let elapsed = final -initial ;

console.log(elapsed/1000);


