function solution(n, s) {
    const num = Math.floor(s / n);
    if (num < 1) 
        return [-1];
    
    const result = Array(n).fill(num);
    let remain = s % n;
    
    while (remain > 0) {
        result[remain]++;
        remain--;
    }
    
    return result.sort((a,b) => a-b);
}