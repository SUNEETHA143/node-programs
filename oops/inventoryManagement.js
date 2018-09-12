var fs = require('fs');
var prompt = require('prompt-sync')();
var obj = JSON.parse(fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/inventory.json', 'utf8'));

var res = [];
class Stocks {

    constructor(name, shares, price) {
        this.name = name;
        this.shares = shares;
        this.price = price;
    }

}

function inventory() {

    console.log('Stocks list present in .Json file are : ')

    for (let key in obj) {

        //console.log(key);
        res.push(obj[key]);

        console.log(obj[key]);

        // console.log('\n==> The value for ' + (obj[key].name) + ' Shares = ' + (obj[key].shares) * (obj[key].price) + ' ₹'+'\n');

    }

    let choice = prompt('Enter : 1 for Adding stock to Json file (or) 2 for Removing stock in Json File')

    if (choice == 1) {
        var count = prompt('Enter number of Stocks to be added :');

        for (let i = 0; i < count; i++) {

            var name = prompt('Enter Company name :');

            var shares = prompt('Enter no of Shares :');

            var price = prompt('Enter share price :');

            var stocks = new Stocks(name, shares, price);

            res.push(stocks);

        }

    }

    else if (choice == 2) {
        var erase = prompt('Enter Stock name to be removed :');
        var temp = -1;
        for (let key in res) {

            if (res[key].name == erase) {

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

        if (res[key].name != {}) {

            res2.push(res[key])
        }


    }


    for (let key in res2) {


        console.log(res2[key]);

        console.log('\n==> The value for ' + (res2[key].name) + ' Shares = ' + (res2[key].shares) * (res2[key].price) + ' ₹' + '\n');

    }



    var json = JSON.stringify(res2);


    fs.writeFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/inventory.json', json, 'utf8');

}

inventory();