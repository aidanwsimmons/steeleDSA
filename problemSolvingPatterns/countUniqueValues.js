//function accepts a sorted array
//returns number of unique values in the array

function countUniqueValues(arr){
    if(arr.length < 2){
        return arr.length
    }
    let i = 0;
    let j = 1;
    while(j < arr.length){
        if(arr[i] !== arr[j]){
            i++
            arr[i] = arr[j]
        }
        j++
    }
    return i + 1
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]), 2)
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]), 7)
console.log(countUniqueValues([]), 0)
console.log(countUniqueValues([-2, -1, -1, 0, 1]), 4)