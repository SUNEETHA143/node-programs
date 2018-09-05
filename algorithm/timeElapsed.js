/******************************************************************************
 *  Execution       : 1. default node         cmd> node 4_timeElapsed.js 
 *                      
 * 
 *  Purpose         : To find the time taken to perform diffent operations like, binary searc, insertion sort and bubble sort.
 * 
 *  @description    : It asks for the operation to be performed and finally dispaly the elapsed time in descending order.
 * 
 *  @file           : 4_timeElapsed.js
 *  @overview       : Gives performance of different sorting and searching techniques.
 *  @author         : BridgeLabz <admin@bridgelabz.com>
 *  @version        : 1.0
 *  @since          : 30-08-2018
 *  @parameter      : operation.
 ******************************************************************************/


 /********************************************************************************
  *  Algorithm      : Take required input to perform the operation.
  *                 : calculate elapsed time to perform the operation and store it in an array.
  *                 : print the elapsed time in descending order.
  *                 
  ************************************************************************************/
 let prompt = require('prompt-sync')();

 let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');
 
 
 let re = /[a-zA-Z]/g;
 let re1 = /[0-9]/g;
 let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;
 
 
 
 function timeElapsed() {
 
     let time = [];

     for(let i=1;i<=6;i++) {

       if (i == 1) {
 
         let inTime = utility.getTime();

         let index = [];

     let size = prompt('Enter size of array');

     let createArray = new Array (size);
     
     for(let i = 0; i < size;i++) {
 
         createArray[i] = prompt('Eneter element :');  
 
         index.push(createArray[i]);
 
     }
 
     console.log(createArray);
        
         let value = prompt('Enter element to search ');
     
         if(value.search(re) == -1 && value.search(re2) == -1) {
     
     
             createArray = createArray.sort(function (a, b) {  return a - b;  });
     
             console.log(createArray);
                       
             let result = utility.binary(createArray,value);
     
     
             if(result == -1) {
     
                 console.log(value + ' not found in given array');
             
             }
     
           else {
     
               console.log(value + ' found in given array'+' in '+(index.indexOf(value)+1) +' position ');
  
           }
           
            let outTime = utility.getTime();
               let method = 'Binary search for Integer';
              let time1 = utility.stopWatch(inTime,outTime,method);
                 console.log(time1);
                 
              time.push(time1);
     
        }
           
       }
 
       else if(i == 2) {
 
         
 
         let inTime = utility.getTime();

         let string = prompt('Enter a string :');
 
         let value = prompt('Enter a character to search :');
 
 
         if (value.search(re1) == -1 && value.search(re2) == -1) {
 
            let createArray = string.split('');

            let index = [];
 
            console.log(createArray);
 
            for(let i = 0; i < createArray.length;i++) {
     
                 
             index.push(createArray[i]);
     
         }
 
         createArray = createArray.sort();
            
     
             let result = utility.binary(createArray,value);
     
            if(result == -1) {
     
             console.log(value + 'not found in given array');
 
            }
     
            else {
                
                console.log(value + ' found in given array'+' in '+(index.indexOf(value)+1) +' position ');
 
          }
             
             
                 
         }   
                 let outTime = utility.getTime();
                 let method = 'Binary search for String';
              let time2 = utility.stopWatch(inTime,outTime,method);
                 console.log(time2);
                 
              time.push(time2);
 
 
       }
 
       else if (i == 3) {
 
 
         let inTime = utility.getTime();

         let index = [];

     let size = prompt('Enter size of array');

     let createArray = new Array (size);
     
     for(let i = 0; i < size;i++) {
 
         createArray[i] = prompt('Eneter element :');  
 
         index.push(createArray[i]);
 
     }
 
     console.log(createArray);
 
         let result = utility.insertion(createArray);
 
         console.log(result);
                 
                 let outTime = utility.getTime();
                 let method = 'Insertion Sort for integer';
              let time3 = utility.stopWatch(inTime,outTime,method);
                 console.log(time3);
                 
              time.push(time3);
 
       }
 
       else if (i == 4) {
 
 
         let inTime = utility.getTime(); 

         let string = prompt('Enter a string :');
 
         let createArray = string.split('');
     
         console.log(createArray);
 
         let result = utility.insertion(createArray);
 
         console.log(result);
 
         let outTime = utility.getTime();
 
         
                 let method = 'Insertion Sort for String';
                 let time4 = utility.stopWatch(inTime,outTime,method);
                 console.log(time4);
                 
              time.push(time4);
     
       }
 
       else if (i == 5) {
 
 
         let inTime = utility.getTime();
 
         //let index = [];

         let index = [];

     let size = prompt('Enter size of array');

     let createArray = new Array (size);
     
     for(let i = 0; i < size;i++) {
 
         createArray[i] = prompt('Eneter element :');  
 
         index.push(createArray[i]);
 
     }
 
     console.log(createArray);
     
         let result = utility.bubble(createArray);
 
         console.log(result);
 
         let outTime = utility.getTime();
                 let method = 'Bubble Sort for integer';
                 let time5 = utility.stopWatch(inTime,outTime,method);
                 console.log(time5);
                 
              time.push(time5);
   
       }
 
       else if (i == 6) {
 
         let inTime = utility.getTime();

         let string = prompt('Enter a string :');

         let createArray = string.split('');
     
         console.log(createArray);
 
         let result = utility.bubble(createArray);
 
         console.log(result);
 
         let outTime = utility.getTime();
                 let method = 'Bubble Sort for string';
                 let time6 = utility.stopWatch(inTime,outTime,method);
                 console.log(time6);
                 
              time.push(time6);
       }  
       
    }
 
       console.log(time);

       var operation =["Binary integer","Binary string","inserion sort integer","insertion sort string","Bubble sort integer","Bubble sort string"];

var data = [];
for(var i=0; i<6; i++)  {
   // data.push({value: val[i], label: lab[i]});

    data.push({performance: operation[i], value: time[i]});
}



/*data.sort(function (a, b) {
    return a.value - b.value;
  });*/

  data.sort(function (a, b) {
    return b.value - a.value;
  });

  console.log(data);
             
 }
 
 timeElapsed();