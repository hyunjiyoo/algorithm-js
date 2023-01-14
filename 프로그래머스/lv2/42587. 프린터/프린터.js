function solution(priorities, location) {
    let answer = 0;
    let queue = priorities.map((p, i) => ({ priority: p, location: i }));
    
    while (true) {
        if (queue.length === 0)
            break;
        
        const curr = queue.shift();
        const found = queue.find(({ priority }) => priority > curr.priority);
        
        if (found) {
            queue = [...queue, curr];
        } else {
            answer++;
            if (location === curr.location)
                break;
        }
    }
    
    return answer;
}