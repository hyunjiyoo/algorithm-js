function solution(s){
    const stack = Array.of(s[0]);
    
    for (const c of s.slice(1)) {
        if (c === '(')
            stack.push(c);
        else
            stack.pop();
    }
    
    return stack.length === 0;
}