function solution(n, s) {
    const num = Math.floor(s / n);
    if (num < 1) 
        return [-1];
    
    const result = Array(n).fill(num);
    let remain = s % n;
    
    let j = n - 1;
    while (remain > 0) {
        result[j--]++;
        remain--;
    }
    
    return result;
}