



function fibonacci(n, memo={}) {

    if (n === 1 || n === 2) {
        return 1;
    }
    if (n in memo) {
        return memo[n]
    }

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)
    return memo[n]


}
