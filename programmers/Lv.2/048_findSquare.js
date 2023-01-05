function solution(board)
{
    let answer = 1;
    const basis = [];
    for (let i = 0; i < board.length; ++i) {
        for (let j = 0; j < board[0].length; ++j) {
            if (board[i][j])
                basis.push([j, i]);
        }
    }

    while (basis.length) {
        const [w, h] = basis.shift();
        
        let len = 2;
        let possible = true;
        while (possible || len <= board.length) {
            outer: {
                const widthEnd = w + len > board[0].length ? board[0].length : w + len;
                const heightEnd = h + len > board.length ? board.length : h + len;
                for (let i = w; i < widthEnd; ++i) {
                    for (let j = h; j < heightEnd; ++j) {
                        if (board[i][j] === 0) {
                            possible = false;
                            break outer;     
                        }
                    }
                }
            }

            if (possible) {
                answer = Math.max(answer, len*len);
                ++len;
            }  
            console.log(answer);    
        
        }
    }
    
    return answer;
}
solution([
  [0, 1, 1, 1], 
  [1, 1, 1, 1], 
  [1, 1, 1, 1], 
  [0, 0, 1, 0]]);