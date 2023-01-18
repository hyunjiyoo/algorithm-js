function solution(numbers, target) {
    let answer = 0;
    
    (function dfs(num, step) {
        if (step === numbers.length) {
            answer += (num === target);
            return;
        }
        
        dfs(num + numbers[step], step + 1);
        dfs(num - numbers[step], step + 1);
    })(0, 0);
    
    return answer;
}
