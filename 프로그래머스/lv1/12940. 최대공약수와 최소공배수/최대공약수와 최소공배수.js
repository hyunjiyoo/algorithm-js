function solution(n, m) {
    
    const gcd = ((a, b) => {
        let c = 0;
        while (b !== 0) {
            c = a % b;
            a = b;
            b = c;
        }
        return a;
    })(n, m);
    
    let lcm = n*m / gcd;
    
    return [gcd, lcm];
}