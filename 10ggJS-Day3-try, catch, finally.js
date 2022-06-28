/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try {
        let new_s = s.split("");
        new_s = new_s.reverse();
        new_s = new_s.join("");
        console.log(new_s);
    }
    catch(err) {
        console.log(err.message);
        console.log(s);      
    }
}