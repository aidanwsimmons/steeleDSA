//function accepts an array of integers and a number(n)
//function returns maximum sum of n consecutive digits

//O(n)
function maxSubarraySum(arr, n){
    if(n > arr.length){
        return null
    }
    let maxSum = 0;
    let tempSum = 0;
    for(let i = 0; i < n; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum
    for(let i = n; i < arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
    }
}