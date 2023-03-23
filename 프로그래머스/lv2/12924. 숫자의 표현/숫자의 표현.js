function solution(n) {
    if (n === 1) 
        return 1;
    
    let answer = (n % 2 === 1) ? 2 : 1;    
    for (let i = 2; i <= n / 2; ++i) {
        if (n % i === 0 && i % 2 === 1)
            ++answer;       
    }
    
    return answer;
}