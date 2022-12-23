function solution(n, wires) {
  let answer = Number.MAX_SAFE_INTEGER;
  const chk = Array(wires.length).fill(false);
  let count = 1;
  let cutted = -1;

  function bfs(basis) {
    for (let i = 0; i < wires.length; ++i) {
      if (i === cutted || chk[i] || wires[i][0] !== basis) continue;
      count++;
      chk[i] = true;
      bfs(wires[i][1]);
      chk[i] = false;
    }
  }

  for (let i = 0; i < wires.length; ++i) {
    count = 1;
    cutted = i;
    bfs(1);
    answer = Math.min(answer, Math.abs(2 * count - n));
  }

  return answer;
}
