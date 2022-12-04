function solution(n) {
  const arr = [];

  let N = n;
  while (N > 0) {
    arr.push(N % 3);
    N = Math.floor(N / 3);
  }

  return arr.reverse().reduce((ans, n, i) => ans + n * Math.pow(3, i), 0);
}
