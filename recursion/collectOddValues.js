//helper method recursion
function collectOddValues(arr){
    let result = []

    function helper(helperInput){
        if(helperInput.length === 0){
            return;
        }

        if(helperInput[0] % 2 !== 0){
            result.push(helperInput[0])
        }

        helper(helperINput.slice(1))
    }

    helper(arr)

    return result;
}
//pure recursion
function collectOddValues2(arr){
    let newArr = []

    if(arr.length === 0){
        return newArr
    }

    if(arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr;
}