function solution(k, score) {
  const answer = [];
  
  score.forEach((item, i, arr) => {
      const sorted = arr.slice(0, i + 1).sort((a, b) => b - a);
      answer.push(i < k ? sorted[i] : sorted[k - 1]);
  });
  
  return answer;
}