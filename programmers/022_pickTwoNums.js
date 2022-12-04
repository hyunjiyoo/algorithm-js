function solution(numbers) {
  const answer = [];
  const chk = Array(101).fill(false);

  (function combination(step = 0, start = 0) {
    if (step === 2) {
      const sum = chk.reduce((acc, c, i) => (c ? acc + numbers[i] : acc), 0);
      answer.push(sum);
      return;
    }

    for (let i = start; i < numbers.length; ++i) {
      if (chk[i]) continue;

      chk[i] = true;
      combination(step + 1, i);
      chk[i] = false;
    }
  })();

  return [...new Set(answer)].sort((a, b) => a - b);
}
