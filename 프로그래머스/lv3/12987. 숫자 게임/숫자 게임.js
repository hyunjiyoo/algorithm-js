function solution(A, B) {
    const LEN = B.length;
    const visited = Array(LEN).fill(false);
    let start = 0;
    
    A.sort((a,b)=>b-a);
    B.sort((a,b)=>b-a);
    
    for (let i = 0; i < LEN; ++i) {
        for (let j = start; j < LEN; ++j) {
            if (!visited[j] && B[j] > A[i]) {
                visited[j] = true;
                start = j;
                break;
            }
        }
    }
    
    return visited.filter(v => v).length;
}