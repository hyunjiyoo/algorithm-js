function solution(t, p) {
    const length = p.length;    
    
    return [...t].reduce((count, _, i, tt) => {
        const subStr = tt.slice(i, i + length).join('');
        return (subStr.length >= p.length) && (+subStr <= p) ? count + 1 : count;
    }, 0);
}