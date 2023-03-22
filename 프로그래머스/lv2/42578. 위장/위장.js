function solution(clothes) {
    const map = new Map();
    clothes.forEach(([name, type], i) => {
        map.has(type) 
            ? map.set(type, map.get(type) + 1) 
            : map.set(type, 1);        
    });
    
    return [...map].reduce((cnt, [_, c]) => cnt * (c + 1), 1) - 1;
}