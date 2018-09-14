var fs = require('fs');
var prompt = require('prompt-sync')();
var obj = JSON.parse(fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/inventory.json', 'utf8'));

var res = [];
class Stocks {

    constructor(company, shares, price) {
        this.company = company;
        this.shares = shares;
        this.price = price;
    }

}

function inventory() {

    console.log('Stocks list present in .Json file are : ')

    for (let key in obj.Stocks) {

        //console.log(key);
        res.push(obj.Stocks[key]);

        console.log(obj.Stocks[key]);

        // console.log('\n==> The value for ' + (obj[key].name) + ' Shares = ' + (obj[key].shares) * (obj[key].price) + ' ₹'+'\n');

    }

    let choice = prompt('Enter : 1 for Adding stock to Json file (or) 2 for Removing stock in Json File')

    if (choice == 1) {
        var count = prompt('Enter number of Stocks to be added :');

        for (let i = 0; i < count; i++) {

            var company = prompt('Enter Company name :');

            var shares = prompt('Enter no of Shares :');

            var price = prompt('Enter share price :');

            var stocks = new Stocks(company, shares, price);

            res.push(stocks);

        }

    }

    else if (choice == 2) {
        var erase = prompt('Enter Stock name to be removed :');
        var temp = -1;
        for (let key in res) {

            if (res[key].company == erase) {

                temp = key;

            }

        }

        if (temp != -1) {

            delete res[temp];

        }

        else {

            console.log('Sorry...! Stock not present in .Json File ');

        }


    }


    let res2 = [];

    for (let key in res) {

        if (res[key].company != {}) {

            res2.push(res[key])
        }


    }


    for (let key in res2) {


        console.log(res2[key]);

        console.log('\n==> The value for ' + (res2[key].company) + ' Shares = ' + (res2[key].shares) * (res2[key].price) + ' ₹' + '\n');

    }


    let user1 = {  
                
        Stocks: res2,

      };

    var json = JSON.stringify(user1);


    fs.writeFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/inventory.json', json, 'utf8');

}

inventory();