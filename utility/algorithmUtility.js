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
        
    }



}