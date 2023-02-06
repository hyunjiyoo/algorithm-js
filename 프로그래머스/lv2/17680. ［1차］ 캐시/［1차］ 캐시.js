function solution(cacheSize, cities) {
    if (cacheSize === 0) {
        return cities.length * 5;
    }
    
    const cityList = cities.map(city => city.toLowerCase());    
    const queue = [];
    let answer = 0;
    
    for (const city of cityList) {
        const idx = queue.indexOf(city);
        
        if (idx !== -1) {
            queue.splice(idx, 1);
            answer += 1;
        } else {
            (queue.length === cacheSize) && queue.shift();    
            answer += 5;
        }
        
        queue.push(city);
    }
    
    return answer;
}
