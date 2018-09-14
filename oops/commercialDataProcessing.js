
var fs = require('fs');
var prompt = require('prompt-sync')();
var obj = JSON.parse(fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/inventory.json', 'utf8'));

class StockAccount {

    constructor() {
        
        this.array = [];
        this.res = [];

    }

    portfolio() {
        console.log('Stocks present in portfolio are : ')

        for (let key in obj.Stocks) {

            this.res.push(obj.Stocks[key]);
            console.log(obj.Stocks[key]);

        }
    }

    netValue() {

        for (let key in this.res) {

            console.log('\n==> The value for ' + (this.res[key].company) + ' Shares = ' + (this.res[key].shares) * (this.res[key].price) + ' ₹' + '\n');
    
        }
    }

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

              let user1 = {  
                
                company: name,
                date: 'Stock purchased on '+ date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear(),  // by key "name" store value "John"
                time: 'Stock purchased at '+date.getHours()+' Hours :'+date.getMinutes()+' Minutes:'+ date.getSeconds()+ ' Seconds'       
              };
           
              this.array.push(user1);

              console.log('Successfully...!! purchased the stock');
              
       this.res.push(user);

        

    }
           
    }

    sell(count) {

        var date = new Date();

        for (let index = 0; index < count; index++) {

        var erase = prompt('Enter Stock name to be sold :');
        var temp = -1;
        for (let i = 0 ; i < this.res.length ; i++) {

            if (this.res[i].company == erase) {

                temp = i;

            }

        }

        if (temp != -1) {
           var company = this.res[temp].company;
            delete this.res[temp];

            console.log('Stock sold');

            
              
            this.res = this.res.filter(this.filterByID);

            let user = {  
                
                name: company,
                date: 'Stock sold on '+ date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear(),
                time: 'Stock sold at '+date.getHours()+' Hours :'+date.getMinutes()+' Minutes:'+ date.getSeconds()+ ' Seconds'       
              };
           
              this.array.push(user);
        }

        else {

            console.log('Sorry...! Stock not present in .Json File ');

        }

    }

}

save() {

    let user1 = {  
                
        Stocks: this.res,

      };

    var json = JSON.stringify(user1);

    console.log('Successfully updated in the file...!');
    

    fs.writeFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/inventory.json', json, 'utf8');
}

printReport() {

    console.log('Stocks present in portfolio are : ')

    for (let key in this.res) {

        console.log(this.res[key]);

    }

    for (let key in this.res) {

          console.log('\n==> The value for ' + (this.res[key].company) + ' Shares = ' + (this.res[key].shares) * (this.res[key].price) + ' ₹' + '\n');
  
      }

      console.log('Transactions made in this session are :');
      
      console.log(this.array);
      

}

filterByID(item) {

    if (item.company !== undefined ) {
      return true;
    } 
    invalidEntries++;
    return false; 
  }

}

module.exports = StockAccount;