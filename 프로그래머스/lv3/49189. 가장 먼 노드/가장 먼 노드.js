function solution(n, edge) {
    const visited = Array(n+1).fill(false);
    const level = Array(n+1).fill(0);
    const queue = [1];
    visited[1] = true;
    
    while (queue.length) {
        const target = queue.shift();
        const lev = level[target] + 1;
        
        edge.forEach(([e1, e2]) => {
            if (e1 === target && !visited[e2]) {
                visited[e2] = true;
                queue.push(e2);
                level[e2] = lev;
                return;
            } 
            if (e2 === target && !visited[e1]) {
                visited[e1] = true;
                queue.push(e1);
                level[e1] = lev;
            }
        });
    }
    
    const max = Math.max(...level);
    return level.filter(l => l === max).length;
}
