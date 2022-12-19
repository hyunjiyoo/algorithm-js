function solution(n, left, right) {
  const arr = [];

  for (let i = left; i <= right; ++i) {
    arr.push(Math.max(parseInt(i / n) + 1, (i % n) + 1));
  }

  return arr;
}
