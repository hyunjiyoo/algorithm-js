function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const queue = [[0, 0, 1]];
    
    const offset = [[0, 1], [1, 0], [-1, 0], [0, -1]];
    const isOutMap = (y, x) => !((0 <= y && y < n) && (0 <= x && x < m));
    const isArrived = (y, x) => (y === n - 1 && x === m - 1);
    const visited = Array.from(new Array(n), () => Array(m).fill(false));
    
    let answer = -1;
    visited[0][0] = true;
    
    while (queue.length) {
        const [y, x, dist] = queue.shift();
        
        if (isArrived(y,x)) {
            answer = dist;
            break;
        }
        
        for (let i = 0; i < 4; ++i) {
            const ny = offset[i][0] + y;
            const nx = offset[i][1] + x;

            if (isOutMap(ny, nx) || visited[ny][nx] || !maps[ny][nx]) continue;
            
            visited[ny][nx] = true;
            queue.push([ny, nx, dist + 1]);
        }
    }
    
    return answer;
}