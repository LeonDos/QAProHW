 1
 
 function factorial(n) {
   return (n != 1) ? n * factorial(n - 1) : 1;
 }

   alert( factorial(5) );
   
2

let n = 100;

for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}