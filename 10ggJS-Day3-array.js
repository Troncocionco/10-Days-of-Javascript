/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    
    nums.sort((a,b) => a - b);
    nums.reverse();
    
    let max = Math.max.apply(null, nums);
    let target = max;
    
    
    for(let i of nums) {
        
        if( i < max){
            target = i;
            break;
        }
    } 
    return target;
}