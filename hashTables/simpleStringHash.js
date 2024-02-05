//hash function for strings only
//not constant time, scales with key length
//could be more random, frequent collisions when using small arrayLen

function hash(key, arrayLen){
    let total = 0;
    for(let char of key){
        //map "a" to 1, "b" to 2, "c" to 3, etc.
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen;
    }
    return total
}

//strings only
//reduced collisons via prime number
//only hashes first 100 characters if key length exceeds 100
function improvedHash(key, arrayLen){
    let total = 0;
    let WEIRD_PRIME = 31;
    for(let i = 0; i< Math.min(key.length, 100); i++){
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % arrayLen;
    }
    return total
}
