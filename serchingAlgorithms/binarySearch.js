function binarySearch(arr, val){
    let min = 0
    let max = arr.length - 1
    let mid = Math.floor((max + min) / 2)
    
    if(val < arr[min] || val > arr[max]){
        console.log('num out of range')
        return -1
    }
    
    while(max >= min){
        console.log(min, max, mid)
        if(arr[mid] === val){
            return mid
        }
        else if(arr[mid] > val){
            max = mid - 1
        }
        else if(arr[mid] < val){
            min = mid + 1
        }
        mid = Math.floor((max + min) / 2)
    }
    console.log('num not found')
    return -1
}