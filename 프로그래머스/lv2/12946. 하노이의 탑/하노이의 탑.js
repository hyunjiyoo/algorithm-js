function solution(circle) {
    const answer = [];
    
    function move(start, end, n) {    
        if (n === 1) {
            answer.push([start, end]);
            return;
        }
    
        move(start, 6 - start - end, n - 1);
        move(start, end, 1);
        move(6 - start - end, end, n - 1);
    }
    
    move(1, 3, circle);
    
    return answer;
}
