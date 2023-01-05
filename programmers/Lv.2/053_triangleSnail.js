function solution(n) {
  const answer = Array.from(new Array(n), () => Array(n).fill(0));

  const offset = [
    [1, 0],
    [0, 1],
    [-1, -1],
  ];

  let y = -1;
  let x = 0;
  let num = 1;
  for (let i = n; i > 0; --i) {
    const [ny, nx] = offset[(n - i) % 3];
    for (let j = 0; j < i; ++j) {
      y += ny;
      x += nx;
      answer[y][x] = num++;
    }
  }

  return answer.flat().filter((ans) => ans);
}
