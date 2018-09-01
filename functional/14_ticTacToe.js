
 /******************************************************************************
 *  Execution       :   1. default node         cmd> node 14_ticTacToe.js 
 *                      
 * 
 *  Purpose         :  Replaces String Template and Dispalys “Hello <<UserInput>>, How are you?".
 * 
 *  @description    : It accepts only Strings and ignores other Data types
 * 
 *  @file           : 14_replaceString.js
 *  @overview       : repalce module to replace given string in “Hello <<UserInput>>, How are you?".
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : name
 ******************************************************************************/
var prompt = require('prompt');
var re2 = /[0-9]/g;

var board = {
    1: '1',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9'
};

function markBoard(position, mark) {
    board[position] = mark.toUpperCase();
}

function printBoard() {
    console.log('\n' +
        ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
        ' ---------\n' +
        ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
        ' ---------\n' +
        ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');

}

function isInt(value) {
    var x;
    if (isNaN(value)) {
        return false;
    }
    x = parseFloat(value);
    return (x | 0) === x;
}

function validateMove(position) {
    if (isInt(position) === true && board[position].search(re2) != -1) {
        return true;
    }
    return false;
}

// Everyone possible combination of three in a row
var winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                       [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

// Determine if the passed in player has three in a row
function checkWin(player) {
    for (var i = 0; i < winCombinations.length; i++) {
        var markCount = 0;
        for (var j = 0; j < winCombinations[i].length; j++) {
            if (board[winCombinations[i][j]] === player) {
                markCount++;
            }
            if (markCount === 3) {
                return true;
            }
        }
    }
    return false;
}

function playTurn(player,count) {
    
   
    console.log('Your turn player: ' + player);
    prompt.start();
    prompt.get(['position'], function (err, result) {

        if (validateMove(result.position) === true ) {
            markBoard(result.position, player);
            printBoard();
            if (checkWin(player) === true) {
                console.log('Winner Winner!');
                return;
            }

            if(count < 8) {

                count++;
            
                    machine('O',count);
                
            }

            else {
                console.log('game draw');
            }

            
        } else {
            console.log('incorrect input please try again...');
            
                playTurn(player,count);   
            
        }
    });
}

console.log('Game started: \n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');


playTurn('X',count=0);


function machine(player,count) {
    
    const _= require('lodash');
    console.log(count);
    console.log('Your turn player: ' + player);

    let out = _.random(parseInt(1),parseInt(10));
     
    console.log(out);
        if (validateMove(out) === true ) {
            markBoard(out, player);
            printBoard();
            if (checkWin(player) === true) {
                console.log('Winner Winner!');
                return;
            }

            if(count < 8) {

                count++;
                
              playTurn('X',count);
            
            }

            else {
                console.log('game draw');
            }

            
        } else {
        
            console.log('incorrect input please try again...');
            
                machine(player,count);   
            
        }

}

