function divisorCount(num) {
  let count = 0;
  for (let i = 1; i * i <= num; ++i) {
    if (num % i === 0) count += num / i === i ? 1 : 2;
  }

  return count;
}

function solution(left, right) {
  let answer = 0;
  for (let num = left; num <= right; ++num) {
    const count = divisorCount(num);
    answer += count % 2 === 0 ? num : -num;
  }

  return answer;
}
