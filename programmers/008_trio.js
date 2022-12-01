function solution(number) {
  const chk = Array(15).fill(0);
  let answer = 0;

  function comb(step, start, value) {
    if (step === 3) {
      if (value === 0) ++answer;
      return;
    }

    for (let i = start; i < number.length; ++i) {
      if (chk[i]) continue;

      chk[i] = 1;
      comb(step + 1, i + 1, value + number[i]);
      chk[i] = 0;
    }
  }

  comb(0, 0, 0);

  return answer;
}
