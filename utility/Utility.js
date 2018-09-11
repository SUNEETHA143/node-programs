var prompt = require('prompt-sync')();
module.exports = {

    replace: function (name) {

        var re = /[0-9]/g;
        var re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

        // condition to check given string length is > 2
        if (name.length > 2 && name.search(re) == -1 && name.search(re2) == -1) {
            // to display in console
            console.log('Hello ' + name + ', How are you?');
        }

        else {
            console.log('plz enter valid string and length > 2'); // to display in console
        }


    },


    twoPower: function (num) {

        // condition to check given power less than 31
        // max safe integer is 2^31-1, or 2147483647.
        if (num < 31) {

            // iterating to find power till the power value
            for (let i = 1; i <= num; i++) {

                // generating power value using Math.pow()
                let res = Math.pow(2, i);

                // to display result in console
                console.log(2 + '^' + i + '=' + res);

            }
        }
        else {
            //to display if given power value greater than 31
            console.log('enter power lesser than 31');

        }
    },



    leapYear: function (year) {

        //conditional statements for checking given year 
        // ensure year is of four digit 
        if (year.length == 4) {
            // checking weather the year if leap year or not
            if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)) {

                // to display in console
                console.log('given ' + year + ' is a leap year');
            }
            else {
                // to display in console
                console.log(year + ' is not a leap year');
            }

        }

        else {
            // to display in console
            console.log('plz enter year having 4 digits');
        }

    },


    flip: function (repeat) {

        // declaring and initializing variables tail and head 
        let tail = 0;
        let head = 0;

        // to flip coin N number of times
        for (let i = 0; i < repeat; i++) {

            // using random function to generate random value between 0 & 1 
            // result storing in a variable
            let random = Math.random(repeat);

            // conditional statement checking weather it is Head or Tail
            if (random < 0.5) {
                // incrementing tail value 
                tail++;
            }
            else {
                // incrementing head value
                head++;
            }
        }

        // to diaplaying result in console
        console.log('head percentage =' + (head / repeat) * 100 + '%');
        console.log('tail percentage =' + (tail / repeat) * 100 + '%');

    },


    harmonicValue: function (num) {

        // declaring and initializing variables product  and sum
        let product = 1;
        let sum = 0;

        // Calculating Denominator
        for (let i = 1; i <= num; i++) {

            product = product * i;
        }

        // Calculating numerator
        for (let j = 1; j <= num; j++) {

            sum = sum + (product / j);
        }

        // diaplaying result in console
        console.log('harmonic number  =' + sum / product + ' for given harmonic value ' + num);
    },



    //prime factorization of a Number
    primeFactors: function (num) {

        // declaring an empty string
        let res = '';

        //iterating loop till the condition fails
        while (num % 2 == 0) {

            // concatinating 2 with string
            res = res + 2 + ' ';

            // dividing number by 2 and reinitializing number
            num = num / 2;

        }

        // iterating loop to divide number with odd numbers > 1
        for (let i = 3; i * i <= num; i = i + 2) {

            while (num % i == 0) {
                // concatinating i with string 
                res = res + i + ' ';

                // dividing number by i and reinitializing number
                num = num / i;

            }

        }

        // checking number greater than 2 
        if (num > 2) {

            // concatinating num with string
            res = res + num + '';

        }

        // diaplaying result in console
        console.log(res);
    },


    gambler: function (purse, target, play) {

        // declaring and initializing variables
        let loss = 0;
        let win = 0;
        let play1 = play;
        // iterating loop till condition fails
        while (purse > 0 && purse < target && play1 > 0) {

            // generating random number between 0 and 1
            if (Math.random() > 0.5) {

                // incrementing stack and win
                purse++;
                win++;
            }
            else {

                // decrementing stack and incrementing loss
                purse--;
                loss++;
            }

            // decrementing number of times need to paly
            play1--;
        }

        // displaying output in console
        console.log('Wins =' + win);

        var percentage1 = (win / play) * 100;

        console.log('win % =' + percentage1);
        console.log('lost =' + loss);
        console.log('loss % =' + (loss / play) * 100);
    },

    distance: function (coordinate_x, coordinate_y) {

        // Declaring and initializing variable length
        let length = 0;

        //calculating length
        length = Math.pow((Math.pow(coordinate_x, 2)) + (Math.pow(coordinate_y, 2)), (1 / 2));

        //Displaying length in console
        console.log('Distance = ' + length);

    },



    coupon: function (start, max, min) {

        const _ = require('lodash');

        // Declaring and initializing variable count
        let count = 0;

        // creating an empty array
        let arr = [];

        let unique_array = [];

        //iterating loop untill count equal to start
        while (count < start) {

            // calling generateNumbers()
            let out = _.random(parseInt(min), parseInt(max));
            //pushing generated number into an array
            arr.push(out);

            // Iterating loop till it equals to lenth of an array
            for (let i = 0; i < arr.length; i++) {
                if (unique_array.indexOf(arr[i]) == -1) {
                    unique_array.push(arr[i]);
                    count++;
                }
            }
        }

        console.log(unique_array);
        console.log(unique_array.length);

    },



    quadratic: function (num1, num2, num3) {

        //calculating delta , root1 and root2 values
        let delta = Math.pow(num2, 2) - (4 * num1 * num3);
        let root1 = (-num2 + Math.sqrt(delta)) / (2 * num1);
        let root2 = (-num2 - Math.sqrt(delta)) / (2 * num1);

        //displaying on console
        console.log(root1);
        console.log(root2);

    },


    array: function (row) {

        // creating an array of size given by user(row)
        let arr = new Array(row);

        //to read values from user 
        var coloumn = prompt('enter no of coloumns ');

        for (let i = 0; i < row; i++) {

            // creating array inside array index
            arr[i] = new Array(coloumn);

            // inserting elements into the array
            for (let j = 0; j < coloumn; j++) {

                arr[i][j] = prompt('enter element ');

            }
        }

        // displaying result in console
        console.log(arr);


    },



    sumArray: function (row) {

        // creating array with user input size
        let arr = new Array(row);

        // creating an empty  array to store triplets
        let array1 = new Array();

        // Inserting elements into Array
        for (let index = 0; index < row; index++) {

            arr[index] = prompt('enter element ');

        }

        //finding triplets sum == 0
        for (let i = 0; i < (arr.length - 2); i++) {

            for (let j = i + 1; j < (arr.length - 1); j++) {

                for (let k = j + 1; k < (arr.length); k++) {

                    var sum = Number(arr[i]) + Number(arr[j]) + Number(arr[k]);
                    if (sum == 0) {

                        //pushing triplets into array
                        array1.push(arr[i] + ' ' + arr[j] + ' ' + arr[k]);


                    }
                }

            }

        }

        // removes duplicate triplets and returns array
        function removeDuplicates(arr) {

            //creating an empty array
            let unique_array = []

            //comparing duplicates array elemnts with unique_array elemnts and push triplets into it
            for (let i = 0; i < arr.length; i++) {

                if (unique_array.indexOf(arr[i]) == -1) {

                    //pushing unique triplets into array
                    unique_array.push(arr[i])
                }
            }
            return unique_array;
        }

        // Displays result on console
        console.log(removeDuplicates(array1));
        console.log(removeDuplicates(array1).length);

    },

    chill: function (t, v) {
        if (t <= 50 && (v <= 120 && v >= 3)) {

            var weather = 35.74 + (0.6215 * t) + (0.4275 * t - 35.75) * (Math.pow(v, 0.16));
            console.log(weather);
        }
        else {
            console.log('plz enter values t<50 and v between 3 and 120');
        }
    },



    getTime: function () {

        // creating object of Date
        var currentDate = new Date();

        return currentDate.getTime();
    },

    // Simulating StopWatch and Calculating Elapsed time

    stopWatch: function (initial, final) {


        let elapsedTime = final - initial;

        //converting milliSeconds into Seconds
        console.log(elapsedTime / 1000 + 'seconds');
    },


    stringPermutation: function (arr, i, j) {

        if (i == j) {
            console.log(arr.join(''));
        }
        else {
            for (let index = i; index <= j; index++) {
                this.swap(arr, i, index);
                this.stringPermutation(arr, i + 1, j);
                this.swap(arr, index, i);
            }
        }
    },

    swap: function (arr, i, j) {

        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        //console.log(arr);
        return arr;

    },






}