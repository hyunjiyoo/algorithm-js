function solution(s) {
    const ascend = (a, b) => a - b;
    const sortedNumber = s.split(' ').map(Number).sort(ascend);
    const length = sortedNumber.length;
    
    return `${sortedNumber[0]} ${sortedNumber[length - 1]}`;
}