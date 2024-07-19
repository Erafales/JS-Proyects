/*  Este es un pequeño juego llamado "Fizz Buzz", el cual consiste en 
    intercambiar los números múltiplos de 3 con la palabra "Fizz", 
    los múltiplos de 5 con "Buzz" 
    y los que sean múltiplos de 3 y 5 con "FizzBuzz" */
    
    var totalNumbers = 10

    for (var i = 0; i<=totalNumbers; i++) {
        if ( i % 5 == 0 && i % 3 == 0 ){
            console.log("FizzBuzz");
        } else if ( i % 5 == 0 ) {
            console.log("Buzz");
        } else if ( i % 3 == 0 ) {
            console.log("Fizz");
        } else {
            console.log(i);
        }
    }