function solution(k, dungeons) {
  let answer = -1;
  const chk = Array(8).fill(false);

  (function explore(k, count) {
    answer = Math.max(answer, count);

    dungeons.forEach(([need, use], i) => {
      if (chk[i] || k < need) return;

      chk[i] = true;
      explore(k - use, count + 1);
      chk[i] = false;
    });
  })(k, 0);

  return answer;
}
