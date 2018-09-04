
let str = '1100100';

str = (0+str);

console.log(str);


let re = str.length;

function toDecimal(str) {

  let nibble1 = str.slice(0,4);

let nibble2 = str.slice(4);

console.log(nibble1);

console.log(nibble2);

var res = nibble2.concat(nibble1);
console.log(str);
console.log(res);

let c = 0;

let out = 0;

while(res > 0) {
  let rem = res % 10;

  out = out + rem * Math.pow(2,c++);
  
  res = Math.floor(res/10);

  
}

console.log(out);



}

toDecimal(str);


