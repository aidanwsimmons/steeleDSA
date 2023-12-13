// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// Time Complexity - O(n)

// Space Complexity - O(1)



function minSubArrayLen(nums, total){
    //subArray sum
    let tempSum = 0
    //indices for subArray
    let start = 0
    let end = 0
    let minLength = Infinity
    
    while(start < nums.length){
        let subArrayLength = end - start
        // if the subArray sum is less than the desired total, grow the subArray from the right by increasing the end index w/o eclipsing array length
        if(tempSum < total && end < nums.length){
            tempSum += nums[end]
            end++
        }
        // if the subArray sum is greater than or equal to the total, check to see if minlength needs to be updated, and shrink the subArray from the left by increasing start index
        else if(tempSum >= total){
            minLength = Math.min(minLength, subArrayLength)
            tempSum -= nums[start]
            start++
        }
        // if subArray sum never reaches total , break the loop
        else {
            break;
        }
    }
    
    return minLength === Infinity ? 0 : minLength
}
