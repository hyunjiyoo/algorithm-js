function solution(n, words) {
    const set = new Set();
    
    let seq = 0;
    for (let i = 0; i < words.length; ++i) {
        const isNotMatched = i < words.length - 1 ? !words[i].endsWith(words[i+1][0]) : true;
        const isDuplicated = set.has(words[i]);
        
        if (isDuplicated || isNotMatched) {
            seq = isDuplicated ? i + 1 : i + 2
            break;
        }
        
        set.add(words[i]);
    }
    
    if (seq > words.length) return [0, 0];

    return (seq % n === 0) ? [n, Math.floor(seq / n)] : [seq % n, Math.floor(seq / n) + 1];
}