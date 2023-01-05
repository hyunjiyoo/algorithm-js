function solution(k, tangerine) {
  const count = Array(10_000_000).fill(0);

  tangerine.forEach((t) => {
    count[t - 1]++;
  });
  count.sort((a, b) => b - a);

  for (let i = 0; i < count.length; ++i) {
    if (k <= 0) return i;
    k -= count[i];
  }
}
