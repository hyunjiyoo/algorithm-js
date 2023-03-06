function solution(land) {
    const score = Array.from(Array(land.length), (_, i) => i === 0 ? land[0] : Array(4).fill(0));
    
    for (let i = 1; i < land.length; ++i) {
        for (let col = 0; col < 4; ++col) {
            for (let j = 0; j < 4; ++j) {
                if (col === j) continue;
                score[i][col] = Math.max(score[i - 1][j] + land[i][col], score[i][col]);
            }    
        }
    }
    

    return Math.max(...score[land.length - 1]);
}