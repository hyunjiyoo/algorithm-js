function solution(num) {
    let answer = 0;
    
    while (true) {
        if (answer > 500) {
            return -1;
        }
        
        if (num === 1) {
            return answer;
        }
        
        if (num % 2 === 0) {
            num /= 2;  
        } else {
            num = num * 3 + 1;
        }
        
        answer++;
    }
}