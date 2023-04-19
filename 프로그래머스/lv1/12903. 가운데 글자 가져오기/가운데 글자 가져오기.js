function solution(s) {
    const length = s.length;
    const mid = Math.floor(length / 2);
    
    return length % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
}