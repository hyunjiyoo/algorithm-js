function makeCandidate(relation, indice) {
    return relation.map((col) => indice.reduce((acc, idx) => acc + col[idx], ''));
}

function isUnique (candidate, ROW_SIZE) {
    return new Set([...candidate]).size === ROW_SIZE;  
} 

function isMinimality(indice, relation, ROW_SIZE) {
    if (indice.length === 1) return true;
    
    for (let i = 0; i < indice.length; ++i) {
        const filteredIndice = indice.filter((_, j) => i !== j);
        if (isUnique(makeCandidate(relation, filteredIndice), ROW_SIZE))
            return false;
    }
    
    return true;
}

function solution(relation) {
    const ROW_SIZE = relation.length;
    const COLUMN_SIZE = relation[0].length;
    
    const check = Array(COLUMN_SIZE).fill(-1);
    const unique = new Set();
    
    function combination(step, count) {
        if (step === count) {
            const indice = check.filter((s) => s !== -1);
            const cadidate = makeCandidate(relation, indice)
            
            if (isUnique(cadidate, ROW_SIZE) && 
                isMinimality(indice, relation, ROW_SIZE)) {
                unique.add(indice.toString());
            } 

            return;
        }
        
        for (let i = step; i < COLUMN_SIZE; ++i) {
            if (check[i] !== -1) continue;
            
            check[i] = i;
            combination(i + 1, count);
            check[i] = -1;
        }
    }
    
    for (let i = 1; i <= COLUMN_SIZE; ++i) {
        combination(0, i);
    }
            
    return unique.size;
}