function solution(n) {
    let ans = 0;

    while (n > 2) {
        if (n % 2 === 1) ans++;
        n = Math.floor(n / 2);
    } 
    
    return ans + 1;
}