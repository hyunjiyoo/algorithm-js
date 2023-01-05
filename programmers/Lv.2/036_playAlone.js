function solution(cards) {
  const answer = [];
  const chk = Array(cards.length + 1).fill(false);
  let count = 0;

  function dfs(pick) {
    const next = cards[pick - 1];

    if (chk[next]) return;

    chk[next] = true;
    count++;
    dfs(next);
  }

  let totCount = 0;
  cards.forEach((_, i) => {
    if (chk[i + 1]) return;

    chk[i + 1] = true;
    count = 0;
    dfs(i + 1);

    totCount++;
    answer.push(count + 1);
  });

  answer.sort((a, b) => b - a);

  return totCount === 1 ? 0 : answer[0] * answer[1];
}
