//Function accepts two arrays and returns true if every value in the first array has
//its corresponding value squared in the second array- frequency must be the same


//naive solution- O(n^2) 
function sameNaive(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }
    for(let i=0; i<arr1.length; i++){
        let index = arr2.indexOf(arr1[i] ** 2)
        if(index === -1){
            return false
        }
        arr2.splice(index, 1)
    }
    return true
}

function same(arr1, arr2){

}

//refacterored solution O(n) using frequency counter

function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false
    }

    let freqCounter1 = {}
    let freqCounter2 = {}

    for(let num of arr1){
        freqCounter1[num] = (freqCounter1[num] || 0) + 1
    }
    for(let num of arr2){
        freqCounter2[num] = (freqCounter2[num] || 0) + 1
    }

    for(let key in freqCounter1){
        if(!(key ** 2 in freqCounter2)){
            return false
        }
        if(freqCounter2[key ** 2] !== freqCounter1[key]){
            return false
        }
    }
    return true
}






console.log(same([1, 2, 3], [4, 1, 9]), true)
console.log(same([1, 2, 3], [1, 9]), false)
console.log(same([1, 2, 1], [4, 4, 1]), false)