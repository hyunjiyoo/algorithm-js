function solution(lottos, win_nums) {
  let match = 0;
  let zeroCount = 0;
  lottos.forEach((lotto) => {
    match += win_nums.includes(lotto);
    zeroCount += lotto === 0;
  });

  if (match === 6) return [1, 1];
  if (match === 0) {
    return zeroCount === 0 ? [6, 6] : [1, 6];
  }

  return [7 - (match + zeroCount), 7 - match];
}
