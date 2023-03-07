function solution(n) {
    const dp = [0, 1, 2, 3, 5, 8,];
    
    for (let i = 5; i <= n; ++i) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
    }
    
    return dp[n];
}
