function isDeleted(board, empty, m, n) {
    let able = false;
    
    for (let i = 0; i < m - 1; ++i) {
        for (let j = 0; j < n - 1; ++j) {
            if (board[i][j] === ' ') continue;
            
            if (board[i][j] === board[i][j+1] &&
                board[i][j] === board[i+1][j] &&
                board[i][j] === board[i+1][j+1]) 
            {
                empty[i][j] = empty[i][j+1] = empty[i+1][j] = empty[i+1][j+1] = able = true;
            }
        }
    }
    
    return able;
}

function deleteBoard(board, empty, m, n) {
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (empty[i][j])
                board[i][j] = " ";
        }
    }
}

function downBlock(board, empty, m, n) {
    for (let i = m - 2; i >= 0; --i) {
        for (let j = 0; j < n; ++j) {
            const item = board[i][j];
            if (item === " ") continue;
            
            let idx = i;
            while (idx < m - 1 && empty[idx + 1][j]) {
                board[idx][j] = " ";
                board[idx + 1][j] = item;
                
                empty[idx][j] = true;
                empty[idx + 1][j] = false;
                idx++;
            }
        }
    }
}


function solution(m, n, origBoard) {    
    const board = origBoard.map((b) => b.split(''));
    const empty = Array.from(new Array(m), () => Array(n).fill(false));

    while (isDeleted(board, empty, m, n)) {  
        deleteBoard(board, empty, m, n);
        downBlock(board, empty, m, n); 
    }
    
    return board.flat().filter(b => b === ' ').length;
}
