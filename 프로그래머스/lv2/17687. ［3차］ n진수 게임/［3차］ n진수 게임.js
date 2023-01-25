function solution(n, t, m, p) {
    let answer = '';
    
    const nums = [];
    const totalCount = t * m;

    let num = 0; 
    let i = 0;
    
    let len = 0;
    while (len < totalCount) {        
        const numArr = num.toString(n).split('');
        len += numArr.length;
        nums.push(numArr);
        num++;
    }
    
    let count = 0;
    nums.flat().forEach((num, i) => {
        if (count === t) return;

        if (i % m === p - 1) {
            answer += num;
            count++;
        }
    });
    
    return answer.toUpperCase();
}
