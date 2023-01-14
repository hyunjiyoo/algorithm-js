function solution(priorities, location) {
    let answer = 0;
    let priorityList = priorities.map((p, i) => ({ priority: p, location: i }));
    
    while (true) {
        if (priorityList.length === 0)
            break;
        
        const curr = priorityList.shift();
        const found = priorityList.find(({ priority }) => priority > curr.priority);
        
        if (found) {
            priorityList = [...priorityList, curr];
        } else {
            answer++;
            if (location === curr.location)
                break;
        }
    }
    
    return answer;
}