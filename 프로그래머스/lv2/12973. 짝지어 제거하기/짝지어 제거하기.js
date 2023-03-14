function solution(s) {
    const stack = [s[0]];
    
    for (let i = 1; i < s.length; ++i) {
        const prev = stack[stack.length - 1];
        const next = s[i];
        
        if (prev === next) {
            stack.pop();
        } else {
            stack.push(next);
        }
    }   
    
    return +(stack.length === 0);
}
