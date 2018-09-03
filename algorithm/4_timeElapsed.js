let prompt = require('prompt-sync')();

//var utility1 = require('/home/bridgeit/ram/utility/Utility.js');

let utility = require('/home/bridgeit/ram mohan reddy/node programs/utility/algorithmUtility.js');


let re = /[a-zA-Z]/g;
let re1 = /[0-9]/g;
let re2 = /[!@#$%^&*().<>+-/*"'`~]/g;



function timeElapsed() {

    let choice = prompt('Enter operation to be performed');

      if (choice == 1) {

        let inTime = utility.getTime();

        let size = prompt('Enter size of array');

        let index = [];
    
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
                let outTime = utility.getTime();
                let method = 'Binary search for Integer';
                utility.stopWatch(inTime,outTime,method);

                
           
            }
    
          else {
    
              console.log(value + ' found in given array'+' in '+(index.indexOf(value)+1) +' position ');

              let outTime = utility.getTime();
              let method = 'Binary search for Integer';
              utility.stopWatch(inTime,outTime,method);
              
           
          }
    
    
       }
          
      }

      else if(choice == 2) {

        let string = prompt('Enter a string :');

        let inTime = utility.getTime();

        let value = prompt('Enter a character to search :');

        let index = [];

        if (value.search(re1) == -1 && value.search(re2) == -1) {

           createArray = string.split('');

           console.log(createArray);

           for(let i = 0; i < createArray.length;i++) {
    
                
            index.push(createArray[i]);
    
        }

        createArray = createArray.sort();
           
    
            let result = utility.binary(createArray,value);
    
           if(result == -1) {
    
            console.log(value + 'not found in given array');

            let outTime = utility.getTime();
                let method = 'Binary search for string';
                utility.stopWatch(inTime,outTime,method);

                
    
           }
    
           else {
               
               console.log(value + ' found in given array'+' in '+(index.indexOf(value)+1) +' position ');

               let outTime = utility.getTime();
                let method = 'Binary search for String';
                utility.stopWatch(inTime,outTime,method);

                
         
           }
            
            
                
        }



      }

      else if (choice == 3) {

        let size = prompt('Enter size of array');

        let inTime = utility.getTime();

        //let index = [];
    
        let createArray = new Array (size);
    
        for(let i = 0; i < size;i++) {
    
            createArray[i] = parseInt(prompt('Eneter element :'));  
    
           // index.push(createArray[i]);
    
        }

        console.log(createArray);

        let result = utility.insertion(createArray);

        console.log(result);
        let outTime = utility.getTime();
                let method = 'Insertion Sort for integer';
                utility.stopWatch(inTime,outTime,method);

               
    

  
      }

      else if (choice == 4) {


        let inTime = utility.getTime();
        let value = prompt('Enter string');

       

        let createArray = value.split('');
    
        console.log(createArray);

        let result = utility.insertion(createArray);

        console.log(result);

        let outTime = utility.getTime();

        
                let method = 'Insertion Sort for String';
                utility.stopWatch(inTime,outTime,method);
                
    
      }

      else if (choice == 5) {

        let size = prompt('Enter size of array');

        let inTime = utility.getTime();

        //let index = [];
    
        let createArray = new Array (size);
    
        for(let i = 0; i < size;i++) {
    
            createArray[i] = parseInt(prompt('Eneter element :'));  
    
           // index.push(createArray[i]);
    
        }

        console.log(createArray);

        let result = utility.bubble(createArray);

        console.log(result);

        let outTime = utility.getTime();
                let method = 'Bubble Sort for integer';
                utility.stopWatch(inTime,outTime,method);
                
    

  
      }

      else if (choice == 6) {

        let inTime = utility.getTime();

        let value = prompt('Enter string');

        

        let createArray = value.split('');
    
        console.log(createArray);

        let result = utility.bubble(createArray);

        console.log(result);

        let outTime = utility.getTime();
                let method = 'Bubble Sort for string';
                utility.stopWatch(inTime,outTime,method);
                
    
      }   

      
      
}

timeElapsed();