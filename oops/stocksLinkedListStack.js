var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/stocksLinkedList.js');
var utility1 = require('/home/bridgeit/ram mohan reddy/node programs/utility/stack.js');
var ll = new utility();
var stack = new utility1();
class Trancsation {

    purchase(count) {

        for (let index = 0; index < count; index++) {
            console.log()
            var name = prompt('Enter Company name :');
            console.log()
            var shares = prompt('Enter no of Shares to buy :');
            console.log()
            var price = prompt('Enter price at which stock need to purchase :');

            let user = {

                company: name,
                shares: shares,
                price: price
            };

            console.log('\nSuccessfully...!! purchased the stock');

            ll.add(user);

            let user1 = {

                company: name,
                action: 'purchased new stock'
            };
            
            stack.push(user1);
        }
    }

    sell(count) {

        for (let index = 0; index < count; index++) {

            console.log()
            var erase = prompt('Enter Stock name to be sold :');

            var res = ll.indexOf(erase);

            if (res != -1) {

                ll.removeFrom(res);

                console.log('\nSuccessfully your stock sold...!');
                
                let user1 = {

                    company: erase,
                    action: 'sold existing stock'
                };
    
                stack.push(user1);
            }

            else {
                console.log('\nStock not found in your list');
                
            }
        }
    }
    stockList() {

        console.log('\nStocks in the List are : ');
        
        if(ll.size != 0)
        ll.printList()

        else
        console.log('List is Empty..!');
        

    }

    transaction() {

        console.log('\nTransactions done in this session are : \n');
        

        for (var i = stack.items.length; i > 0; i--)
           console.log(stack.items[i-1]);
             
        
    }
}

function main() {

    var trans = new Trancsation();
    
    while (1) {

        console.log();
        var choice = parseInt(prompt('Enter 1 to exit : 2 to Purchase stock : 3 to sell stock : 4 to view Transactions : '))

        switch (choice) {
            case 2: console.log();
            var count = prompt('Enter no of stocks to be purchased : ');

                trans.purchase(count);

                trans.stockList();


                break;

            case 3: console.log()
            var count = prompt('Enter no of stocks to be sold : ');

                trans.sell(count);

                trans.stockList();


                break;

                case 4: 
                trans.transaction();


                break;

            case 1:

                process.exit();

            default:
                break;
        }
    }
}

main();

