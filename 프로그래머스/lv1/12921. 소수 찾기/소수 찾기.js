function solution(n) {
    const primes = Array(n+1).fill(true).map((_, i) => i % 2 !== 0);
    
    for (let i = 2; i <= n; ++i) {
        for (let j = 2; j * i <= n; j++) {
            primes[i * j] = false;
        }
    }
    
    return primes.filter((prime) => prime).length;
}
