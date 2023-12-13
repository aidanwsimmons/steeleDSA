// Write a function called isSubsequence which takes in two strings 
// and checks whether the characters in the first string form a subsequence 
// of the characters in the second string. In other words, the function should 
// check whether the characters in the first string appear somewhere 
// in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)

function isSubsequence(str1, str2) {
    let index = 0
  for(let i = 0; i < str1.length; i++){
      let subString = str2.slice(index)
      if(subString.indexOf(str1[i]) < 0){
          return false
      }
      else {
          index = subString.indexOf(str1[i]) + 1
      }
  }
  return true
}

//refactor
function isSubsequence2(str1, str2){
    let i = 0
    let j = 0
    while(j < str2.length){
        if(str1[i] === str2[j]) {
            i++
        }
        if(i === str1.length) {
            return true
        }
        j++
    }
    return false
}

//recursive

function isSubsequence3(str1, str2){
    if(str1.length === 0){
        return true
    }
    if(str2.length === 0){
        return false
    }
    if(str2[0] === str1[0]){
        return isSubsequence3(str.slice(1), str2.slice(1))
    }
    return isSubsequence3(str1, str2.slice(1))
}