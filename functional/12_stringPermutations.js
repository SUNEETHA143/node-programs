/******************************************************************************
 *  Execution       :   1. default node         cmd> node 12_stringPermutations.js 
 *                      
 * 
 *  Purpose         : To generate all possible permutations of a given string.
 * 
 *  @description    : It accepts only string value and generates all displays all permutations 
 *                    given string.
 * 
 *  @file           : node 12_stringPermutations.js
 *  @overview       : Generating all possible permutations of a string.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : String
 ******************************************************************************/
var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/ram/utility/Utility.js');


function stringPermutation() {

    var str = prompt('Enter string :');

    var re = /[0-9]/g;
    var re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

    if(str.search(re) == -1 && str.search(re2) == -1) {

    var j = str.length-1;
    var i =0;
    var arr = str.split('');
    
    utility.stringPermutation(arr,i,j);

    }

    else {
        console.log('plz enter valid string')
    }
    
}

stringPermutation();