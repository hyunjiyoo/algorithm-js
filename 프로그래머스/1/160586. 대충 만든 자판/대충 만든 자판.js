function solution(keymap, targets) {
    const answer = [];
    
    targets.forEach((target) => {
        let sum = 0;
        const targetArr = target.split('');
        const flag = Array.from({ length: targetArr.length }, () => false);
    
        targetArr.forEach((t, i) => {
            let minIndex = Infinity;

            keymap.forEach(key => {
                if (!key.includes(t)) return;
                
                const index = key.indexOf(t);
                minIndex = Math.min(index + 1, minIndex);
                flag[i] = true;
            });
            
            sum += flag[i] ? minIndex : 0;
        });

        answer.push(flag.every(f => f) ? sum : -1);        
    });
    
    return answer;
}