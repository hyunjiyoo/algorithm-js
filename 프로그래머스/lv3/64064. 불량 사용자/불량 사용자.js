function solution(user_id, banned_id) {
    const set = new Set();
    const ascendSort = (a, b) => a - b;
    const visited = Array(user_id.length).fill(false);
    const regex = banned_id.map((bid) => new RegExp(`^${bid.replaceAll('*', '.')}$`));
    
    (function combination(start = 0, arr = []) {
        if (arr.length === banned_id.length) {
            const idxlist = arr.map((id, i) => regex[i].test(id) ? user_id.indexOf(id) : -1).filter((id) => id !== -1);
            
            if (idxlist.length === banned_id.length) {
                set.add(idxlist.sort(ascendSort).join(','));
            }
            
            return;
        }
        
        for (let i = 0; i < user_id.length; ++i) {
            if (!visited[i]) {
                visited[i] = true;
                combination(i + 1, [...arr, user_id[i]]);
                visited[i] = false;    
            }
        }
    })();
    
    return set.size;
}