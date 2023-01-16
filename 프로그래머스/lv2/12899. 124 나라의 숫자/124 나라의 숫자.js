function getDigit(num) {
    let d = 0;
    while (true) {
        if (num - 3**d < 0) break;
        num -= 3**d;
        d++;
    }
    
    return [d, num + 1];
}

function solution(n) {
    let answer = '';
    const number = [0, 1, 2, 4];
    const digits = Array(17).fill(0).map((d, i) => 3**i);

    let [d, num] = getDigit(n);
    
    while(d > 0) {
        
        let idx = 0;
        while (d > 1 && num - digits[d-1] > 0) {
            num -= digits[d-1];
            idx++;
        }
        
        answer += d > 1 ? number[idx + 1] : number[num];
        d--;
    }   
    
    return answer;
}