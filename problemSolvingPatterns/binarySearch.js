//function accepts asorted array and numerical value
//returns index of value in array || -1 if value not present


function Search(array, value){

    let min = 0
    let max = array.length - 1

    while(min <= max){
        let mid = Math.floor((min + max) / 2)
        let currentNum = array[middle]
        if( array[mid] < value) {
            min = mid + 1
        }
        else if(array[mid] > value){
            max = middle -1
        }
        else{
            return middle
        }
    }
    return -1
}