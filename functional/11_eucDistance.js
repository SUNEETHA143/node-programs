

     /******************************************************************************
 *  Execution       :   1. default node         cmd> node 11_eucDistance.js 
 *                      
 * 
 *  Purpose         : To find Euclidiean Distance from point (x,y) and (0,0).
 * 
 *  @description    : Calculates Euclidiean Distance
 * 
 *  @file           : 11_eucDistance.js
 *  @overview       : Calculates Euclidiean distance from the given point.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 24-08-2018
 *  @parameter      : x_co-ordinate, y_co-ordinate
 ******************************************************************************/
var utility = require('/home/bridgeit/ram/utility/Utility.js');

var coordinate_x = process.argv[2];
var coordinate_y = process.argv[3];
function distance() {  
   
  utility.distance(coordinate_x,coordinate_y);
}

distance();