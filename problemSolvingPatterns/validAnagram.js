//Given two strings, write a function to determine if the second string is an 
//anagram of the first. An anagram is a word, phrase, or name formed by 
//rearranging the letters of another, such as cinema, formed from iceman.

function validAnagram(str1, str2){
    if(str1.length !== str2.length){
        return false
    }
    
    let frequencyCount1 = {}
    let frequencyCount2 = {}
    
    for(let char of str1){
        frequencyCount1[char] = (frequencyCount1[char] || 0) + 1
    }
    for(let char of str2){
        frequencyCount2[char] = (frequencyCount2[char] || 0) + 1
    }
    
    for(let key in frequencyCount1){
        if(!(key in frequencyCount2)){
            return false
        }
        if(frequencyCount2[key] !== frequencyCount1[key]){
            return false
        }
    }
    return true
}