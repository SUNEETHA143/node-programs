module.exports = {

    anagrams : function(str1,str2) {

                var arr1 = str1.split('');
                var arr2 = str2.split('');
                var array1 = this.removeSpace(arr1);
                var array2 = this.removeSpace(arr2);

                var res1 = array1.sort();
                var res2 = array2.sort();

                if(res1.length == res2.length) {

                    var output = this.compare(res1,res2);

                    if(output) {
                        //console.log('given strings are anagram');
                        return true;
                    }

                    else {
                       // console.log('given strings are not anagram');
                       return false;
                    }

                }

                else {

                    //console.log('given strings are not anagram');
                    return false;

                }

    },

    removeSpace : function(array) {

        var newArray = [];
    for(let i=0;i<array.length;i++) {

        if(array[i] != ' ') {
            newArray.push(array[i]);
        }
    
     }

     return newArray;

    } ,

    compare : function(array1,array2) {

        let count = 0;
        
        for(let i=0;i < array1.length ;i++) {
            
            if(array1[i]==array2[i]) {

                count++
            }
        }

        return (array1.length == count);

    },

    checkPrime : function(min,max) {

        
        let prime = new Array();

        for(let i = min;i <= max;i++) {
            let count = 0;
            
            for(let j = 1;j <= i;j++) {
               

                if(i % j == 0) {

                    count++;
                }
                
            }

            if(count <= 2) {

                prime.push(i);
                

            }
            
        }

        return prime;
    
    },

    palindrom : function(number) {

        let sum = 0;
        let num = number;
        
        while(number>0){
            let temp = 0;
            temp = number % 10;
            sum = (sum * 10) + temp;
            number = Math.floor(number/10);

        }
       
        if(sum == num) {

            return true;
        }

        else {
            return false;
        }

    },

    binary : function (array,find) {
        
        let initial = 0;

        let length = array.length-1;

        while (initial <= length) 
        { 
            let mid = Math.floor(initial + (length-initial)/2); 
  
            // Check if x is present at mid 
            if (array[mid] == find) {

                return mid; 
            }         
            // If x greater, ignore left half 
            if (array[mid] < find) {
                initial = mid + 1; 
            }     
            // If x is smaller, ignore right half 
            else {
                length = mid - 1;
            }        
        } 
        
        // if we reach here, then element was  
        // not present 
        return -1;    
        
    },

    insertion : function(array) {

        let n = array.length;
        for (let i=1; i<n; ++i)
        {
            let key = array[i];
            let j = i-1;
 
            /* Move elements of arr[0..i-1], that are
               greater than key, to one position ahead
               of their current position */
            while (j>=0 && array[j] > key)
            {
                array[j+1] = array[j];
                j = j-1;
            }
            array[j+1] = key;
        }

        return array;

    }, 

    bubble : function (array) {

        let n = array.length;
        for (let i = 0; i < n-1; i++) { 

            for (let j = 0; j < n-i-1; j++)
                if (array[j] > array[j+1])
                {
                    // swap temp and arr[i]
                    let temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }

        }
            
        return array;
    },

    getTime : function () {

        // creating object of Date
        var currentDate = new Date();

        return currentDate.getTime();
    },

    // Simulating StopWatch and Calculating Elapsed time

    stopWatch : function(initial,final,method) {

        
        let elapsedTime =  final-initial;
        
        //converting milliSeconds into Seconds
        //console.log(elapsedTime/1000 + 'seconds'+'for'+method);

        let res = elapsedTime/1000;
        return res;
    },

    sort : function (arr,  l,  r) {

        if (l < r) 
        { 
            // Find the middle point 
            let m = Math.floor((l+r)/2); 
  
            // Sort first and second halves 
            this.sort(arr, l, m); 
            this.sort(arr , m+1, r); 
  
            // Merge the sorted halves 
            this.merge(arr, l, m, r); 

                      
        }   
        return arr;
    },

    merge : function (arr,l,m,r) {

        // Find sizes of two subarrays to be merged 
        let n1 = m - l + 1; 
        let n2 = r - m; 
  
        /* Create temp arrays */
        let L = new Array(n1); 
        let R = new Array(n2); 
  
        /*Copy data to temp arrays*/
        for (let i=0; i<n1; ++i) 
            L[i] = arr[l + i]; 
        for (let j=0; j<n2; ++j) 
            R[j] = arr[m + 1+ j]; 
  
  
        /* Merge the temp arrays */
  
        // Initial indexes of first and second subarrays 
        let i = 0, j = 0; 
  
        // Initial index of merged subarry array 
        let k = l; 
        while (i < n1 && j < n2) 
        { 
            if (L[i] <= R[j]) 
            { 
                arr[k] = L[i]; 
                i++; 
            } 
            else
            { 
                arr[k] = R[j]; 
                j++; 
            } 
            k++; 
        } 
  
        /* Copy remaining elements of L[] if any */
        while (i < n1) 
        { 
            arr[k] = L[i]; 
            i++; 
            k++; 
        } 
  
        /* Copy remaining elements of R[] if any */
        while (j < n2) 
        { 
            arr[k] = R[j]; 
            j++; 
            k++; 
        } 

        
        
    },

    celsius : function(value) {

        let res = (value-32)*(5/9);
        
        return res;
    },

    fahrenheit : function(value) {

        let res = (value*(9/5))+32;

        return res;
    },

    monthlyPayment : function(principal,years,rate) {

        let payment = 0;

        let n = 12 * years;

        let r = rate /(12*100);

         payment = ((principal * r) / (1-(1+r) ** (-n)));

        console.log(payment+' ₹');
        
    },

    sqrt : function(number) {
        
        let t = number;
        let epsilon = 0.001;

        while (Math.abs(t-(number/t)) > epsilon*t) {

            t = ((number/t)+t)/2;
            
        }

        console.log(t);
        
    },

    toBinary : function(number) {

        let result = '';

        if (number != Math.floor(number)) {
            console.log("Please enter a number");
            
          } else if (number < 0) {
            console.log("Please enter a positive number");
          
          } else {
            let index = 0;
		let binary = new Array(40);
		
		while(number>0) {
			binary[index] = number%2;
			number = Math.floor(number/2);
			index++;
		}
		
		for(let i = index-1;i>=0;i--) {

            //console.log(binary[i]);
            
            result = result + binary[i];


        }
            
		
    }
    //console.log(result);

    return result;
    
            
          },

          
    

    toSwap : function(str) { 

        let nibble1 = str.slice(0,4);

let nibble2 = str.slice(4);

console.log(nibble1);

console.log(nibble2);

var res = nibble2.concat(nibble1);
//console.log(str);
console.log(res);

let c = 0;

let out = 0;

while(res > 0) {
  let rem = res % 10;

  out = out + rem * Math.pow(2,c++);
  
  res = Math.floor(res/10);

  
}

//console.log(out);
 return out;
       

    },

    isPower : function(number) {
        
        let count = 0;
        if (number == 0)
            return false;
         
        while (number != 1)
        {
            if (number % 2 != 0) {
                return false;
            }
               
            number = number / 2;

            count++;
        }

        console.log('given number is 2 ** '+count);
        
        return true;

    },

    change : function (amount) {

        let count = 0;

        let i = 0;

        let arr =[1000,500,100,50,10,5,2,1]
        

        function recursion(initial) {

            if( amount/initial >=1 ) {

                let value = Math.floor(amount/initial);
    
                console.log('Number of'+ initial +' Notes :'+ value);
    
                amount = amount - (value*initial);
    
                count = count + value;

                if(i<=arr.length) {
                    i++;    
                    recursion(arr[i]);
                }   
                
            }

            else {
                if(i<=arr.length) {
                    i++;  
                    recursion(arr[i]);
                }

            }
        }

        recursion(arr[i]);

        console.log('Total number of notes = '+count)
        
    },

    dayOfWeek : function(date, month, year) {

        var a = Math.floor((14 - month) / 12);
        var y = year - a;
         var m = month + 12 * a - 2;
         var day = (date + y + Math.floor(y / 4) - Math.floor(y / 100) +
         Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;
         //return d;
		
        //return day1;
        
        switch (day) {
            case 0:
                    console.log('sunday');
                    
                break;

                case 1:
                console.log('monday');
                
            break;
            case 2:
                    console.log('tuesday');
                    
                break;
                case 3:
                    console.log('wednesday');
                    
                break;
                case 4:
                    console.log('thursday');
                    
                break;

                case 5:
                    console.log('friday');
                    
                break;
                case 6:
                    console.log('saturday');
                    
                break;
        
            default:
                break;
        }

    },
    
    guessNumber : function(number) {

        let prompt = require('prompt-sync')();
        let find = number;
        let count = 0;
        //let number = 32 ;
        if (number == 0) {
            console.log('enter number > 0');
            
        }
             
         
        while (number != 1)
        {
            if (number % 2 != 0) {
                
                number = number-1;
                
            }
               
            number = number / 2;
    
            count++;
        }
    
        console.log('guess ur number within '+ (count)+ ' choices'); 

        function displayNumber(initial,end) {
        
            //let first = i;
                //let last = range;
                
                if(initial == end){
                    console.log("Your Number : "+initial); 
                    console.log("Intermediary Numbers : "+(initial-1)+" and "+(initial+1));
                    return;
                }
                
                //let mid = Math.floor((initial+end)/2);
                let mid = Math.floor(initial + (end-initial)/2);
                //console.log(mid);
                
                
                console.log('If your number comes between '+initial+"-"+(mid-1)+" Enter 1 : ");
                console.log('If your number comes between '+(mid+1)+"-"+(end) +" Enter 2 : ");
                console.log('If your number equals to '+(mid)+" Enter 3 : ");
                let choice = prompt('choice');
                
                if(choice == 1){
                    displayNumber(initial, mid-1);
                }
                else if(choice == 2) {
                    //console.log(mid+1);
                    //console.log(end);
                    displayNumber(mid+1, end);
                }
                else if(choice == 3) {
            
                    console.log("Your Number : "+ mid); 
                    console.log("Intermediary Numbers : "+(mid-1)+" and "+(mid+1));
                    return;      
                }
                
        
          }
          displayNumber(0,find);

    },

   


}