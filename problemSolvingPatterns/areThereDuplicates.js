// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)


//frequency counter solution O(n)
function areThereDuplicates(...args) {
    let frequencyMap = {}
    args.forEach(el => {
        frequencyMap[el] = (frequencyMap[el] || 0) + 1
    })
    for( let key in frequencyMap ){
        if(frequencyMap[key] > 1){
            return true
        }
    }
    return false
  }

  //set solution
  function areThereDuplicatesSet(){
    return new Set(arguments).size !== arguments.length
  }