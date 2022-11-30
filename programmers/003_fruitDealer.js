function solution(k, m, score) {
  let answer = 0;
  
  const sorted = score.sort((a, b)=> b - a);
  const appleCount = score.length;
  
  for (let i = 0; i < appleCount; i += m) {
      if (appleCount - i < m) break;
      const sliced = score.slice(i, i + m);
      answer += sliced[m - 1] * m;
  }
  
  return answer;
}