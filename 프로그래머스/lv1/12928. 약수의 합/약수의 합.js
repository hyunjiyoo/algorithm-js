function solution(n) {
    const sequenceNumbers = Array.from(Array(n), (_, i) => i+1);
    const getSumGCD = (sum, num) => n % num === 0 ? sum + num : sum;
     
    return sequenceNumbers.reduce(getSumGCD, 0);
}