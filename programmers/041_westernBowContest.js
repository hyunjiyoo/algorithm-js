function solution(n, apeach) {
  let answer = [];

  const ryan = apeach.map((a) => a + 1);
  const win = Array(11).fill(false);

  let possible = false;
  let basisDiff = 0;
  function comb(start, step) {
    if (step <= 0) {
      const updated = ryan.map((r, i) => win[i] ? r : 0);

      if (step < 0) {
        updated[start - 1] = 0;
        win[start - 1] = false;

        step *= -1;
        for (let i = start; i < 11; ++i) {
          if (ryan[i] >= step)  {
            ryan[i] = step;
          }
          if (apeach[i] !== 0 && updated[i] <= apeach[i]) {
            updated[i] = step * -1;
            win[i] = true;
            break;
          }
        }
      }

      const ryanScore = win.reduce(
        (acc, c, i) => (c ? acc + 10 - i : acc),
        0
      );

      const apeachScore = apeach.reduce(
        (acc, c, i) => (c !== 0 && !win[i] ? acc + 10 - i : acc),
        0
      );
      const diff = ryanScore - apeachScore;
      if (diff > 0) {
        possible = true;

        if (diff >= basisDiff) {
          basisDiff = diff;
          answer = updated;
        }
      }

      return;
    }

    for (let i = start; i < 11; ++i) {
      if (win[i]) continue;

      win[i] = true;
      comb(i + 1, step - ryan[i]);
      win[i] = false;
    }
  }

  comb(0, n);

  return possible ? answer : [-1];
}
