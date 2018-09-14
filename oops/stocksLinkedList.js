var fs = require('fs');
var prompt = require('prompt-sync')();
var obj = JSON.parse(fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/inventory.json', 'utf8'));

var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/stocksLinkedList.js');
var ll = new utility();

class Trancsation {

    purchase(count) {

        var date = new Date();
    
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

       ll.add(user)
    
    }
    }
    
     sell(count) {
    
    
        for (let index = 0; index < count; index++) {
    
        var erase = prompt('Enter Stock name to be sold :');

        var res = ll.indexOf(erase);
          
        console.log(res);

        if(res != -1) {

            ll.removeFrom(res);
        }
        
    
    }
    
    }

    stockList() {

        ll.printList();

    }

}
 

var trans = new Trancsation();

var count = prompt('Enter no of stocks to be purchased : ')
trans.purchase(count);

trans.stockList();

 count = prompt('Enter no of stocks to be sold : ')

trans.sell(count);

trans.stockList();


