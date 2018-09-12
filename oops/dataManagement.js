var fs = require('fs');

var obj = JSON.parse(fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/inventoryDetails.json', 'utf8'));

function inventoryDetails() {

    console.log('\n                    Details of items in .JSON File \n');

    for (let key in obj) {

        console.log(key);
        console.log(obj[key]);

    }

    var rice = obj.Rice;
    var weight = 0;
    var price = 0;

    console.log('\n                Value Calculation for RIce items\n');

    for (let key in rice) {

        console.log(rice[key]);
        console.log('\n==> The value for ' + (rice[key].name) + ' = ' + (rice[key].weight) * (rice[key].price) + '\n');
        weight = weight + rice[key].weight;
        price = price + (rice[key].price * rice[key].weight);
    }

    console.log('\nRice : Total weight in kg = '+ weight + ' , Total Value in ₹ = '+price);

    var wheats = obj.Wheats;

     weight = 0;
     price = 0;

    console.log('\n                Value Calculation for Wheats items\n');

    for (let key in wheats) {
     
        console.log(wheats[key]);
        console.log('\n==> The value for ' + (wheats[key].name) + ' = ' + (wheats[key].weight) * (wheats[key].price) + '\n');
        weight = weight + wheats[key].weight;
        price = price + (wheats[key].price * wheats[key].weight);
    }
    console.log('\nWheats : Total weight in kg = '+ weight + ' , Total Value in ₹ = '+price);
    var pulses = obj.Pulses;

    weight = 0;
     price = 0;

    console.log('\n                Value Calculation for Pulses items\n');

    for (let key in pulses) {

        console.log(pulses[key]);
        console.log('\n==> The value for ' + (pulses[key].name) + ' = ' + (pulses[key].weight) * (pulses[key].price) + '\n');
        weight = weight + pulses[key].weight;
        price = price + (pulses[key].price * pulses[key].weight);
    }

    console.log('\nPulses : Total weight in kg = '+ weight + ' , Total Value in ₹ = '+price);
}

inventoryDetails();



