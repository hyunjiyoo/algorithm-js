function solution(begin, target, words) {
    if (!words.includes(target)) 
        return 0;
    
    const visited = Array(words.length).fill(false);
    const answer = [];
    
    function compareWords (strings, word) {
        return [...strings].reduce(
            (acc, str, i) => (str === word[i] || acc > 1) ? acc : acc + 1, 0);
    }
    
    (function dfs(str = begin, count = 0) {
        if (str === target) {
            answer.push(count);
            return;
        }
        
        for (let i = 0; i < words.length; ++i) {
            if (!visited[i]) {
                const diffWordCount = compareWords(str, words[i]);
                
                if (diffWordCount === 1) {
                    visited[i] = true;
                    dfs(words[i], count + 1);
                    visited[i] = false;
                }
            }
        }
    })();
    
    return answer.length > 0 ? Math.min(...answer) : 0;
}