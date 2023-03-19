function solution(A, B) {
    let answer = 0;
    
    A.sort((a,b)=>b-a);
    B.sort((a,b)=>b-a);
    // console.log(A);
    // console.log(B);
    
    let len = B.length;
    const visited = Array(len).fill(false);
    const max = B[0];
    
    let start = 0;
    for (let i = 0; i < len; ++i) {
        for (let j = start; j < len; ++j) {
            if (!visited[j] && B[j] > A[i]) {
                visited[j] = true;
                start = j;
                ++answer;
                break;
            }
        }
    }
    
    return answer;
}