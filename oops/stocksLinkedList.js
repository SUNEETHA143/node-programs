
var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/stocksLinkedList.js');
var ll = new utility();

class Trancsation {

    purchase(count) {

        for (let index = 0; index < count; index++) {

            var name = prompt('Enter Company name :');
            var shares = prompt('Enter no of Shares to buy :');
            var price = prompt('Enter price at which stock need to purchase :');

            let user = {

                company: name,
                shares: shares,
                price: price
            };

            console.log('Successfully...!! purchased the stock');

            ll.add(user);
        }
    }

    sell(count) {

        for (let index = 0; index < count; index++) {

            var erase = prompt('Enter Stock name to be sold :');

            var res = ll.indexOf(erase);

            if (res != -1) {

                ll.removeFrom(res);
            }
        }
    }
    stockList() {

        ll.printList();

    }
}

function main() {

    var trans = new Trancsation();
    
    while (1) {

        var choice = parseInt(prompt('Enter 1 to exit : 2 to Purchase stock : 3 to sell stock'))

        switch (choice) {
            case 2: var count = prompt('Enter no of stocks to be purchased : ');

                trans.purchase(count);

                trans.stockList();


                break;

            case 3: var count = prompt('Enter no of stocks to be sold : ');

                trans.sell(count);

                trans.stockList();


                break;

            case 1:

                process.exit();

            default:
                break;
        }
    }
}

main();



