/******************************************************************************
 *  Execution       : 1. default node         cmd> node Anagram.js 
 *                      
 * 
 *  Purpose         : To check given strings are anagrams..?
 * 
 *  @description    : It accepts only string values and Display weather they are anagram or not.
 * 
 *  @file           : Anagram.js
 *  @overview       : Accepts only string values and not accepts any numbers or special characters.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : String1, String2
 ******************************************************************************/


 /********************************************************************************
  *  Algorithm      : Need to accept only string values.
  *                 : Converting strings to uppercase.
  *                 : Stings need to be splitted and stored as array.
  *                 : Removing spaces between the words in the given strings.
  *                 : Sorting the letters in the given strings
  *                 : Comparing each element in one string with another string.
  *                 : If compare function returns true, the given strings are Anagram
  *                  
  ************************************************************************************/

let prompt = require('prompt-sync')();

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');

let re = /[0-9]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

function anagrams() {

    let str1 = prompt('String1 ');
    let str2 = prompt('String2 ');

    if(str1.search(re) == -1 && str2.search(re2) == -1 && str2.search(re) == -1 && str1.search(re2) == -1) {

        str1 = str1.toUpperCase();
        str2 = str2.toUpperCase();

        let res = utility.anagrams(str1,str2);
        if(res) {

            console.log('given strings are anagram');
        }
        else {

            console.log('given strings are not anagram');

        }
    
        }
    
        else {
            console.log('plz enter valid string')
        } 

}

anagrams();