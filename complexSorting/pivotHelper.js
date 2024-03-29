//given an array, designate an element as the pivot and rerarrange elements in the array so that all
//values less than the pivot are moved left of the pivot, and all values greater than the pivot
//are moved to the right of the pivot
//in place
//returns pivot index


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