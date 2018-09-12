var fs = require('fs');
var prompt = require('prompt-sync')();
var obj = JSON.parse(fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/inventory.json', 'utf8'));

class StockAccount {

    constructor(name, shares, price) {
        this.name = name;
        this.shares = shares;
        this.price = price;
    }

    portfolio() {
        console.log('Stocks present in portfolio are : ')

        for (let key in obj) {

            console.log(obj[key]);

        }
    }

    netValue() {

        for (let key in obj) {


          //  console.log(res2[key]);
    
            console.log('\n==> The value for ' + (obj[key].name) + ' Shares = ' + (obj[key].shares) * (obj[key].price) + ' ₹' + '\n');
    
        }
    }

    purchase() {
        
    }



}

var stock = new StockAccount();

stock.portfolio();

stock.netValue();