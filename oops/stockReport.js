/*var prompt = require('prompt-sync')();

class Stocks {

    constructor(name, shares, price) {
        this.name = name;
        this.shares = shares;
        this.price = price;
    }

    value() {
        return this.shares * this.price;
    }

}


function stockReport() {

    var value = [];
    var company = [];
    var netVlaue = 0;

    var number = prompt('Enter total no of Stocks :');

    for (let i = 0; i < number; i++) {

        var name = prompt('Enter Company name :');
        company.push(name);
        var shares = prompt('Enter no of Shares :');

        var price = prompt('Enter share price :');

        let stocks = new Stocks(name, shares, price);
        var amount = stocks.value();

        value.push(amount);

    }

    for (let i = 0; i < number; i++) {

        console.log('value of ' + company[i] + ' shares' + ' = ' + value[i]);

        netVlaue = netVlaue + value[i];

    }

    console.log('Total value of shares = ' + netVlaue);

}

stockReport();*/

var fs = require('fs');

var price = 0;
var total = 0;

var obj = JSON.parse(fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/stocks.json', 'utf8'));
var stocks = obj.Stocks;
function inventoryDetails() {

    console.log('\n                    Details of Stocks in .JSON File \n');

    for (let key in stocks) {

        console.log(stocks[key]);

        console.log('\n==> The value for ' + (stocks[key].company) + ' Shares = ' + (stocks[key].shares) * (stocks[key].price) + ' ₹'+'\n');

        total = total + stocks[key].shares;
        price = price + (stocks[key].price * stocks[key].shares);

        console.log(price);
        
    }



    console.log('\nTotal Shares = '+ total + ' , Total Value in ₹ = '+price);

}

inventoryDetails();








