function solution(a, b) {
  return a.reduce((ans, num, i) => ans + num * b[i], 0);
}
