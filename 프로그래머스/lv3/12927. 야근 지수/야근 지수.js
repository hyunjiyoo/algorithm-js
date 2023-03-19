function solution(n, works) {
    const sum = works.reduce((acc, w) => acc + w, 0);
    if (sum <= n) return 0;
    
    const len = works.length;
    works.sort((a,b) => a-b);
    
    while (n) {
        const max = works[len - 1];
        
        for (let i = len - 1; i >= 0; --i) {
            if (works[i] !== max || n === 0) 
                break;
            
            works[i]--;
            n--;
        }
    }

    return works.reduce((acc, w) => acc + w**2, 0);
}