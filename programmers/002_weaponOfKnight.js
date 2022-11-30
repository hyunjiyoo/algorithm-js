function getDivisorCount(n) {
  let count = 0;
  for (let i = 1; i * i <= n; ++i) {
      if (n % i === 0) {
          if (n / i === i) {
              count++;
          } else {
              count += 2;
          }
      }
  }
  return count;
}

function solution(number, limit, power) {
  let answer = 1;
  
  for(let i = 2; i <= number; ++i) {
      const divisorCount = getDivisorCount(i);
      answer += divisorCount > limit ? power : divisorCount;
  }
  
  return answer;
}