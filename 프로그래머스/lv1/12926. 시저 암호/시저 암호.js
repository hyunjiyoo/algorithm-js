function solution(s, n) {
    const isUpperCase = (c) => /[A-Z]/.test(c);
    const isLowerCase = (c) => /[a-z]/.test(c);
    
    return [...s].reduce((acc, c) => {
        if (c === ' ')
            return acc + c;
        
        const offset = c.charCodeAt(0) + n;
        const isOutOfRange = (isUpperCase(c) && 90 < offset) || (isLowerCase(c) && offset > 122);
        const code = String.fromCharCode(isOutOfRange ? offset - 26 : offset);
        
        return acc + code;
    }, '');
}
