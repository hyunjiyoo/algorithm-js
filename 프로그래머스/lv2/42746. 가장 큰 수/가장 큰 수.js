function solution(numbers) {
    
    if (numbers.every(num => num === 0)) {
        return "0";
    }
    
    const map = new Map();
    const descend = (a, b) => {
        if (a[1] < b[1]) return 1;
        if (a[1] > b[1]) return -1;
        return 0;
    }
    
    numbers.forEach((num, i) => {
        const numStr = num.toString();
        const value = numStr.repeat(4).slice(0, 4);
        map.set(`${num}-${i}`, value);
    });
    
    return [...map].sort(descend).map(m => m[0].split('-')[0]).join('');
}
