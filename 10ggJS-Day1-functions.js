/*
 * Create the function factorial here
 */
function factorial(n) {
    
    let fattoriale = 1;
    
    for(let i = 1; i <= n; i++) {
        fattoriale *= i;
    }
   
   //console.log(fattoriale);
   return fattoriale;
}