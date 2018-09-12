fs = require('fs');
let prompt = require('prompt-sync')();
var data = fs.readFileSync('/home/bridgeit/ram mohan reddy/node programs/oops/demo.txt', 'utf8');
let re = /[a-zA-Z]/g;
let re1 = /[0-9]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

var name;
var fullName;
var number;

name = prompt('Enter your Name :');

if (name.search(re1) == -1 && name.search(re2) == -1) {

    fullName = prompt('Enter your Full Name :');

    if (fullName.search(re1) == -1 && fullName.search(re2) == -1) {

        number = prompt('Enter Phone Number :');

        if (number.search(re) == -1 && number.search(re2) == -1 && number.length == 10) {

            var currentDate = new Date();

            var date = currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getFullYear();

            data = ((((data.replace(/<<name>>/g, name)).replace(/<<full name>>/g, fullName)).replace(/xxxxxxxxxx/g, number)).replace(/\d-\d-\d/g, date))

            console.log(data);
            process.exit();

        }

        else {
            console.log('Enter Valid Phone Number ..!');
            process.exit();

        }

    }

    else {
        console.log('Enter Valid fullName ..!');
        process.exit();

    }

}

else {
    console.log('Enter Valid Name ..!');
    process.exit();
}






