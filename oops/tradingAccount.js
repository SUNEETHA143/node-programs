var prompt = require('prompt-sync')();

var utility = require('/home/bridgeit/ram mohan reddy/node programs/oops/commercialDataProcessing.js');

var account = new utility();


function choosing() {

    var action = prompt('Enter  1 -> to continue services  or  2 -> to exit :');

            if (action == 1) {

                dataProcessing()     
            }

            else if(action == 2) {

                process.exit();

            }

            else {

                console.log('Invalid choosing :');
                
            }

}

function dataProcessing() {

    
    console.log('\nEneter 1 -> to view ur existing portfolio :');
    console.log('\nEneter 2 -> to view ur net value of all the stocks :');
    console.log('\nEneter 3 -> to purchase stocks :');
    console.log('\nEneter 4 -> to sell stocks :');
    console.log('\nEneter 5 -> to save the changes made in this Session :');
    console.log('\nEneter 6 -> to view report : \n');


    var choice = parseInt(prompt('Enter choice : '));

    switch (choice) {

        case 1: account.portfolio();
        choosing();

            break;

        case 2: account.netValue();
        choosing()
            break;

        case 3: var count = prompt('Enter no of Stocks to Buy :');
            account.purchase(count);
            choosing()
            break;

        case 4: var count = prompt('Enter no of Stocks to Sell :');

            account.sell(count);
            choosing()
            break;
        case 5: account.save();
        choosing()
            break;
        case 6: account.printReport();
        choosing()
            break;

        default:
            break;
    }


}

dataProcessing();