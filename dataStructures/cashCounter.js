/******************************************************************************
 *  Execution       : 1. default node         cmd> node cashCounter.js 
 *                      
 * 
 *  Purpose         : To maintain the order of visitors near the cash counter.
 * 
 *  @description    : This accepts the name of the customers and stores in Queue and executes
 *                    operation on FIFO based Scenario.                     
 * 
 *  @file           : cashCounter.js 
 *  @overview       : maintains tha queue near cash counter.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 06-09-2018
 *  @parameter      : Number of custoners and Names of customers.
 ******************************************************************************/
let prompt = require('prompt-sync')();

var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/queue.js');

class Account {

    constructor() {
        this.name = '';
        this.accountNo = null;
        this.balance = null;
    }

    add(accountNo, name, amount) {

        this.balance = 5000;

        this.name = name;

        this.accountNo = accountNo;

        this.balance = this.balance + amount;

        console.log(name + ' accountNo : ' + this.accountNo + ' Amount successfully added to your account');

        console.log(name + ' Balance in your account = ' + this.balance);

    }

    withDraw(accountNo, name, amount) {

        this.balance = 5000;

        this.name = name;

        this.accountNo = accountNo;

        this.balance = this.balance - amount;
        console.log(' Thank you..! visit again.');

        console.log(name + ' accountNo : ' + this.accountNo + ' Balance in your account = ' + this.balance);

    }

    checkBalance(accountNo, name) {

        this.balance = 5000;
        console.log(name + ' accountNo : ' + accountNo + ' your balance is = ' + this.balance);

    }

}

// Driver function

function cashCounter() {

    var transaction = new Account();

    var size = prompt('Enter no of customers : ');

    let queue = new utility();

    for (let i = 0; i < size; i++) {

        queue.enqueue(prompt('enter name of customer : '));

    }

    console.log('\nThe persons in queue are : ' + queue.printQueue());

    for (let i = 0; i < size; i++) {

        var current = queue.dequeue();

        var name = current;

        console.log('\nHi..! ' + name);

        var accountNo = prompt('Will you please enter your account number :');

        var action = prompt('Enter action to be performed : 1 for Deposit or 2 for Withdraw or 3 for Check balance ');

        if (action == 1) {

            var amount = prompt('Enter amount to be added :');

            transaction.add(accountNo, name, parseInt(amount));

        }

        else if (action == 2) {

            var amount = prompt('Enter amount to be withdrawn :');

            transaction.withDraw(accountNo, name, parseInt(amount));

        }

        else if (action == 3) {

            transaction.checkBalance(accountNo, name);

        }


    }

}

cashCounter();