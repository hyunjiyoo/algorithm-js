function solution(gems) {
    const answer = [];
    const typeCount = new Set([...gems]).size;
    const map = new Map();
    
    gems.forEach((gem, i) => {
        map.delete(gem);
        map.set(gem, i);
        if (map.size === typeCount) {
            answer.push([map.values().next().value + 1, i + 1]);   
        }
    });
    
    answer.sort((a, b) => {
        if (a[1] - a[0] < b[1] - b[0])
            return -1;
        
        if (a[1] - a[0] === b[1] - b[0])
            return a[0] - b[0];
        
        return 1
    });
    
    
    return answer[0];
}