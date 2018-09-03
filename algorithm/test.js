function binaryConvert() {
        
    let count = 0;
    let number = 32 ;
    if (number == 0)
        return false;
     
    while (number != 1)
    {
        if (number % 2 != 0) {
            //return false;
            console.log('not power of 2');
            
        }
           
        number = number / 2;

        count++;
    }

    console.log(count);
    
    console.log('power of 2');

  }
    binaryConvert();