//recursive solution- return nth digit of fibonacci sequence
//time complexity =~ O(2^n)
function fib(n){
    if(n <= 2){
        return 1;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


//dynamic programming solution using memoization
//time complexity = O(n)

function fibDynamic(n, memo=[]){
    if(memo[n] !== undefined) return memo[n];
    if(n <= 2) return 1;
    let result = fibDynamic(n - 1, memo) + fib(n - 2, memo);
    memo[n] = result;
    return result;
}


//tabulated solution
//time complexity =

function fibTabulated(n){
    if(n <= 2) return 1;
    let fibNums = [0, 1, 1];
    for(let i = 3; i <= n; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
    }
    return fibNums[n];
}