var fs = require('fs');

var obj = JSON.parse(fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/inventoryDetails.json', 'utf8'));

console.log(obj.inventoryDetails[0].name);
