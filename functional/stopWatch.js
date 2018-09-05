
 /******************************************************************************
 *  Execution       :   1. default node         cmd> node 13_stopWatch.js 
 *                      
 * 
 *  Purpose         : Measuring the time that elapses between the start and end clicks.
 * 
 *  @description    : It takes start and stop options from user and gives elapsed time between the.
 * 
 *  @file           : 13_stopWatch.js
 *  @overview       : Measuring elapsed time.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : Start-1 , Stop-0
 ******************************************************************************/
var prompt = require('prompt-sync')();
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/Utility.js');
//var currentDate = new Date();
var initial = 0;
var final = 0;

function stopWatch() {  
  var start = prompt('press 1 to start ');
  if(start == 1) {

  initial =  utility.getTime(); 

  var stop = prompt('press 0 to stop ');
    if(stop == 0) {

       final = utility.getTime();

    }

  }

  utility.stopWatch(initial,final);
 
}

stopWatch();



