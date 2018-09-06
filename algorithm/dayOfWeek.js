
/******************************************************************************
 *  Execution       : 1. default node         cmd> node 11_dayOfWeek.js 
 *                      
 * 
 *  Purpose         : Displays the day for the given date.
 * 
 *  @description    : This accepts date as command line arguments and dispalys the day for the given date.
 * 
 *  @file           : 11_dayOfWeek.js
 *  @overview       : Gives the day of the given date.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : DD-MM-YYYY.
 ******************************************************************************/


 /********************************************************************************
  *  Algorithm      : Accept the command line input.
  *                 : Using the date given find the day.
  *                 
  *                 
  ************************************************************************************/
let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');

let re = /[a-zA-Z]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;

let d = process.argv[2];
let m = process.argv[3];

let y = process.argv[4];



function dayOfWeek() {

  let day = parseInt(d);
  let month = parseInt(m);
  let year = parseInt(y);

  
            // checking weather the year if leap year or not
            if(year % 4 == 0 && (year % 100 !==0 || year % 400 ==0)) { 
               
                if(day>0 && day <32 && month <13) {

                    utility.dayOfWeek(day, month, year);

                }

                else {
                  console.log('Enter valid date');
                
                }
              

            }

            else if(day>=29&&month==2) {
              console.log('given date is not valid');
              
            }

            else if(day>=31&& (month==4 || month==6 || month==9 || month==11)) {

              console.log('given date is not valid');
              
            }
            
            
            else if(day>0&&day<32){

              utility.dayOfWeek(day, month, year);

            }

            else {
              console.log('Enter valid date');
              
            }    

}

dayOfWeek();