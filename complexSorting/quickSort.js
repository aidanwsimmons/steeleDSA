function pivotHelper(arr, start=0, end=arr.length-1){
    function swap(array, i, j){
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    let pivot = arr[start]
    let swapIndex = start
    for(let i = start + 1; i <= end; i++){
        if(arr[i] < pivot){
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

 function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
    let pivotIndex = pivotHelper(arr, left, right)
    //left side
    quickSort(arr,left, pivotIndex - 1)
    //right side
    quickSort(arr, pivotIndex + 1, right)
    }
    return arr
 }