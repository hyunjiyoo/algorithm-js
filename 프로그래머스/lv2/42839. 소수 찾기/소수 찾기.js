function isPrime(number) {
    if (number < 2) 
        return false;
    
    for (let i = 2; i <= parseInt(number**.5); ++i) {
        if (number % i === 0) 
            return false;
    }
    
    return true;
}

function solution(numbers) {
    const candidates = [];
    const nums = numbers.split('');
    const visited = Array(numbers.length).fill(false);
    
    function combination(str, len) {
        if (str.length === len) {
            candidates.push(parseInt(str));
            return;
        }
        
        for (let i = 0; i < nums.length; ++i) {
            if (visited[i]) continue;
            
            visited[i] = true;
            combination(str + nums[i], len);
            visited[i] = false;
        }
    }
    
    nums.forEach((_, i) => {
        combination('', i + 1);
        visited.fill(false);
    });

    return [...new Set([...candidates])].filter(isPrime).length;
}
