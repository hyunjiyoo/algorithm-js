function solution(n, info) {
  const ryanShoot = Array(11).fill(0);

  const ryan = info.map((i) => i + 1);
  const apeach = info
    .map((apeach, i) => (apeach ? 10 - i : 0))
    .filter((s) => s);
  const calcScore = (shoot) => shoot.reduce((acc, shoot) => acc + shoot, 0);

  let shootable = Array(11).fill(0);
  let maxDiff = 0;
  let isRemain = false;

  const answers = [];

  function shoot(start, count) {
    if (count === 0) {
      const ryanScore = calcScore(ryanShoot);
      const apeachShoot = apeach.filter((shoot) => !ryanShoot.includes(shoot));
      const apeachScore = calcScore(apeachShoot);

      const diff = ryanScore - apeachScore;
      if (diff > 0 && diff >= maxDiff) {
        const winned = ryan.map((r, i) => (ryanShoot[i] ? r : 0));
        maxDiff = diff;
        shootable = [...winned];

        if (isRemain) shootable[10] = ryanShoot[10];

        answers.push([diff, shootable]);
      }

      return;
    }

    for (let i = start; i < 11; ++i) {
      if (ryanShoot[i]) continue;

      if (count && ryan.slice(start).every((score) => count < score)) {
        ryanShoot[10] = count;
        isRemain = true;
        shoot(10, 0);
        ryanShoot[10] = isRemain = 0;
        break;
      }

      if (count - ryan[i] < 0) continue;

      ryanShoot[i] = 10 - i;
      shoot(i + 1, count - ryan[i]);
      ryanShoot[i] = 0;
    }
  }

  shoot(0, n);

  let index = 0;
  let max = -1;
  const maxDiffAnswers = answers
    .filter((c) => c[0] === maxDiff)
    .map((c) => c[1]);
  maxDiffAnswers.forEach((arr, idx) => {
    const num = +arr.reverse().join("");
    if (num > max) {
      max = num;
      index = idx;
    }
    arr.reverse();
  });

  return maxDiffAnswers[index] ?? [-1];
}
