
/******************************************************************************
 *  Execution       :   1. default node         cmd> node 16_windChill.js 
 *                      
 * 
 *  Purpose         : To find weather by taking command line arguments of temperature and speed.
 * 
 *  @description    : It dispays weather for given conditions.
 * 
 *  @file           : 16_windChill.js
 *  @overview       : Calculates weather for given temperature and speed.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : Temperature, Speed
 ******************************************************************************/
var utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/Utility.js');

var t = process.argv[2];
var v = process.argv[3];
function chill() {  
   
  utility.chill(t,v);
}

chill();