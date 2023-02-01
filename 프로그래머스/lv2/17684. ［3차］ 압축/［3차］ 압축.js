function initialDictionary() {
    const map = new Map();
    
    for (let i = 65; i < 91; ++i)
        map.set(String.fromCharCode(i), i - 64);
    
    return map;
}

function solution(msg) {
    const answer = [];
    const dict = initialDictionary();
    
    let index = 27;
    let start = 0;
    while (start < msg.length) {
        let end = start;
        for (; end <= msg.length; ++end) {
            const candidate = msg.substring(start, end + 1);
            if (!dict.has(candidate))
                break;
        }
        
        const w = msg.substring(start, end);
        const c = msg[end];
        answer.push(dict.get(w));
        dict.set(w + c, index++);
        
        start += w.length;
    }
    
    return answer;
}