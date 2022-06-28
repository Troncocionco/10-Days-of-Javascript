/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    let vowel = []
    let consonant = []
    
    for (let x of s ) {
        if(x == "a" || x == "e" || x == "i" || x == "o" || x == "u") {
            vowel.push(x);
        }
        else {
            consonant.push(x);
        }         
    }
    
    vowel.forEach(y => console.log(y));
    consonant.forEach(y => console.log(y));
        
}