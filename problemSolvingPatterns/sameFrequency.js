// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false


function sameFrequency(num1, num2){
    num1 = num1.toString()
    num2 = num2.toString()
    
    if(num1.length !== num2.length){
        return false
    }
    
    let num1Map = {}
    let num2Map = {}
    
    for(let digit of num1){
        num1Map[digit] = (num1Map[digit] || 0) + 1
    }
    for(let digit of num2){
        num2Map[digit] = (num2Map[digit] || 0) + 1
    }
    
    for(let key in num1Map){
        if(!(key in num2Map)){
            return false
        }
        if(num2Map[key] !== num1Map[key]){
            return false
        }
    }
    return true
  }