//Function accepts sorted array of integers
//returns array with first pair of values that sum to zero || undefined - if no such pair exists


//naive solution - 0(n^2)
// function sumZero(arr){
//     for(let i = 0; i < arr.length -1; i++){
//         for(let j= i + 1; j < arr.length; j++){
//             if(arr[i] + arr[j] === 0){
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

//refactored O(N) solution
function sumZero(arr){
    let index1 = 0
    let index2 = arr.length - 1
    while(index1 < index2){
        let sum = arr[index1] + arr[index2]
        if(sum === 0){
            return [arr[index1], arr[index2]]
        }
        else if(sum > 0){
            index2--
        }
        else if(sum < 0){
            index1++
        }
    }
    
}


console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]), [-3, 3])
console.log(sumZero([-2, 0, 1, 3]), undefined)
console.log(sumZero([1, 2, 3]), undefined)
