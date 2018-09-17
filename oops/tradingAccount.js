var prompt = require('prompt-sync')();

var utility = require('/home/bridgeit/ram mohan reddy/node programs/oops/commercialDataProcessing.js');

var account = new utility();

function dataProcessing() {

    while (1) {

        console.log('\n 1 : to view ur existing portfolio :');
        console.log('\n 2 : to view ur net value of all the stocks :');
        console.log('\n 3 : to purchase stocks :');
        console.log('\n 4 : to sell stocks :');
        console.log('\n 5 : to save the changes made in this Session :');
        console.log('\n 6 : to view report : \n');
        console.log('\n 7 : to Terminate : \n');


        var choice = parseInt(prompt('Enter choice : '));

        switch (choice) {

            case 1: account.portfolio();

                break;

            case 2: account.netValue();

                break;

            case 3: var count = prompt('Enter no of Stocks to Buy :');
                account.purchase(count);

                break;

            case 4: var count = prompt('Enter no of Stocks to Sell :');

                account.sell(count);

                break;
            case 5: account.save();

                break;
            case 6: account.printReport();

                break;

            case 7: process.exit();

            default:
                console.log('Invalid choosing :');
                break;
        }

    }



}

dataProcessing();