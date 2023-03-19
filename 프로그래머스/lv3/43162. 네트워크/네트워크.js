function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(false);
    
    function dfs(i) {
        visited[i] = true;
        computers[i].forEach((computer, j) => {
            if (computer && !visited[j]) {
                dfs(j);
            }
        });
    }
    
    computers.forEach((computer, i) => {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    });
    
    return answer;
}
